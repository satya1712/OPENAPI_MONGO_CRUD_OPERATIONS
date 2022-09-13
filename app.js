const express = require('express')
const mongoose=require('mongoose');
const app = express()

mongoose.connect("mongodb+srv://satya:sAtya1712@cluster0.rwedk5w.mongodb.net/?retryWrites=true&w=majority")


app.get('/GetMessage',(req,res)=>{
    res.send("Hello node js")
})
app.use(express.json())
app.use('/Users',require("./routes/first"))

app.listen(4000,()=>{
    console.log("Data base connect")
})