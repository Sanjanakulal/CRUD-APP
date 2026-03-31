import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'


export default function MyProfile() {
  const [formdata,setFormdata] = useState({
    name:'',
    email:'',
    phone:'',
    address:''
  })
  const handlechange =(e)=>{
    console.log({...formdata, [e.target.name]:e.target.value})
     setFormdata({...formdata ,[e.target.name]:e.target.value})

  }

//   const handleregister =()=>{
//   console.log("form details:",formdata)
//   axios.post("http://localhost:7000/user/registeruser",formdata)  //axios.post() is asynchronous. It returns a Promise.
//   .then((res)=>{
//    console.log("registered user:" ,res.data)
//   //  alert("registered successfully")
//    alert(res.data.message)
//   })
//   .catch((error)=>{
//    console.log(error)
//   })

  const token = localStorage.getItem("UserToken")
  console.log("usertoken details",token)
   
  
  const viewprofile = async(req,res)=>{
        try {
            const response = await fetch("http://localhost:7000/user/getprofile",{method:"GET",headers:{"auth-token":token}})

            // axios.get("http://localhost:7000/user/getprofile",{headers:{"auth-token":token}})
            const details = await response.json()
            console.log(details.udata)
            setFormdata(details.udata)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
    viewprofile()
  },[])
  return (
    <div>
      <Paper elevation={20} style={{width:"550px",padding:"20px",margin:"50px auto"}}>
     <Typography variant='h3' style={{fontFamily:"poppins",textAlign:"center"}}>Update Profile</Typography>
     <TextField variant='outlined' type='text' label='Name' name='name' value={formdata.name} fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='email' label='Email' name='email' value={formdata.email} fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='number'label='Phone' name='phone' value={formdata.phone} fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' multiline rows={5} label='Address' name='address' value={formdata.address} fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
    <Button variant='contained' fullWidth >Update</Button>
     </Paper>
      
    </div>
  )
}

