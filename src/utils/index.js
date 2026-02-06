import express from 'express'
import{ app }from './app.js'
import connectDB from './db.js'

const PORT = process.env.PORT

connectDB()
.then()
.catch()


app.listen(PORT, () => {
    console.log("server started");
    
})