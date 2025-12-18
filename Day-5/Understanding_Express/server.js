const express=require("express");
const app=express();

const userRouter=require("./routes/user");
const orderRouter=require("./routes/orders");
const productRouter=require("./routes/product");

app.use("/products",productRouter)
app.use("/users",userRouter);
app.use("/orders",orderRouter);







app.listen(4000,"localhost",()=>{
    console.log("server started at port:4000");
})




