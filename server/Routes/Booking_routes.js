const express = require("express")
const route = express.Router()
const {Createbooking} = require('../Controller/Booking_controller')

route.post('/createbooking',Createbooking)

module.exports = route