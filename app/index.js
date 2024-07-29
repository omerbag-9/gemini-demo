// import modules
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { connectDB } from './db/connection.js'

// config the .env file

dotenv.config()

// create server

const app = express()
const port = 3000 || process.env.PORT

// parse data

app.use(express.json())


// connect db

const start = async() =>{
    try {
        await connectDB()
        console.log("Successfully connected to db")
        app.listen(port , ()=>{
            console.log("app is running on port",port);
        })
    } catch (error) {
        console.log("Couldn't connect to db")
    }
}


start()

