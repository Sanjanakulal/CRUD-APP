import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
} from "@mui/material";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      setMsg("Please enter category name");
      return;
    }

    // dummy save
    setMsg("Category added successfully (dummy)");
    setName("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Add Category
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
          Create a new product category for your store.
        </Typography>

        <TextField
          fullWidth
          label="Category Name"
          placeholder="Example: Saree, Jeans, Kurtis"
          helperText="Enter a unique category name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setMsg("");
          }}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Save Category
        </Button>

        {msg && (
          <Typography
            variant="body2"
            sx={{ mt: 2, color: msg.includes("success") ? "green" : "red" }}
          >
            {msg}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}