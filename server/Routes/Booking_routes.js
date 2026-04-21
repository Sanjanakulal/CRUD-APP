const express = require("express")
const route = express.Router()
const {Createbooking, getAllbooking, updateStatus} = require('../Controller/Booking_controller')
const auth = require('../Middleware/Auth')

route.post('/createbooking',auth,Createbooking)
route.get('/getAllbooking',getAllbooking)
route.put('/updateStatus',updateStatus)

module.exports = route