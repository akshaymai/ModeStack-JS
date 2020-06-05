const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const articleSchema = new mongoose.Schema({
 
    title:{
        type:String,
        trim:true,
        required:true
    },

    body:{
        type:String,
        trim:true,
        required:true
    },
    author:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})



module.exports=mongoose.model("Article",articleSchema,'Article')