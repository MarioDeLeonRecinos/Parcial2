const mongoose = require('mongoose');
const {Schema}=mongoose;

const userSchema = new Schema({
    userName:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true},
    rol:{type:String,required:true}
});
module.exports=mongoose.model('users',userSchema);