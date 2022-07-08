const mongoose = require('mongoose')

const user = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  token:{
    type:String,
    required:true
  }
})

module.exports=user