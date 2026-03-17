const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addcategory,getcategory, deletecategory, updatecategory, getcategorybyid} = require('../Controller/category_controller');

const route = express.Router();

route.post('/addcategory',addcategory)
route.get('/getcategory',getcategory) 
route.delete('/deletecategory/:id',deletecategory)
route.put('/updatecategory/:id',updatecategory) 
route.get('/getcategorybyid/:id',getcategorybyid) 


module.exports = route