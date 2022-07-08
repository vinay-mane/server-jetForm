const emailPasswordAuth = async(email,password,module)=>{
  const user = await module.findOne({'email':email,'password':password})
  if(user){
    return true
  }
  else{
    return false
  }
}

const tokenAuth = async(token,module)=>{
  const user = await module.findOne({'token':token})
  if(user){
    return true
  }
  else{
    return false
  }
}

module.exports={emailPasswordAuth,tokenAuth}