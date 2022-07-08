getUserId = async(email,module)=>{
  const tmp=await module.findOne({'email':email})
  if(tmp){
    return tmp._id
  }
  else{
    return false
  }
}

module.exports=getUserId