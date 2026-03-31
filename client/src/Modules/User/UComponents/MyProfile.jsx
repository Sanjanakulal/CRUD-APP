import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'


export default function MyProfile() {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const handlechange = (e) => {
    console.log({ ...formdata, [e.target.name]: e.target.value })
    setFormdata({ ...formdata, [e.target.name]: e.target.value })

  }

  const token = localStorage.getItem("UserToken")
  console.log("usertoken details", token)


  const viewprofile = async (req, res) => {
    try {
      const response = await fetch("http://localhost:7000/user/getprofile", { method: "GET", headers: { "auth-token": token } })

      // axios.get("http://localhost:7000/user/getprofile",{headers:{"auth-token":token}})
      const details = await response.json()
      console.log(details.udata)
      setFormdata(details.udata)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    viewprofile()
  }, [])

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:7000/user/updateuser/${formdata._id}`, formdata);
      alert("Profile updated");
    } catch (error) {
      console.log(error);
    }
  };
  // return (
  //   <div>
  //     <Paper elevation={20} style={{ width: "550px", padding: "20px", margin: "50px auto" }}>
  //       <Typography variant='h3' style={{ fontFamily: "poppins", textAlign: "center" }}>Update Profile</Typography>
  //       <TextField variant='outlined' type='text' label='Name' name='name' value={formdata.name} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       <TextField variant='outlined' type='email' label='Email' name='email' value={formdata.email} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       <TextField variant='outlined' type='number' label='Phone' name='phone' value={formdata.phone} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       <TextField variant='outlined' multiline rows={5} label='Address' name='address' value={formdata.address} fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       <Button variant='contained' fullWidth onClick={handleUpdate}>Update</Button>
    
  //     </Paper>

  //   </div>
  // )
  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f5f7fa"
  }}>
    <Paper
      elevation={10}
      style={{
        width: "400px",
        padding: "30px",
        borderRadius: "12px"
      }}
    >
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          fontFamily:'poppins',
          marginBottom: "20px"
        }}
      >
        Update Profile
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formdata.name}
        onChange={handlechange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={formdata.email}
        onChange={handlechange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Phone"
        name="phone"
        value={formdata.phone}
        onChange={handlechange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Address"
        name="address"
        value={formdata.address}
        onChange={handlechange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleUpdate}
        sx={{
          marginTop: 2,
          padding: "10px",
          fontWeight: "bold",
          backgroundColor: "#0f467e",
          "&:hover": {
            backgroundColor: "#115293"
          }
        }}
      >
        Update 
      </Button>
    </Paper>
  </div>
);
}
