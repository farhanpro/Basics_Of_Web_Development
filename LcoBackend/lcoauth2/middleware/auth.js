const jwt = require('jsonwebtoken');




const auth = (req,res,next) =>
{
    console.log(req.cookies);
    const token = req.header('Authorization').replace('Bearer ','') 
    || req.cookies.token 
    || req.body.token;
    
    if(!token)
    {
        res.status(404).send("Token not found");
    }
    try
    {
        const decode = jwt.verify(token,process.env.SECRET_KEY);
        console.log(decode);
    } 
    catch(error)
    {
        res.status(404).send(error,"Token is not valid");
    }

    next();
}
module.exports = auth;
