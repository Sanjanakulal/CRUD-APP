// const mongoose = require('mongoose')
 
// const CONNECTION_URL =
// 'mongodb+srv://mernuser:Mern12345@crud-cluster.o2xkwrt.mongodb.net/mernbe?retryWrites=true&w=majority';
//     try {
//         await mongoose.connect(CONNECTION_URL)
//         console.log("Database connected successfully")
//     } catch (error) {
//         console.log(error)
//     }

// module.exports=dbconnection;
const mongoose = require('mongoose')

const CONNECTION_URL = 'mongodb+srv://mernuser:Mern12345@crud-cluster.o2xkwrt.mongodb.net/mernbe?retryWrites=true&w=majority';
const dbconnection = async () => {
try {
  await mongoose.connect(CONNECTION_URL)
  console.log("Database connected successfully")
} catch (error) {
  console.log(error)
}
}

module.exports = dbconnection;