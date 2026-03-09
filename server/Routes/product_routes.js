const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const addproduct = require('../Controller/product_controller');


const route = express.Router();

route.post('/addproduct',addproduct)

module.exports = route