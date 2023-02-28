const jwt = require('jsonwebtoken');
exports.authVerify=(req,res,next)=>{
    let Token=req.headers['token'];
    jwt.verify(Token,"sohanur653",function (err,decoded) {
        if(err){

            res.status(401).json({status:"unauthorized user"})
        }
        else {
            let email=decoded['data'];

            req.headers.email=email

            next();
        }
    })
}