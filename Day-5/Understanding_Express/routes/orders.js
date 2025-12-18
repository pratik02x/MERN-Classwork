const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
   res.send("all order data..");
})

router.post("/",(req,res)=>{
     res.send("add order.");
})

router.put("/",(req,res)=>{
    res.send("update order")})

router.delete("/",(req,res)=>{
    res.send("delete order");
})

module.exports=router;

