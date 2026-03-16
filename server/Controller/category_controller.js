const categorytable = require("../Models/category_model")
//require() is node.js function to import the file/module
 const addcategory = async(req,res)=>{
    try {
       const{category_name,category_description} =req.body; //destructuring
       const categorydetails = new categorytable({
       category_name,
       category_description
       }) 
       await categorydetails.save(); //save() mongoose function that stores the document in MongoDB
       res.status(201).json({message:"category added successfully",cdata:categorydetails})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}
const getcategory = async(req,res)=>{
    try {
        const getallcategory = await categorytable.find()
        console.log(getallcategory)
        res.status(200).json({message:"category fetched",allcategory:getallcategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"server error",error})
        
    }
}

module.exports = {addcategory,getcategory}