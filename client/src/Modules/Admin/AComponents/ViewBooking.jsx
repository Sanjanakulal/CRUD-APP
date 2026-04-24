// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TableBody } from '@mui/material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewBooking() {
  const [booking,setBooking] = useState([])
  const [selectedbooking,setSelectedbooking] = useState([])
  const [status,setStatus] = useState()
  const [open,setOpen] = useState(false)

  const fetchbookings =()=>{
    axios.get("http://localhost:7000/booking/getAllbooking")
    .then((res)=>{
       console.log(res.data.bdata)
      setBooking(res.data.bdata)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
   fetchbookings()
  },[])

  const handlechangestatus = (booking,status)=>{
    setSelectedbooking(booking)
    setStatus(status)
    setOpen(true)
  }
  const handleconfirm = async()=>{
    try {
      await axios.put(`http://localhost:7000/booking/updateStatus/${selectedbooking._id}`,
        {newstatus:status})

        setStatus(status)
        setOpen(false)
        fetchbookings()
    } catch (error) {
      console.log(error)
    }
  }
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
                <TableCell>
                  <Select value={b.bookingstatus} onChange={(e)=>handlechangestatus(b,e.target.value)}>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={()=>setOpen(false)}>
       <DialogTitle>Confirm Status update</DialogTitle>
       <DialogContent>Are you sure want to change the status to {status} </DialogContent>
       <DialogActions>
        <Button variant='contained' color='error' onClick={()=>setOpen(false)}>Cancel</Button>
        <Button variant='contained' color='success' onClick={handleconfirm}>Confirm</Button>
       </DialogActions>

      </Dialog>
    </div>
  )
}
