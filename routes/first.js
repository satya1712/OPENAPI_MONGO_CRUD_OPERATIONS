const express = require('express');

const routers=express.Router()

const first=require("../model")

routers.post("/CreateUser",async(req,res)=>{
    try{
        const data=await first.create({
            ...req.body
        })
        console.log(data)
        res.status(200).json({message:"Create User Succesfully.."})
        
    }
    catch(err)
    {
        res.status(400).json({message:"Create User Failure."})
    }
    
})

routers.get("/GetUserdata",async (req,res)=>{
    try{
        const data=await first.find()
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(400).json({message:"Get Users Failure"})
    }
})

routers.delete("/DeleteUser/:_id",async(req,res)=>{
    try{
        const data=await first.deleteOne({_id:req.params._id})
        res.status(200).json({message:"Delete User SucessFully..."})
    }
    catch(err){
        res.status(400).json({message:"Delete User Failure"})
    }
})

routers.put("/UpdateUser/:_id",async(req,res)=>{
    try{
        const update=await first.updateOne({_id:req.params._id},{$set:req.body})
        res.status(200).json({message:"User Update Sucessfully"})
    }
    catch(err){
        res.status(400).json({message:"User Update Failure"})
    }
})



module.exports=routers