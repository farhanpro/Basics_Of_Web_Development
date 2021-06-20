const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https')

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function(req,res){
    res.sendFile(__dirname+"/singup.html")
})
app.post('/', function(req,res){
    const first_name = req.body.first_name
    const second_name = req.body.second_name
    const email = req.body.email
    const data={
        members:[
            {
                email_address : email,
                status: 'subscribed',
                merg_fields :{
                    FNAME: first_name,
                    LNAME: second_name
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us6.api.mailchimp.com/3.0/lists/12a050b479";
    const options ={
        method:"POST",
        auth:"Farhan:1e006239dd66553921b35134b53981ca-us6"
    }

    const request = https.request(url,options,function(response){
        if(response.statusCode === 200){
            res.send("Succesfully Subscribed");
        }else{
            res.send("Faliure");
        }
        response.on("data",function (data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})
app.listen(3000,function(){console.log("Server is running at port 3000")});



//api key2 :1e006239dd66553921b35134b53981ca-us6
//list ID2 : 12a050b479
//api key : 4eab6b7ca9ed01322c9ef341148b4e56-us6
//list ID : c972119e29