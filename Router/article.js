const express=require('express')
const router=express.Router()
const Article=require('../models/article')
 const auth =require('../Autherization/authuser')


router.post('/articles',auth,(req,res)=>{
    const {title,body} = req.body 
    if(!body || !title){
       return res.status(422).json({error:"please add all the fields"})
    }

let articles=new Article({...req.body,author:req.user._id})
articles.save().then((yy)=>{
    res.status(201).send(yy)
}).catch((err)=>{
    res.status(500).send(err)
})
})






router.get('/articles',(req,res)=>{
  
 const {page=1,limit=10}=req.query
 
  Article
  .find().
  limit(limit*1)
  .skip((page - 1) * limit)
  .sort('_id')
  .populate('author',"_id name")
  .exec((err,airtical)=>{
        if(err)
        {
           res.status(500).send(err)
        }
        res.status(200).send(airtical)
  })
})




module.exports=router