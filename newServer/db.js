const { mongoose } = require("mongoose")

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://demo:1234@cluster0.dt6z7zq.mongodb.net/dbData?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;