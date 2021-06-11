const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req,res){
       // console.log(req.body.CityName);
        const query = req.body.CityName; 
        const appid = "cd22bde52ae09b2b2fef897d692927e3"
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+ appid +"&units=metric";
        https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const WetherData = JSON.parse(data); 
            //console.log(WetherData);        
            const temp = WetherData.main.temp;
            const temp2 = WetherData.main.humidity;
            const temp3 = WetherData.weather[0].description;
            const temp4 = WetherData.weather[0].icon;
            const imgurl = "http://openweathermap.org/img/wn/"+ temp4+"@2x.png"
        res.write("<h1> The Weather Currently is " + temp3);
        res.write("<h1>The Temp in "+req.body.CityName+" is " + temp+ "Celcius</h1>");
        res.write("<img src ="+ imgurl+">")
        res.send();
        //console.log(temp);             
        //console.log(temp2);
        //console.log(temp3);
    });
});
});



app.listen(3000,function(){
    console.log("Server is running at port 3000");
})