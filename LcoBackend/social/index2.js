const express = require('express')
let format = require('date-format')
const app = express();
const PORT = 4000 || process.env.PORT; 


app.get("/",(req,res)=>
{
res.send("<h1>Hello from Farhan</h1>")
})



let today =  format.asString("[dd]-[MM]-[yyyy]-[hh]-[mm]",new Date())

app.get("/api/v1/facebook",(req,res)=>
{const FaceBook ={username : "Farhan",Followers : 55,Follows : 10,today,}
    res.status(200).json(FaceBook);
})



app.get("/api/v1/linkedin",(req,res)=>
{const linkedin = {username : "Farhan",Followers : 50,Follows : 70,today,}
    res.status(200).json({linkedin})})



app.get("/api/v1/instagram",(req,res)=>
{const instaSocial ={username : "Shaikh Farhan",Followers: 66,Follows:70,today,}
res.status(200).json({instaSocial})
})


app.get("/api/v1/:token",(req,res)=>
{
console.log('====================================');
console.log(req.params.token);
res.status(200).json({param: req.params.token})
console.log('====================================');
})

app.listen(PORT,()=>{
    console.log('====================================');
    console.log(`Server is Rnning at ${PORT
    }`);
    console.log('====================================');
})