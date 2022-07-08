const{emailPasswordAuth} = require('./Auth')

const updateEmail = async(email,password,newEmail,module) =>{
  const auth = await emailPasswordAuth(email,password,module)
  if(auth){
    await module.updateOne({'email':email,'password':password},{'email':newEmail,'password':password})
    return true
  } else {
    return false
  }
  
}

module.exports=updateEmail