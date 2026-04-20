import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer'
import connectDB from './config/database.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(multer().none())
connectDB()

app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server running on Port : http://localhost:${PORT}`);
    
})
