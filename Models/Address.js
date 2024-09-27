const mongoose = require("mongoose");

// create the schema 
const AddressSchema = mongoose.Schema({
    street : {
        type: String,
        required : true,
    },
    city : {
        type:String,
        required:true,
    },
    state : {
        type : String,
        required:true,
    },
    country : {
        type : String,
        required : true,
    }
})

// export the schema 

module.exports = mongoose.model("Address", AddressSchema)