import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function UpdateCategory() {
  const [categorydata,setCategorydata] = useState({
    category_name:'',
    category_description:''
    
  })

  const{rowid} = useParams();
  const handlechange =(e)=>{
    console.log({...categorydata, [e.target.name]:e.target.value})
     setCategorydata({...categorydata, [e.target.name]:e.target.value})

  }
   useEffect(()=>{
    axios.get(`http://localhost:7000/category/getcategorybyid/${rowid}`)
    .then((res)=>{
     console.log(res.data.cdata)
     setCategorydata(res.data.cdata)
    })
    .catch((error)=>{
    console.log(error)
    })
    
    
   },[])

//   const handleregister =()=>{
//   console.log("form details:",categorydata)
//   axios.post("http://localhost:7000/category/addcategory",categorydata)
//   .then((res)=>{
//    console.log("registered user:" ,res.data)
//   //  alert("registered successfully")
//    alert(res.data.message)
//   })
//   .catch((error)=>{
//    console.log(error)
//   })

//   }
  const handleupdate = async ()=>{
    const catdata = new FormData()
    catdata.append('category_name',categorydata.category_name)
    catdata.append('category_description',categorydata.category_description)

    try {
        await axios.put(`http://localhost:7000/category/updatecategory/${rowid}`,categorydata)
        alert("category updated")
    } catch (error) {
      console.log(error)
        
    }
  }
  return (
    <div>
      <Paper elevation={20} style={{width:"550px",padding:"20px",margin:"50px auto"}}>
     <Typography variant='h3' style={{fontFamily:"poppins",textAlign:"center"}}>Update Category</Typography>
     <TextField variant='outlined' type='text' label='Name' name='category_name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={categorydata.category_name}/>
     <TextField variant='outlined' multiline rows={5} label='Description' name='category_description' fullWidth style={{marginBottom:"10px"}} onChange={handlechange} value={categorydata.category_description}/>
    <Button variant='contained' fullWidth onClick={handleupdate} >Update Category</Button>
     </Paper>
      
    </div>
  )
}
