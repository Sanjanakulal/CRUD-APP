import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({

    email: '',
    password: ''

  })
  const handlechange = (e) => {
    console.log({ ...login, [e.target.name]: e.target.value })
    setLogin({ ...login, [e.target.name]: e.target.value })

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
  //   }
  const handleLogin = () => {
    console.log("logindetails", login)
    axios.post("http://localhost:7000/user/Login", login)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          localStorage.setItem("UserToken", res.data.token)
          alert("Login Successfull!!")

          if (res.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          alert("Login failed")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("Login failed")

      })
  }
  // return (
  //   <div>
  //     <Paper elevation={20} style={{ width: "550px", padding: "20px", margin: "50px auto" }}>
  //       <Typography variant='h3' style={{ fontFamily: "poppins", textAlign: "center" }}>Login Page</Typography>
  //       {/* <TextField variant='outlined' type='text' label='Name' name='name' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/> */}
  //       <TextField variant='outlined' type='email' label='Email' name='email' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       <TextField variant='outlined' type='password' label='Password' name='password' fullWidth style={{ marginBottom: "10px" }} onChange={handlechange} />
  //       {/* <TextField variant='outlined' type='number'label='Phone' name='phone' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/>
  //    <TextField variant='outlined' multiline rows={5} label='Address' name='address' fullWidth style={{marginBottom:"10px"}} onChange={handlechange}/> */}
  //       <Button variant='contained' fullWidth onClick={handleLogin}>Login</Button>
  //     </Paper>

  //   </div>
  // )
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f1f5f9"
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "380px",
          padding: "30px",
          borderRadius: "10px"
        }}
      >
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "600"
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          name="email"
          fullWidth
          onChange={handlechange}
          sx={{ marginBottom: "15px" }}
        />

        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}   // 👁️ toggle
          fullWidth
          onChange={handlechange}
          sx={{ marginBottom: "20px" }}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#1e3a8a",
            fontWeight: "600",
            textTransform: "none",
            '&:hover': {
              backgroundColor: "#3749a5"
            }
          }}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
}
