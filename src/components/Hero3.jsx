import React, { useState } from "react";

// IMPORT LOGOS
import logo1 from "../assets/images/3 page logo.svg";
import logo2 from "../assets/images/logo3.svg";
import logo3 from "../assets/images/page3 logo.svg";



export default function Hero() {
  const [hoveredId, setHoveredId] = useState(null);

  const cards = [
    {
      id: 1,
      logo: logo1,
      title: "Platform",
      chipText: "FORTUNA CYSEC PLATFORM",
      description: "AI enabled platform improves detection and response time with alert correlation, validation and prioritization",
      expandedContent: "The platform that detects, correlates, contextualizes, and prioritizes data and alerts collected across these various tools using artificial intelligence (AI), machine learning (ML), and behavioral analysis.",
      buttonText: "VISIT PLATFORM",
      buttonColor: "#00ffa3", // Green
    },
    {
      id: 2,
      logo: logo2,
      title: "Services",
      chipText: "MANAGED SERVICES",
      description: "Ensure 24/7 protection with a cost effective solution and clear Return on Investment (ROI)",
      expandedContent: "Increased security posture with cost effective solution and clear return on Investment (ROI). With one managed platform, Fortuna Cysec delivers expertly managed security.",
      buttonText: "VISIT SERVICES",
      buttonColor: "#fdfbd2", // Cream/Yellow
    },
    {
      id: 3,
      logo: logo3,
      title: "Find The Best Fit",
      chipText: "FIND YOUR BEST FIT",
      description: "Our experts can tailor a best-fit solution based on your organization's requirements",
      expandedContent: "Organizations with requirements that are distinct, Fortuna Cysec has the ability to build a custom modules based on your organization's requirement.",
      buttonText: "GET IN TOUCH",
      buttonColor: "#f04a23", // Orange
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.chip}>
        The Power Of <span style={styles.orange}>Predict, Prevent, Protect</span> Managed In One Place
      </div>

      <h1 style={styles.title}>
        Comprehensive Cybersecurity, Tailored to Your Needs,
        <br />
        <span style={styles.orange}> Managed Around the Clock</span>
      </h1>

      <div style={styles.cardContainer}>
        {cards.map((card) => {
          const isHovered = hoveredId === card.id;

          return (
            <div
              key={card.id}
              style={{
                ...styles.card,
                width: isHovered ? "600px" : "340px", // Expands width on hover
                background: isHovered ? "#d9dfd0" : "#222221", // Changes background color
              }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Default View: Title and Icon */}
              {!isHovered && (
                <>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <div style={styles.iconWrapper}>
                    <img src={card.logo} alt={card.title} style={styles.iconImage} />
                  </div>
                  <p style={styles.content}>{card.description}</p>
                </>
              )}

              {/* Hover View: Expanded Content */}
              {isHovered && (
                <div style={styles.expandedWrapper}>
                    <div style={styles.expandedLeft}>
                         <img src={card.logo} alt="logo" style={styles.smallLogo} />
                         <div style={styles.innerChip}>{card.chipText}</div>
                         <p style={styles.mainDescription}>{card.expandedContent}</p>
                         <button style={{...styles.btn, border: `1px solid ${card.buttonColor}`}}>
                            {card.buttonText} <span style={{marginLeft: '10px'}}>→</span>
                         </button>
                    </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    background: "#eef1e7",
    padding: "80px 20px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    minHeight: "100vh",
  },
  chip: {
  display: "inline-block",
  background: "#ffffff",
  color: "#000",
  padding: "10px 22px",
  borderRadius: "30px",
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "20px",
},

  orange: { color: "#f04a23", fontWeight: "600" },
  title: {
    fontSize: "48px",
    color:"black",
    fontWeight: "600",
    lineHeight: "1.2",
    marginBottom: "60px",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease",
  },
  card: {
    height: "480px",
    borderRadius: "20px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
    position: "relative",
  },
  cardTitle: {
    color: "#fdfbd2",
    fontSize: "24px",
    textAlign: "left",
    margin: "0",
  },
  iconWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: { width: "140px", height: "auto" },
  content: {
    color: "#ffffff",
    fontSize: "15px",
    textAlign: "left",
    lineHeight: "1.5",
    opacity: 0.8,
  },
  /* Expanded Styles */
  expandedWrapper: {
    textAlign: "left",
    display: "flex",
    animation: "fadeIn 0.5s ease",
  },
  smallLogo: { width: "80px", marginBottom: "20px" },
  innerChip: {
    border: "1px solid #000",
    display: "inline-block",
    color:"#000",
    padding: "4px 12px",
    borderRadius: "4px",
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  mainDescription: {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#000",
    fontWeight: "500",
    marginBottom: "30px",
  },
  btn: {
    background: "transparent",
    padding: "12px 24px",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
  }
};