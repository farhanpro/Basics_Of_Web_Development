require("dotenv").config();
require('./config/database').connect();
const express = require('express');
const User = require('./model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const cookieParser = require('cookie-parser');

const app  = express();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req,res)=>{res.send('<h1>Hello World From auth System</h1>');});

app.post('/register', async (req,res)=>
{
   try
   {
    const {firstname,lastname,email,password} =  req.body; // this is equal to req.body.firstname ,req.body.lastname etc
    if(!(email && password && firstname && lastname)){res.status(400).send("All Fields Required");}
   
    const existingUser = await User.findOne({email});

    if(existingUser)
    {res.status(401).send("User Already Exist");}

    const myEncPassword = await bcrypt.hash(password,10);
    
    const user = await User.create({firstname,lastname,email,password:myEncPassword});
    //token
    const token = jwt.sign({user_Id:user._id,email},process.env.SECRET_KEY,{expiresIn:'2h'});
    user.token = token;
    //update or not

    //TODO: handle password situation
    
    user.password = undefined;
    
    res.status(201).json(user);
   }
   catch (error)
   {
    console.log(error);
   }
});

app.post('/login',async (req,res) =>
{
   try
   {
      const {email,password} = req.body;
      if(!(email && password))
      {res.status(400).send("All Fields Required");}

      const user = await User.findOne({email});
      // if(!user)
      // {
      //    res.status(400).send("You are not registered please register first");
      // }
     if(user && (await bcrypt.compare(password,user.password)))
     {
      
        const token = jwt.sign(
         {user_id:user._id,email},
         process.env.SECRET_KEY,
         {
            expiresIn:"2h"
         }
        );
        user.token = token
        user.password = undefined;  
      //   res.status(200).send(user); 
      
      // if you want to use cookies
      const options = 
      {
         expires:new Date(Date.now() + 3 * 24 * 60 * 60* 1000),
         httpOnly:true,
      };               
      res.status(200).cookie('token',token,options).json({success : true , token,user});                 
     }
     else
     {
         res.status(401).send("Invalid Credentials");
     }

   }
   catch(err){
      res.status(500).send(err);
   }

})

app.get("/dashboard",auth, (req,res)=>
{
   res.status(200).send("Welcome to Secret information");
})
module.exports = app