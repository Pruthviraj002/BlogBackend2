const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref:"users"
    }
})

module.exports = mongoose.model("Blogs",BlogSchema)