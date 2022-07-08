const userExists = require('./UserExists')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const _adduser = async (email,password,module)=>{
  const token=jwt.sign(email,process.env.JWT_KEY+password)
  if(await userExists(email,module)){
    console.log(email+' user exists')
    return false
  } else {
    await module.create({
      'email':email,'password':password,'token':token
    })
    return true
  }
}
module.exports=_adduser