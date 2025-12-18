const express = require("express");
const userRouter = require('./routs/users')

const app = express();

app.use(express.json());

app.use('/user', userRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server is running on 4000');
});

