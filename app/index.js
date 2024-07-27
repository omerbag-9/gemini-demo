// import modules
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { connectDB } from './db/connection.js'

// config the .env file

dotenv.config({ path: path.resolve('./config/.env') })

// create server

const app = express()
const port = process.env.PORT

// parse data

app.use(express.json())


// connect db

connectDB()

// listen server

app.listen(port , ()=>{
    console.log("app is running on port",port);
})