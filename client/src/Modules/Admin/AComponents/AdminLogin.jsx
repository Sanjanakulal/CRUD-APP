import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [adminlogin, setLogin] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        console.log({ ...adminlogin, [e.target.name]: e.target.value })
        setLogin({ ...adminlogin, [e.target.name]: e.target.value })
    }
    const handleLogin = () => {
        console.log("Login details:", adminlogin)
        axios.post('http://localhost:7000/admin/loginbyadmin', adminlogin)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    localStorage.setItem('UserToken', res.data.token)
                    alert("Login successful")
                    navigate('/Admin')
                }
                else {
                    alert("Login failed")
                }
            })
            .catch((error) => {
                console.log(error)
                alert("Login Failed")
            })
    }

    return (

        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f7fa"
        }}>
            <Paper
                elevation={20}
                style={{
                    width: "400px",
                    padding: "30px",
                    borderRadius: "10px"
                }}
            >
                <Typography
                    variant='h4'
                    style={{
                        fontFamily: "Poppins",
                        textAlign: "center",
                        marginBottom: "20px"
                    }}
                >
                    Admin Login
                </Typography>

                <TextField
                    variant='outlined'
                    label='Email'
                    fullWidth
                    name='email'
                    type='email'
                    margin="normal"
                    onChange={handleChange}
                />

                <TextField
                    variant='outlined'
                    label='Password'
                    fullWidth
                    name='password'
                    type={showPassword ? "text" : "password"}
                    margin="normal"
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <Button
                    variant='contained'
                    fullWidth
                    onClick={handleLogin}
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        fontWeight: "bold"
                    }}
                >
                    Login
                </Button>

            </Paper>
        </div>
    )
}
