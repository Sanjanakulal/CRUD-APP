import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
    const faqs = [
        {
            q: "What is this website?",
            a: "This is an e-commerce platform where you can buy products online."
        },
        {
            q: "How can I buy a product?",
            a: "Select a product, view details, and click Add to Cart or Buy."
        },
        {
            q: "Is payment secure?",
            a: "Yes, all payments are secured and encrypted."
        },
        {
            q: "What payment methods are available?",
            a: "We support multiple payment options including credit/debit cards, UPI, and net banking."
        },
        {
            q: "Can I return or replace a product?",
            a: "Yes, products can be returned or replaced within a specified period based on our return policy."
        }
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#e0e7ff,#f8fafc)",
                py: 6
            }}
        >
            <Container maxWidth="md">

                {/* Title */}
                <Typography
                    variant="h4"
                    fontWeight="700"
                    align="center"
                    sx={{ mb: 1, color: "#1e3a8a" }}
                >
                    Frequently Asked Questions
                </Typography>

                <Typography
                    align="center"
                    sx={{ mb: 4, color: "#64748b" }}
                >
                    Find answers to common questions below
                </Typography>

                {/* FAQ List */}
                {faqs.map((item, index) => (
                    <Accordion
                        key={index}
                        sx={{
                            mb: 2,
                            borderRadius: "12px !important",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                            "&:before": { display: "none" }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                background: "#f1f5f9",
                                borderRadius: 2
                            }}
                        >
                            <Typography fontWeight="600">
                                {item.q}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography sx={{ color: "#475569" }}>
                                {item.a}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}

            </Container>
        </Box>
    );
}