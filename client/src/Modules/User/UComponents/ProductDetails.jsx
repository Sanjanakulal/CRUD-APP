import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:7000/product/getproductbyid/${id}`)
      .then((res) => {
        console.log(res.data.byid);
        setProduct(res.data.byid);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [id]);

  // if (!product) return <h2>Loading...</h2>;
  if (!product) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc" }}></div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        padding: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          gap: "40px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          maxWidth: "1000px",
          width: "100%",
          minHeight: "500px"
        }}
      >

        {/* IMAGE SECTION */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f1f5f9",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <img
            src={`http://localhost:7000/image/${product.productimage}`}
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "450px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* DETAILS SECTION */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <h1 style={{ marginBottom: "10px", color: "#1e293b" }}>
            {product.product_name}
          </h1>

          <h2 style={{ color: "#1e3a8a", marginBottom: "10px", fontWeight: "700" }}>
            ₹{product.product_price}
          </h2>

          <h3
            style={{
              color: product.product_quantity > 0 ? "#0f766e" : "#dc2626",
              marginBottom: "20px",
              fontWeight: "600"
            }}
          >
            Quantity: {product.product_quantity}
          </h3>

          <p style={{ color: "#02060c", lineHeight: "1.6" }}>
            {product.product_description}
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <button
              style={{
                padding: "12px 20px",
                background: "#1e3a8a",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Add to Cart
            </button>

            <button
              style={{
                padding: "12px 20px",
                background: "#f59e0b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600"
              }}
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}