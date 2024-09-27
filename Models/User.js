// require the mongoose 
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:true,
    }]
})



// exports the model 
module.exports = mongoose.model("User" , UserSchema);