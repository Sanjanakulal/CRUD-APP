import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'


export default function Addproudct() {
  const [productdata,setProductdata] = useState({
    product_name:'',
    product_price:'',
    product_quantity:'',
    product_description:''
    
  })
  const handlechange =(e)=>{
    console.log({...productdata, [e.target.name]:e.target.value})
     setProductdata({...productdata ,[e.target.name]:e.target.value})

  }

  const handleregister =()=>{
  console.log("form details:",productdata)
  axios.post("http://localhost:7000/product/addproduct",productdata)
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
     <Typography variant='h3' style={{fontFamily:"poppins"}}>Add Product</Typography>
     <TextField variant='outlined' type='text' label='Name' name='product_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='number' label='Price' name='product_price' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' type='number' label='Quantity' name='product_quantity' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
     <TextField variant='outlined' multiline rows={5} label='Description' name='product_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
    <Button variant='contained' fullWidth onClick={handleregister}>Add Product</Button>
     </Paper>
      
    </div>
  )
}
