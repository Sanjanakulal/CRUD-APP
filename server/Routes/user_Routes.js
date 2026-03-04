const express = require('express')
const registeruser = require('../Controller/User_controller')

const route = express.Router();

route.post('/registeruser',registeruser)

module.exports = route
