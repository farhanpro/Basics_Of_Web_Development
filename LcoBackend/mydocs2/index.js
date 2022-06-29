const express = require('express');
const app = express()

let  LCO = [{courseName : "ReactJS",price : 399,author : "Farhan"},
{courseName : "AngularJS",price : 499,author : "Farhan"},
{courseName : "NodeJS",price : 499,author: "Farhan"}];
app.get('/',(req,res)=>
{
    res.status(200),res.send("<h1>Home Page</h1>");
})

app.get('/api/v1/courses',(req,res)=>{
 
          res.status(200)
          res.json(LCO);})

// app.post('/api/v1/appCourse',(req,res)=>{
//     console.log(req.body);
//         LCO.push(req.body);
//         res.send(true);});

        
    app.post('/api/v1/addcourses',(req,res)=>{
        console.log(req.body);
        LCO.push(req.body);
        res.send(true);
    });
        // console.log(req.body);
    // console.log(req.params);
    // LCO.push(req.body);
    // res.status(200);
    // res.send(true);

    
app.listen(4000,(req,res)=>
{
    console.log("Server is running on port 4000");
})