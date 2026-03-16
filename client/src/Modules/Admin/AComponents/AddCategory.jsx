import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'


export default function AddCategory() {
  const [categorydata,setCategorydata] = useState({
    category_name:'',
    category_description:''
    
  })
  const handlechange =(e)=>{
    console.log({...categorydata, [e.target.name]:e.target.value})
     setCategorydata({...categorydata, [e.target.name]:e.target.value})

  }

  const handleregister =()=>{
  console.log("form details:",categorydata)
  axios.post("http://localhost:7000/category/addcategory",categorydata)
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
     <Typography variant='h3' style={{fontFamily:"poppins",textAlign:"center"}}>Add Category</Typography>
     <TextField variant='outlined' type='text' label='Name' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' multiline rows={5} label='Description' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
    <Button variant='contained' fullWidth onClick={handleregister}>Add Category</Button>
     </Paper>
      
    </div>
  )
}
