const jwt=require('jsonwebtoken')
//  create token 
 const createToken=(payload)=> {
    const token = jwt.sign(payload, 'sohanur653', { expiresIn: '1m' });
    return token;
  };

module.exports={
    createToken,

}