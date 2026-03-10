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
const getproduct = async(req,res)=>{
    try {
        const getallproduct = await producttable.find()
        console.log(getallproduct)
        res.status(200).json({message:"product fetched",allproducts:getallproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
const getproductbyid=async(req,res)=>{
    try {
        const pid =req.params.id
        const productbyid = await producttable.findById(pid)
        console.log(productbyid)
        res.status(200).json({message:"product found",byid:productbyid})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
    }
}
const deleteproduct =async(req,res)=>{
    try {
        const d_id=req.params.id
        const deleteproduct = await producttable.findByIdAndDelete(d_id)
        console.log(deleteproduct)
        res.status(200).json({message:"product deleted",d_product:deleteproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
const updateproduct = async(req,res)=>{
    try {
        const {id} = req.params
        const body = req.body
        const updatedproduct = await producttable.findByIdAndUpdate(id,body,{new:true})
        res.status(200).json({message:"product updated",updatedata:updatedproduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
module.exports = {addproduct,getproduct,getproductbyid,deleteproduct,updateproduct}