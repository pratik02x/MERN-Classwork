const jwt = require('jsonwebtoken')

const config = require('./config')
const result = require('./result')

function authuser(req,res,next){
    
    const allAllowusers=["/user/signin","/user/signup"];

    if(allAllowusers.includes(req.url))
        next();

    else{
        
          const token=req.headers.token;
          if(!token){
            res.send(result.createResult("token is empty"))   ; 
        }
        else{
            try{
            const payload=jwt.verify(token,config.SECRET);
            req.headers.email=payload.email;
            req.headers.uid=payload.uid;
            next();
            }
            catch(ex){
                res.send(result.createResult("Invalid token"));
            }

        }

          

    }
}

module.exports=authuser;