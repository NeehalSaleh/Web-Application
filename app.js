const express = require("express")
const app=express()
app.get('/',(req,res)=> {

res.send("it is work?")
})
//breing evemts routes

const events = require('./routes/event-routes')


app.use('/events', events)
//listen to pprt

app.listen(3000,()=>{
    console.log('app is work on 3000')
})
