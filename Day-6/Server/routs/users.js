const express=require("express");
const cryptojs = require('crypto-js');
const jwt=require("jsonwebtoken");


const pool=require("../db/pool");
const result=require("../utils/result");
const consfig=require("../utils/config");

const { error } = require("node:console");

const router=express.Router();

router.post("/signup",(req,res)=>{
    const { name , email , password , mobile }=req.body;
    const sql=`INSERT INTO users(name,email,password,mobile) VALUES (?,?,?,?)`;
    const hashedpassword=cryptojs.SHA256(password).toString();
    pool.query(sql,[name,email,hashedpassword,mobile],(error,data)=>{
        res.send(result.createResult(error,data));
    })
});

router.post("/signin", (req,res)=>{
    const{ email , password }=req.body;
    const hashedpassword=cryptojs.SHA256(password).toString();
    const sql=`SELECT * FROM users WHERE email=? AND password=?`;
    pool.query(sql,[email,hashedpassword],(error,data)=>{
        if(error){
            res.send(result.createResult(error));
        }
        else if(data.length==0){
            res.send(result.createResult("Invalid email or password"));
        }
        else{
            const user=data[0];
            const payload={
                email:user.email,
                uid:user.uid
            };
            const token=jwt.sign(payload,consfig.SECRET);

            const userData={
                name:user.name,
                mobile:user.mobile,
                token
            }
            res.send(result.createResult(null,userData));
        }
    })
})

router.get("/get",(req,res)=>{
    const email =req.headers.email;
    const sql=`SELECT * FROM users WHERE email=?`;
    
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data));
    })
});

router.delete("/delete",(req,res)=>{
    const uid=req.headers.uid;
    const sql=`DELETE FROM users WHERE uid=?`;
    pool.query(sql,[uid],(error,data)=>{
        res.send(result.createResult(error,data));
    })
})


module.exports=router;