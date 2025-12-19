const express = require("express");
const userRouter = require('./routs/users')
const result=require("./utils/result")
const jwt=require("jsonwebtoken");
const config = require('./utils/config')
const app = express();
const authuser=require('./utils/auth');

app.use(express.json());
app.use(authuser);

app.use('/user', userRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server is running on 4000');
});

