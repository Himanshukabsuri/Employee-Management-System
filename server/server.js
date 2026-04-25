import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer'
import connectDB from './config/database.js'
import authRouter from './routes/authRoutes.js'
import employeeRouter from './routes/employeeRoutes.js'
import profileROuter from './routes/profileRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(multer().none())
connectDB()

app.use('/api/auth',authRouter)
app.use("/api/employees",employeeRouter)
app.use("/api/profile",profileROuter)



app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server running on Port : http://localhost:${PORT}`);
    
})
