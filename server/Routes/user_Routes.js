const express = require('express')
const {registeruser,getuser,getuserbyid,deleteuser,updateuser,Login} = require('../Controller/User_controller')

const route = express.Router();

route.post('/registeruser',registeruser)  //http://localhost:7000/user/registeruser
route.post('/Login',Login)
route.get('/getuser',getuser)             //http://localhost:7000/user/getuser
route.get('/getuserbyid/:id',getuserbyid)  //http://localhost:7000/user/getuserbyid/69a7ff3dd9646a6fbbd1da29
route.delete('/deleteuser/:id',deleteuser) //http://localhost:7000/user/deleteuser/69a7ff3dd9646a6fbbd1da29 
route.put('/updateuser/:id',updateuser)  // first updtae then send using this http://localhost:7000/user/updateuser/69ae9725427085962476ec8d


module.exports = route
