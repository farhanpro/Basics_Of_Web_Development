const app = require('./app');
const {PORT} = process.env; // this is equal to process.env.port


app.listen(PORT,()=>{console.log(`Server is Running at ${PORT}...`);});