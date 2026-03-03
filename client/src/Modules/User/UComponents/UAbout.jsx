import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Slide
} from "@mui/material";

export default function UAbout() {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>

      {/* HERO SECTION */}
      <Fade in={checked} timeout={1000}>
        <Box
          sx={{
            height: "60vh",
            background: "linear-gradient(135deg, #eef2f7, #dbe5f1)",
            color: "#1a2a44",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Welcome to ShopEase
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            A smarter way to shop quality products.
          </Typography>
        </Box>
      </Fade>

      {/* OUR STORY */}
      <Slide direction="up" in={checked} timeout={1000}>
        <Box sx={{ py: 10, bgcolor: "#ffffff" }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1a2a44" }}>
              Our Story
            </Typography>
            <Typography align="center" sx={{ color: "#5f6b7a" }}>
              ShopEase was built to simplify online shopping by offering
              reliable products, smooth browsing, and a trusted customer
              experience for everyday needs.
            </Typography>
          </Container>
        </Box>
      </Slide>

      {/* MISSION SECTION */}
      <Slide direction="left" in={checked} timeout={1000}>
        <Box sx={{ py: 10, bgcolor: "#f4f6f8" }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1a2a44" }}>
              Our Mission
            </Typography>
            <Typography align="center" sx={{ color: "#5f6b7a" }}>
              We aim to deliver a dependable and efficient shopping
              platform that combines quality products, fair pricing,
              and customer satisfaction.
            </Typography>
          </Container>
        </Box>
      </Slide>

      {/* CTA SECTION */}
      <Fade in={checked} timeout={1500}>
        <Box
          sx={{
            py: 12,
            bgcolor: "#1a2a44",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">
            Experience Better Shopping Today
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#ffffff",
              color: "#1a2a44",
              fontWeight: 600,
              px: 4,
              "&:hover": {
                bgcolor: "#e3e8ef",
              },
            }}
          >
            Explore Products
          </Button>
        </Box>
      </Fade>

    </Box>
  );
}