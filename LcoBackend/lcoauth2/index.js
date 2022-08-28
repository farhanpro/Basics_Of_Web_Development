const app = require('./app');
const {PORT} = process.env
app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`);
})