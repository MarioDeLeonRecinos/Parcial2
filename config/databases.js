const mongoose = require('mongoose');
const {mongodb} = require('../config/keys');
mongoose.connect(mongodb.URI,{
    useCreateIndex:true,
    useNewUrlParser:true
}).then(db =>console.log("Coneccion Succes"))
.catch(err =>console.error(err));