const express = require('express')
const app = express();
const PORT = 4000 || process.env.PORT; 


app.get("/",(req,res)=>
{
res.send("<h1>Hello from Farhan</h1>")
})

app.get("/api/v1/instagram",(req,res)=>
{
    const instaSocial ={
        username : "Shaikh Farhan",
        Followers: 66,
        Follows:70,
        date: Date.now()
    }
    res.status(200).json({instaSocial})
//res.status(200).send("Hello From Shaikh Farhan");
})

app.listen(PORT,()=>{
    console.log('====================================');
    console.log(`Server is Rnning at ${PORT
    }`);
    console.log('====================================');
})