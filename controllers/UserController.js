const User = require('../models/User');
const userController ={};

userController.index = async function(req,res,next){
    let users =await User.find();
    return res.status(200).json(users);
}

userController.findUser =async function(req,res,next) {
    let {id}=req.params;
    let user = await User.findById(id).catch(err =>{
        return next(res);
    });
    return res.status(200).json(user);
}

userController.store = async function(req, res,next){
    let user = new User();
    user.userName = req.body.user;
    user.password = req.body.password;
    user.rol=req.body.rol;
    try{
        await user.save();
        return res.status(200).json({"message":"Usuario agregado con exito"});
    }catch(err){
        return res.status(500).json({err:err,message:"Por favor revise sus datos"});
    }
}
userController.update = async function(req,res,next){
    let {id}=req.params;
    let user = {
        userName:req.body.user,
        rol:req.body.rol
    }
    console.log(user);
    try{
        await User.update({_id:id},user);
        res.status(200).json({"message":"Usuario actualizado"});
    }catch(err){
        return res.status(500).json({err:err,message:"Por favor revise sus datos"});
    }
}
userController.delete = async function(req,res,next){
    let {id}=req.params;
    await User.remove({_id:id});
    res.status(200).json({"message":"Eliminado con exito"});
}

module.exports=userController