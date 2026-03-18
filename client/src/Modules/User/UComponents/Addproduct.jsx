import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function Addproudct() {
  const [productdata, setProductdata] = useState({
    product_name: '',
    product_price: '',
    product_quantity: '',
    product_description: '',
    categoryId:''

  })

  const [category, setCategory] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:7000/category/getcategory')
    .then((res)=>{
      console.log(res.data.allcategory)
      setCategory(res.data.allcategory)
    })
    .catch((error)=>{
      console.log(error)

    })
  },[])
  const handlechange = (e) => {
    console.log({ ...productdata, [e.target.name]: e.target.value })
    setProductdata({ ...productdata, [e.target.name]: e.target.value })

  }

  const handleregister = () => {
    console.log("form details:", productdata)
    axios.post("http://localhost:7000/product/addproduct", productdata)
      .then((res) => {
        console.log("registered user:", res.data)
        //  alert("registered successfully")
        alert(res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Paper elevation={20} style={{ width: "550px", padding: "20px", margin: "50px auto" }}>
        <Typography variant='h3' style={{ fontFamily: "poppins", textAlign:"center" }}>Add Product</Typography>
        <TextField variant='outlined' type='text' label='Name' name='product_name' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
        <TextField variant='outlined' type='number' label='Price' name='product_price' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
        <TextField variant='outlined' type='number' label='Quantity' name='product_quantity' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
        <TextField variant='outlined' multiline rows={5} label='Description' name='product_description' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
        <FormControl fullWidth>
          
          <Select
            name="categoryId"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={productdata.categoryId}
            label="Age"
            onChange={handlechange}
          >
            <MenuItem>Select category</MenuItem>
            {category.map((cat)=>{
              return(
               <MenuItem value={cat._id}>{cat.category_name}</MenuItem>
            )})}
            
          </Select>
        </FormControl>
        <Button variant='contained' fullWidth onClick={handleregister} >Add Product</Button>
      </Paper>

    </div>
  )
}
