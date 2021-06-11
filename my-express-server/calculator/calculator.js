const express = require ('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',(req,res)=>res.sendFile(__dirname + "/index.html"));
app.post('/',(req,res)=> res.send("The result will be : " + (Number(req.body.num1) + Number(req.body.num2))));
app.listen('3000',()=>console.log("Running on 3000 "));