const jwt  =require('jsonwebtoken');

//Model is optional here
const auth =  (req,res,next) =>
{
    console.log(req.cookies);
    const token = req.cookies.token || req.body.token ||req.header('Authorization').replace('Bearer ','') ;
    
    if(!token)
    {
      return  res.status(400).send("Token is missing"); 
    }
    try
    {
      const decode =  jwt.verify(token,process.env.SECRET_KEY);   
        console.log(decode);
    } 
    catch(error)
    {
        return res.status(401).send(error,"Invalid Token");
    }
    return next();
};
module.exports = auth; 
