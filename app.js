const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const database = require('./logic/Database')

const port = process.env.PORT
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
  res.json({'st':'up'})
})

app.post('/login',async(req,res)=>{
  const token = await database.getUserToken(req.body.email,req.body.password)
  console.log(token)
  if(token){
    res.json({
      'st':true,
      'token':token
    })
  } else {
    res.json({'st':false})
  }
})

app.post('/signup',async(req,res)=>{
  const status = await database.addUser(req.body.email,req.body.password)
  console.log(status)
  if(status){
    const token = await database.getUserToken(req.body.email,req.body.password)
    console.log(token)
    if(token){
      res.json({
        'st':true,
        'token':token
      })
    } else {
      res.json({'st':false})
    }
  } else {
    res.json({'st':false})
  }
})

app.get('/message',async(req,res)=>{
  const message = await database.getMessage(req.body.token)
  // console.log(message)
  if(message){
    res.json({...{'st':true},message})
  } else {
    res.json({'st':false})
  }
})

app.post('/message',async(req,res)=>{
  const status = await database.addMessage(req.body.email,req.body.message)
  if(status){
    res.json({'st':true})
  } else {
    res.json({'st':false})
  }
})

app.listen(process.env.PORT,()=>{console.log('server on '+port)})





