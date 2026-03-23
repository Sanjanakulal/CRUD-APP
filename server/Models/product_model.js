const mongoose = require("mongoose")
const productschema = new mongoose.Schema({ 
    product_name:{type:String,required: true},
    product_price:{type:Number,required: true},
    product_quantity:{type:Number,required: true},
    product_description:{type:String,required: true},
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    productimage:{type:String}
})

module.exports = mongoose.model("Product",productschema)