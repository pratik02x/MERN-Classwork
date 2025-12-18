const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
   res.send("all user data..");
})

router.post("/",(req,res)=>{
     res.send("add user.");
})

router.put("/",(req,res)=>{
    res.send("update user");
})

router.delete("/",(req,res)=>{
    res.send("delete user");
})

module.exports=router;
