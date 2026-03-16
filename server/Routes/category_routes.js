const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addcategory,getcategory} = require('../Controller/category_controller');

const route = express.Router();

route.post('/addcategory',addcategory)
route.get('/getcategory',getcategory)  


module.exports = route