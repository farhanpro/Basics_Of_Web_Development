
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=>res.sendFile(__dirname + "/bmicalculator.html"));
app.post('/',(req,res)=>res.send("The result will be : " + (
    
     footIntoCm  = req.body.val1 * 30.48,  
     InchIntoCm = req.body.val2 *2.54,
     height = footIntoCm + InchIntoCm,
     Number(req.body.val3/(height/100*height/100)

))) );
app.listen(3000,()=>console.log("Running on Port 3000"));
