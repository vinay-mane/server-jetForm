const getUserData = async(token,model)=>{
  const user = await model.findOne({'token':token})
  if(user){
    return({
      'email':user.email,
      '_id':user._id
    })
  } else {
    return false
  }
}

module.exports=getUserData