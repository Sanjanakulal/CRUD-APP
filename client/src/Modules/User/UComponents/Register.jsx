import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'


export default function Register() {
  const [formdata,setFormdata] = useState({
    name:'',
    email:'',
    password:'',
    phone:'',
    address:''
  })
  const handlechange =(e)=>{
    console.log({...formdata, [e.target.name]:e.target.value})
     setFormdata({...formdata ,[e.target.name]:e.target.value})

  }

  const handleregister =()=>{
  console.log("form details:",formdata)
  axios.post("http://localhost:7000/user/registeruser",formdata)  //axios.post() is asynchronous. It returns a Promise.
  .then((res)=>{
   console.log("registered user:" ,res.data)
  //  alert("registered successfully")
   alert(res.data.message)
  })
  .catch((error)=>{
   console.log(error)
  })

    //using local storage
    // const existingusers = JSON.parse(localStorage.getItem('userdetails')) || [];
    // console.log(existingusers)
    // const allusers =[...existingusers,formdata]

    // localStorage.setItem('userdetails',JSON.stringify(allusers))
    // alert("registration done!!")
  }
  return (
    <div>
      <Paper elevation={20} style={{width:"550px",padding:"20px",margin:"50px auto"}}>
     <Typography variant='h3' style={{fontFamily:"poppins",textAlign:"center"}}>Register Page</Typography>
     <TextField variant='outlined' type='text' label='Name' name='name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='email' label='Email' name='email' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='password' label='Password' name='password' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='number'label='Phone' name='phone' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' multiline rows={5} label='Address' name='address' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
    <Button variant='contained' fullWidth onClick={handleregister}>Register</Button>
     </Paper>
      
    </div>
  )
}
