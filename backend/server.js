import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import authRoute from './routes/authRoute.js';

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRouter)
app.use('/api/auth', authRoute);


app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log("Server running at: "+port))