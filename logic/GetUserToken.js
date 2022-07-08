const _getUserToken = async (email,password,module)=>{
  const user = await module.findOne({'email':email,'password':password})
  if(user){
    return(
      user.token
    )
  } else {
    return false
  }
}

module.exports = _getUserToken