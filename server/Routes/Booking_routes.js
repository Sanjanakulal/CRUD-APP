const express = require("express")
const route = express.Router()
const {Createbooking, getbooking} = require('../Controller/Booking_controller')
const auth = require('../Middleware/Auth')

route.post('/createbooking',auth,Createbooking)
route.get('/getbooking',getbooking)

module.exports = route