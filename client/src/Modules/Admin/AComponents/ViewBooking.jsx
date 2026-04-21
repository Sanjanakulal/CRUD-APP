import { TableBody } from '@mui/material'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewBooking() {
  const [booking,setBooking] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:7000/booking/getAllbooking")
    .then((res)=>{
       console.log(res.data.bdata)
      setBooking(res.data.bdata)
    })
    .catch((error)=>{
      console.log(error)
    })
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
