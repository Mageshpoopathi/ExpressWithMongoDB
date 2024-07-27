const express=require('express');
const connectDB=require('./db.js')
const itemModel=require('./Models/item.js')
const app=express();
connectDB();
app.listen(4000,()=>{
    console.log("Server Running")
})