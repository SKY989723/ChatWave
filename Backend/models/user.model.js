import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String
        
    }
},{timestamps:true})//createdAt & updatedAt

const User=mongoose.model("User",UserSchema)
export default User;