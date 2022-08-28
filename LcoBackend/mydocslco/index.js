const express = require('express');
const app = express();
const PORT = 4000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const fileUpload = require('express-fileupload');




app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload());



let Courses =[{id:"11",name:"Learn React JS",price:299},
            {id:"12",name:"Learn Angular",price:399},
            {id:"13",name:"Learn Python Django",price:499},];

    app.get('/',(req,res)=>{res.status(200),
                        res.send("<h1>Farhan PORt</h1>");});


    app.get('/api/v1/lco',(req,res)=>{
    res.status(200),
    res.send("<h1>WellCome to Learn Code Online docs</h1>");})

    app.get('/api/v1/lcoobject',(req,res)=>{
    res.status(200),
    res.json(name = {name:"Farhan",age:21,city:"Mumbai"});})

    app.get('/api/v1/courses',(req,res)=>{
    res.status(200),
    res.send(Courses);});

    app.get('/api/v1/mycourse/:courseId',(req,res)=>{
    const myCourse =  Courses.find(course=>Courses.id===req.params.courseId);
    res.send(myCourse)});

    app.post('/api/v1/addcourses',(req,res)=>{
        console.log(req.body);
        Courses.push(req.body);
        res.send(true);
    });

    app.get('/api/v1/coursequery',(req,res)=>{
        let location = req.query.location;
        let device = req.query.device;  
        res.send({location,device});  
    });
    
    app.post('/api/v1/courseupload',(req,res)=>{
        console.log(req.files);
        console.log(req.headers);
        const file = req.files.file;
        let path = __dirname + "/images/" + Date.now() + ".jpg"

        file.mv(path,(err)=>{res.send(true);})});


app.listen(PORT,()=>{console.log(`App is Running at ${PORT}`)})
