const mongoose = require("mongoose")
const productschema = new mongoose.Schema({ 
    product_name:{type:String},
    product_price:{type:Number},
    product_quantity:{type:Number},
    product_description:{type:String}
})

module.exports = mongoose.model("Product",productschema)