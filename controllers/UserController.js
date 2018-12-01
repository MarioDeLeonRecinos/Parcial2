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
    
}