const mongoose = require('mongoose')

const _adduser = require('./AddUser')
const _userExists = require('./UserExists')
const _addMessage = require('./AddMessage')
const _getMessage = require('./GetMessage')
const _updateEmail = require('./UpdateUser')
const _getUserToken = require('./GetUserToken')

const user = require('../schema/User')
const message = require('../schema/Message')

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log('DB connected')})

const User = mongoose.model('user',user)
const Message = mongoose.model('message',message)




const database = {
  addUser:async (email,password)=>{return(await _adduser(email,password,User))},
  userExists:async (email)=>{return(await _userExists(email,User))},
  addMessage:async (email,message)=>{return(await _addMessage(email,message,User,Message))},
  getMessage:async (token)=>{return(await _getMessage(token,User,Message))},
  updateEmail:async (email,password,newEmail)=>{return(await _updateEmail(email,password,newEmail,User))},
  getUserToken:async (email,password)=>{return(await _getUserToken(email,password,User))}
}

module.exports=database