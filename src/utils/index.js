import express from 'express'
import{ app }from './app.js'
import connectDB from './db.js'

const PORT = process.env.PORT


app.get('/', (response, request)=>{
    response.json({thisis:"not a value"})
})


connectDB()
.then(()=>{
    app.listen(PORT || 8000, () => {
    console.log("server started");
    
})
})
.catch((error)=>{
    console.log("fail to connect", error);
    
})


