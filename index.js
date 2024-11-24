const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const BlogRoute = require("./Routes/BlogRoute")
const UserRoute = require("./Routes/userRoute")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/Blogs",BlogRoute)
app.use("/api/UserBlog",UserRoute)

app.listen(process.env.PORT)
  

async function DB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.STATES.connected
        console.log(data);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

DB()