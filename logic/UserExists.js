const _userExists = async(email,module)=>{
  const tmp =await module.findOne({email})
  if(tmp){
    return true
  }
  else{
    return false
  }
}

module.exports=_userExists