const mongoose = require("mongoose")
const userschema = new mongoose.Schema({ //A Schema defines the structure of data stored in MongoDB.
    name: { type: String },
    email: { type: String ,unique:true},
    password: { type: String },
    phone: { type: Number },
    address: { type: String },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})


module.exports = mongoose.model("User", userschema)


//User -> table name(collection name)