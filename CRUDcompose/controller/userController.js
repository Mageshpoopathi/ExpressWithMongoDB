import User from "../model/userModel.js"

export const create=async (req,res)=>{
    try {
        const data=new User(req.body);
        const {email}=data;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }
        const savedUser=await data.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({err:"Internalllll server error"})
    }
}

export const fetch=async (req,res)=>{
    try{
        const users=await User.find();
        if(users.length===0){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({err:"Internal server error"})
    }
}
export const update=async (req,res)=>{
    try {
        const id=req.params.id;
        const allUser=await User.findOne({_id:id})
        if(!allUser){
            return res.status(404).json({message:"User not found.."});
        }
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).json({err:"Internal server error"})
    }
}

export const deleteUser=async (req,res)=>{
    try {
        const id=req.params.id;
        const allUser=await User.findOne({_id:id})
        if(!allUser){
            return res.status(404).json({message:"User not found.."});
        }
        const updateUser=await User.findByIdAndDelete(id)
        res.status(201).json({message:"User deleted success"})
    } catch (error) {
        res.status(500).json({err:"Internal server error"})
    }
}