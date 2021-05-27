const express = require('express');
const app = express();
app.get('/',(req,res)=>res.send("Hello WorlD!"))
app.listen(3000,()=> console.log("Example app  listineing on port  3000!")) 