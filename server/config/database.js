import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected',()=> console.log("Database connected"))
        await mongoose.connect(process.env.MONGODB_URL,{dbName:"local"})
        
    } catch (error) {
        console.error("Database cpnnection failed",error.message)

    }
}
export default connectDB