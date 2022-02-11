const express = require("express");
const bodyParser = require("body-parser");
//const { dirname } = require("path/posix");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');
var items = ["Exercise","Coding","Reading"];
var workItems =[];
app.get("/",function (req, res){
    
    let today = new Date();
    
    let options = {
        weekday: "long",
        day : "numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-US",options);

    res.render("list" , {listTitle : day, input_field : items});   

}) 
app.post("/",function (req,res){
   let item = req.body.input_field;
   items.push(item);
   res.redirect("/"); 
});

app.get("/work",function(req,res){
    res.render("list",{listTitle : "Work Lists", newListItems: workItems});
})
app.post("/work",function(req,res){
    let item = req.body.newitem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
})