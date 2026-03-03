const express = require("express");
const dbconnection = require("./db");
// Express is the web framework, which handles request and response

const app = express();
// app is the instance of express used to define routes and middleware and handle requests and responses

const PORTNUMBER = 7000;
//portnumber on which server listens to

//app.listen is the method that starts the server and listens to the incomming requests on that specified port number
//the callback function is executed when the server is successfully started
app.listen(PORTNUMBER, () => {
    // console.log("Server is running on port number: " + PORTNUMBER);
    console.log(`Server is running on portnumber: ${PORTNUMBER}`)
});
dbconnection()


//app.get is a method that defines a route for handling request(POST,GET,DELETE,PUT)
// /apitest is endpoint
//req is request object that contains information about incomming request
//res is respnse object thatused to send reponse back to the client
app.get('/apitest',(req,res)=>{
    res.send("Hello Server") //respnse text from server

})