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
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export default function ViewProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:7000/product/getproduct')
      .then((res) => {
        console.log(res.data.allproducts)
        setProducts(res.data.allproducts)

      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

     const HandleDelete =(uid)=>{
          axios.delete(`http://localhost:7000/product/deleteproduct/${uid}`)
          .then((res)=>{
           console.log(res)
           alert("product deleted")
          })
          .catch((error)=>{
           console.log(error)
          })  
        }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL.No</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Product Price</TableCell>
            <TableCell align="center">Product Quantity</TableCell>
            <TableCell align="center">Product Description</TableCell>
            <TableCell align="center">Product Image</TableCell>
            <TableCell align="center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.product_name}</TableCell>
              <TableCell align="center">{row.product_price}</TableCell>
              <TableCell align="center">{row.product_quantity}</TableCell>
              <TableCell align="center">{row.product_description}</TableCell>
              <TableCell align="center">
                <img src={`http://localhost:7000/image/${row.productimage}`} alt="" style={{ width: "200px", height: "200px" }} />
              </TableCell>
              <TableCell align="center">
                <Button variant='contained' size="small" sx={{ mr: 3 }} component={Link} to={`/Admin/UpdateProduct/${row._id}`}>Update</Button>
                <Button variant='contained' color="error" onClick={() => HandleDelete(row._id)}>Delete</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}