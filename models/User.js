const mongoose=require('mongoose')
const {Schema,model}=mongoose

const UserSchema=new Schema({
    username:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:'patient'
    }
})

const User=model('User',UserSchema)

module.exports=User