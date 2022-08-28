const mongoose = require('mongoose');
const MONGODBURL = "mongodb://localhost:27017/lco3";
exports.connect = () =>
{
        mongoose.connect(MONGODBURL,
            {
                useNewUrlParser : true,
                useUnifiedTopology : true,
            })
            .then(console.log('DB Connected'))
            .catch(error =>
                {
                    console.log('DB Connection Failed');console.log(error);process.exit(1); 
                })
}