import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function ViewProduct() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:7000/product/getproduct')
        .then((res)=>{
            console.log(res.data.allproducts)
            setProducts(res.data.allproducts)
             
        })
        .catch((error)=>{
            console.log(error)
        })
        
    },)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL.No</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Product Quantity</TableCell>
            <TableCell align="right">Product Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
               <TableCell align="right">{row.product_name}</TableCell>
              <TableCell align="right">{row.product_price}</TableCell>
              <TableCell align="right">{row.product_quantity}</TableCell>
              <TableCell align="right">{row.product_description}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        );
    }