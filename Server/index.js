const express=require('express');
const { mongoose}=require('mongoose');
const app=express();
//mongodb://localhost:27017/
mongoose.connect('mongodb://localhost:27017/CRUD').then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
const userSchema=mongoose.Schema({
    name:String,
    Email:String,
    Password:String
})
const newModel=mongoose.model("App",userSchema)

app.get("/User",(req,res)=>{
    newModel.find({}).then(function(App){
        res.json(App)
    }).catch(function(err){
        console.log(err)
        res.status(500).send("Internal Server Error");
    })
})
app.listen(3000,()=>{
    console.log("Server running port 3000");
})