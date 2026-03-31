const mongoose = require("mongoose")
const adminschema = new mongoose.Schema({ //A Schema defines the structure of data stored in MongoDB.
    email: { type: String,required:true,unique:true},
    password: { type: String ,required:true }
    
})


module.exports = mongoose.model("Admin", adminschema)


//User -> table name(collection name)