const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.set("view engine ","ejs");


app.get('/', function (req, res){

    var today  = new Date();
    var currentDate = today.getDay();
    var day = "";

    if(currentDate === 6 || currentDate === 0){
        day = "Week End"
    }
    else{
        day = "Week Day"
    }
    res.render("lists",{kindOfDay : day})
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})