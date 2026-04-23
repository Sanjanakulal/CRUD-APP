import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TableBody } from '@mui/material'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Trackstatus() {
  const [booking,setBooking] = useState([])
  const navigate = useNavigate()
  const utoken = localStorage.getItem('UserToken')
  console.log("usertoken",utoken)
  if(!utoken){
    alert("please login to view order status")
    navigate("/Login")
  }
  const fetchbookings =()=>{
    axios.get("http://localhost:7000/booking/getuserbookings",{headers:{"Content-Type":"application/json","auth-token":utoken}})
    .then((res)=>{
       console.log(res.data)
      setBooking(res.data.bdata)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
   fetchbookings()
  },[])

  
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL. No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Booking Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.map((b,index)=>(
              <TableRow>
                <TableCell>{index+1}</TableCell>
                <TableCell>{b.fullname}</TableCell>
                <TableCell>{b.address}</TableCell>
                <TableCell>{b.productId?.product_name}</TableCell>
                  <TableCell>{b.bookingstatus}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     
    </div>
  )
}
