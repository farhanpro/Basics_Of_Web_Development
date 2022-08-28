require("dotenv").config();
require("./database").connect();
const { json } = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json())
const PORT = 4000;
const User = require("./RegisterModule");
const bcrypt = require('bcryptjs');



app.get('/', (req, res) => 
{
    res.status(200).json("Home route Activated");
});

app.post('/register',async(req,res)=>
{
    const {firstName , lastName,email,password} = req.body;
    if(!(email || password ||lastName || firstName))
    {
        res.status(400).send("Please Enter All Values ");
    }
    else
    {
        try 
        {
            const createUser = await User.create
        ({
            firstName,
            lastName,
            email : email.toLowerCase(),
            password : bcrypt.genSaltSync(10)
        })  
        }
        catch(error)
        {
            res.status(400).send("User Already Exist").json(error);
        }

        
        res.status(200).json(createUser);
    }
});
app.post('/login',async(req,res)=>
{
    const {email,password} = req.body;
    const UserInfo = await User.findOne({email})
    
   try{
    if(UserInfo.email == req.body.email && bcrypt.compare(password, UserInfo.password))
    {
        res.status(200).send("Login Succesfull").json(UserInfo);
    }
    else
    {
        res.status(400).send("Password Not Correct").json(UserInfo);
    }
   }
   catch(error)
   {
    res.status(500).send("User not  Found");
   }
})


app.listen(PORT,()=>
{
    console.log("Server is running on port 4000");
});
