import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedCircle from "./AnimatedCircle";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Update layout on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "60px 24px" : "90px 60px",
          minHeight: isMobile ? "auto" : "90vh",
          background: "#262626",
          overflow: "hidden",
          gap: isMobile ? "50px" : "0",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            maxWidth: "620px",
            animation: "fadeUp 1s ease forwards",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "38px" : "64px",
              fontWeight: "400",
              lineHeight: "1.15",
              color: "#eaeaea",
              marginBottom: "24px",
            }}
          >
            Make cybersecurity
            <br />
            a part of your
            <br />
            <span style={{ color: "#ff4d1c" }}>
              enterprise&apos;s DNA
            </span>
          </h1>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "1.6",
              maxWidth: "520px",
              marginBottom: "36px",
            }}
          >
            Fortify your cybersecurity posture with our integrated,
            but modular managed services platform.
          </p>

          {/* BUTTONS CONTAINER - ERROR FIXED HERE */}
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row", 
            gap: isMobile ? "16px" : "26px",
            width: isMobile ? "100%" : "auto"
          }}>
            <Link
              to="/platform"
              style={{
                background: "#ff4d1c",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 26px",
                fontSize: "14px",
                letterSpacing: "1px",
                cursor: "pointer",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.background = "#ff6a3c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.background = "#ff4d1c";
              }}
            >
              HOW WE DO IT <span>→</span>
            </Link>

            <Link
              to="/contact"
              style={{
                background: "transparent",
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              Talk To An Expert <span>→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div style={{ 
          animation: "fadeIn 1.2s ease forwards",
          width: isMobile ? "100%" : "auto",
          display: "flex",
          justifyContent: "center"
        }}>
          <AnimatedCircle />
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section
        style={{
          background: "#262626",
          padding: isMobile ? "40px 24px" : "60px 40px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 22px",
            background: "#000",
            color: "#fff",
            borderRadius: "30px",
            fontSize: "14px",
            marginBottom: isMobile ? "30px" : "50px",
          }}
        >
          Trusted By Clients Across The Globe
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "30px" : "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <p style={textStyle}>Global services company in the tanker industry</p>
          <p style={textStyle}>Fast-moving consumer goods company</p>
          <p style={textStyle}>Leading provider of management and fund services</p>
        </div>
      </section>

      {/* GLOBAL STYLES */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </>
  );
}

const textStyle = {
  color: "#e0e0e0",
  fontSize: "18px",
  lineHeight: "1.6",
};