const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addproduct,getproduct,getproductbyid,deleteproduct,updateproduct} = require('../Controller/product_controller');



const route = express.Router();

route.post('/addproduct',addproduct)
route.get('/getproduct',getproduct)  
route.get('/getproductbyid/:id',getproductbyid)
route.delete('/deleteproduct/:id',deleteproduct)
route.put('/updateproduct/:id',updateproduct)


module.exports = route