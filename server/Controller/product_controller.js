const producttable = require("../Models/product_model")
//require() is node.js function to import the file/module
 const addproduct = async(req,res)=>{
    try {
       const{product_name,product_price,product_quantity,product_description} =req.body; //destructuring
       const productdetails = new producttable({
       product_name,
       product_price,
       product_quantity,
       product_description
       }) 
       await productdetails.save(); //save() mongoose function that stores the document in MongoDB
       res.status(201).json({message:"product added successfully",pdata:productdetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
module.exports = addproduct