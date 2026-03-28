import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import fashionImg from "../../../assets/fashion.jpg"

export default function UAbout() {
   const navigate = useNavigate();
  return (
    <Box>

      {/* HERO */}
      <Box sx={{ pt: 4, pb: 1, background: "linear-gradient(180deg,#f8f9ff,#eef1ff)" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* changes */}
            <Grid item xs={12} md={6} sx={{ maxWidth: "520px" }}>
              <Typography
                variant="h4"
                fontWeight="600"
                gutterBottom={false}
              >
                <span style={{ color: "#64748b" }}>About </span>
                <span style={{ color: "#1e3a8a", fontWeight: "700" }}>ShopSphere</span>
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#5f6b7a",
                  lineHeight: 1.7
                }}
              >
                ShopSphere is a modern online marketplace designed to
                provide customers with a smooth and reliable shopping
                experience. Our platform brings together quality
                products, trusted sellers, and an intuitive browsing
                experience.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  px: 4,
                  borderRadius: 2
                }}
                 onClick={() => navigate("/")}
              >
                Explore Products
              </Button>
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <Box
                sx={{
                  minHeight: 160,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg,#ffd3a5,#fd6585)"
                }}
              />
            </Grid> */}

            <Grid item xs={12} md={6} sx={{ mt: { xs: 3, md: 0 } }}>
              <Box
                component="img"
                src={fashionImg}
                alt="Fashion"
                sx={{
                  width: { xs: "100%", md: "115%" },
                  height: { xs: 240, md: 360 },
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  ml: { md: 2 }
                }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* OUR STORY */}
      <Box sx={{ pt: 5, pb: 5, background: "#fff7ed" }}>

        <Container>
          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
          >
            Our Story
          </Typography>

          <Typography
            align="center"
            sx={{
              mt: 2,
              maxWidth: 700,
              mx: "auto",
              color: "#040c16",
              lineHeight: 1.8
            }}
          >
            ShopSphere was created to simplify online shopping and
            connect customers with a wide variety of quality products.
            We aim to provide a reliable digital shopping platform
            where users can easily browse, compare, and purchase items
            with confidence.
          </Typography>

        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Box sx={{ py: 6, background: "#f9fafc" }}>
        <Container>

          <Typography
            variant="h5"
            fontWeight="600"
            align="center"
            sx={{ mb: 4 }}
            
          >
            Why Choose Us
          </Typography>

          <Grid container spacing={4} justifyContent="center">

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg,#ffecd2,#fcb69f)"
                }}
              >
                <BoltIcon sx={{ fontSize: 40 }} />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Fast Shopping
                </Typography>

                <Typography variant="body2">
                  Smooth browsing and quick product discovery.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg,#c2e9fb,#a1c4fd)"
                }}
              >
                <VerifiedIcon sx={{ fontSize: 40 }} />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Trusted Products
                </Typography>

                <Typography variant="body2">
                  Quality and authenticity guaranteed.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  background:
                    "linear-gradient(135deg,#fddb92,#d1fdff)"
                }}
              >
                <LocalShippingIcon sx={{ fontSize: 40 }} />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Fast Delivery
                </Typography>

                <Typography variant="body2">
                  Reliable shipping network for quick delivery.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </Container>
      </Box>

      {/* MISSION */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          background: "linear-gradient(120deg,#f6d365,#fda085)"
        }}
      >
        <Container>

          <Typography variant="h5" fontWeight="600">
            Our Mission
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8
            }}
          >
            Our mission is to provide customers with a dependable and
            convenient online shopping platform that combines quality
            products, fair pricing, and an enjoyable digital experience.
          </Typography>

        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Container>

          <Typography variant="h5" fontWeight="600" color= "#1e3a8a">
            Ready to Start Shopping?
          </Typography>

          <Typography sx={{ mt: 1, color: "#5f6b7a" }}>
            Explore our collection and discover amazing products today.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 5,
              borderRadius: 2
            }}
             onClick={() => navigate("/")}
          >
            Browse Products
          </Button>

        </Container>
      </Box>

    </Box>
  );
}