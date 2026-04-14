const express = require("express")
const route = express.Router()
const {Createbooking} = require('../Controller/Booking_controller')
const auth = require('../Middleware/Auth')
route.post('/createbooking',auth,Createbooking)

module.exports = route