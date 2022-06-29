require("dotenv").config();
require('./config/database').connect();
const express = require('express');
const User = require('./model/user');

const app  = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('<h1>Hello World From auth System</h1>');
});

app.post('/register', async (req,res)=>
{
   const {firstname,lastname,email,password} =  req.body;
    if(!(email && password && firstname && lastname))
    {
        res.status(400),send("All Fields Required");
    }
    const existingUser = await User.findOne({email});

    if(existingUser)
    {
        res.status(401).send("User Already Exist");
    }
    
});

module.exports = app