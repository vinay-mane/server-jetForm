const getUserId = require('./GetUserId')
const _addMessage = async(email,message,user_module,message_module)=>{
  const userId = await getUserId(email,user_module)
  if(userId){
    message_module.create({
      'id':userId,
      'message':message
    })
    return(true)
  }
  else{
    return(
      false
    )
  }
}

module.exports=_addMessage