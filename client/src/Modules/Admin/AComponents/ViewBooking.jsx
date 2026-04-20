import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  Select,
  MenuItem
} from '@mui/material';

export default function ViewBooking() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/booking/getbooking")
      .then((res) => {
        console.log(res.data.allbookings);
        setBookings(res.data.allbookings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStatusChange = (id, value) => {
    axios.put(`http://localhost:7000/booking/updatebooking/${id}`, {
      status: value
    })
      .then(() => {
        alert("Status Updated");

        setBookings((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: value } : item
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell align="center">SL.No</TableCell>
            <TableCell align="center">Full Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total amount </TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {bookings.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.fullname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.totalamount}</TableCell>

              <TableCell align="center">
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select
                    value={row.status || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(row._id, e.target.value)
                    }
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}