const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send("Hello World "));
app.get('/contact',(req,res)=>res.send("7798286678 <br> shaikhfarhan549@gmail.com"));
app.get('/about',(req,res)=>res.send("My name is Farhan and im a web developer"));
app.listen(3000,()=>console.log('Example app listening on port 3000'));