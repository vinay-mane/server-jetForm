const _getUserData = require('./GetUserData')

const _getMessage = async(token,user_module,message_module)=>{
  const userData = await _getUserData(token,user_module)
  if(userData){
    return(await message_module.find({'id':userData._id}))
  }
  else{
    console.log('no user')
    return false
  }
}

module.exports=_getMessage