import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function BookingForm() {
  const { productId } = useParams() //fetch id from url
  const [booking, setBooking] = useState({
    // name:fname,
    fname: "",
    email: "",
    phone: "",
    address: "",
    quantity: "",
    totalamount: ""
    
  })
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)
  const handlechange = (e) => {
    // setBooking({ ...booking, [e.target.name]: e.target.value })
    // console.log({ ...booking, [e.target.name]: e.target.value })
    if (e.target.name === "quantity") {
      const qty = e.target.value
      setBooking({
        ...booking,
        quantity: qty,
        totalamount: qty*price
      })
    }
    else {
      setBooking({ ...booking, [e.target.name]: e.target.value })
      console.log({ ...booking, [e.target.name]: e.target.value })
    }
  }
  useEffect(() => {
    axios.get(`http://localhost:7000/product/getproductbyid/${productId}`)
      .then((res) => {
        console.log("product details", res.data.byid.product_price)
        setPrice(res.data.byid.product_price)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const utoken = localStorage.getItem('UserToken')
  const handlebooking = async () => {
    try {

      await axios.post("http://localhost:7000/booking/Createbooking", {
        ...booking,
        productId
      },

        { headers: { "auth-token": utoken } })

      alert("booking done successfully")
      navigate("/Trackstatus")
    } catch (error) {
      console.log(error)
      alert("booking failed")
    }
  }
  return (
    <div>
      <Box sx={{ maxWidth: 700, padding: "20px", margin: "50px auto" }}>
        <Typography variant='h4' sx={{ fontFamily: "poppins", textAlign: "center" }}>Book Now</Typography>
        <TextField variant="outlined" label="Full name" name='fname' fullWidth onChange={handlechange} />
        <TextField variant="outlined" label="email" name='email' fullWidth onChange={handlechange} />
        <TextField type='number' variant="outlined" label="phone" name='phone' fullWidth onChange={handlechange} />
        <TextField variant="outlined" label="address" name='address' multiline rows={4} fullWidth onChange={handlechange} />
        <TextField type="number" variant="outlined" label="quantity" name='quantity' fullWidth onChange={handlechange} />
        <TextField type="number" variant="outlined" label="price" name='product_price' inputProps={{ readOnly: true }} value={price} fullWidth onChange={handlechange} />
        <TextField type="number" variant="outlined" label="total amount" name='totalamount' inputProps={{ readOnly: true }} value={booking.totalamount} fullWidth onChange={handlechange} />
        <Button variant='contained' color='success' fullWidth onClick={handlebooking}>Order</Button>
      </Box>
    </div>
  )
}
