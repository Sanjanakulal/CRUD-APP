const mongoose = require("mongoose")
const bookingschema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String},
    phone:{type:Number,required:true},
    address:{type:String},
    
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    productId:{type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    bookingDate:{
        type:Date,
        default:Date.now
    },
    quantity:{type:Number,default:1},
    totalamount:{type:Number,required:false},
    bookingstatus:{type:String,
        enum:["Pending","Approved","Rejected","Completed"],
        default:"Pending"
    }
})

module.exports = mongoose.model("Booking",bookingschema)