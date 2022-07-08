const mongoose = require('mongoose')

const message = mongoose.Schema({
  id:{
    type:String,
    required:true
  },
  message:{
    type:Object,
    required:true
  }
})

module.exports=message