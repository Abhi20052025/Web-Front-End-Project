import React from "react";

const Hero4 = () => {
  return (
    <section style={styles.wrapper}>
      {/* Top Header Section */}
      <div style={styles.headerContainer}>
        <div style={styles.chip}>
          Security Solutions <span style={styles.bold}>Should Not Be Siloed And Isolated</span>
        </div>
        <h1 style={styles.mainTitle}>
          The cybersecurity landscape requires transformation to accelerate business goals
        </h1>
      </div>

      {/* Cards Container */}
      <div style={styles.cardsGrid}>
        
        {/* Statistics Card (Left) */}
        <div style={styles.statsCard}>
          <div style={styles.statsLayout}>
            <div style={styles.statNumber}>40%</div>
            <div style={styles.statText}>
              of organizations — including two-thirds of midsize enterprises — will rely on consolidated platforms to run cybersecurity validation assessments, through 2026.
            </div>
          </div>
          <div style={styles.footerNote}>(Reports Coming Soon)</div>
        </div>

        {/* Blog Preview Card (Right) */}
        <div style={styles.blogCard}>
          <h2 style={styles.blogTitle}>
            Mitigating the Robinhood Data Breach: How Fortuna Cysec Could Have Prevented the Attack
          </h2>
          <p style={styles.blogSummary}>
            The recent data breach at Robinhood, a major U.S.-based financial institution, 
            exposed the personal information of approximately 7...
          </p>
          <button 
            style={styles.blogButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e1e12e";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#efff31";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            READ BLOG <span style={{ marginLeft: "10px" }}>→</span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#b0b3b1", // Grey background matching image
    backgroundImage: "radial-gradient(circle at top right, rgba(239, 255, 49, 0.1), transparent)",
    padding: "80px 20px",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "60px",
    maxWidth: "900px",
  },
  chip: {
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: "8px 24px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#333",
    marginBottom: "20px",
    border: "1px solid rgba(0,0,0,0.1)",
  },
  bold: { fontWeight: "700" },
  mainTitle: {
    fontSize: "42px",
    fontWeight: "500",
    lineHeight: "1.2",
    color: "#2a2a2a",
    letterSpacing: "-0.5px",
  },
  cardsGrid: {
    display: "flex",
    gap: "30px",
    maxWidth: "1100px",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  statsCard: {
    flex: "1 1 500px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #efff31", // Thin lime border
    borderRadius: "24px",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  statsLayout: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  statNumber: {
    fontSize: "120px",
    fontWeight: "bold",
    color: "#efff31", // Lime color
    lineHeight: "1",
  },
  statText: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.5",
    maxWidth: "300px",
  },
  footerNote: {
    fontSize: "12px",
    color: "#444",
    textDecoration: "underline",
    marginTop: "40px",
  },
  blogCard: {
    flex: "1 1 400px",
    backgroundColor: "#1c1c1c", // Dark background
    borderRadius: "24px",
    padding: "40px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  blogTitle: {
    fontSize: "24px",
    lineHeight: "1.3",
    marginBottom: "20px",
    fontWeight: "600",
  },
  blogSummary: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#bbbbbb",
    marginBottom: "30px",
  },
  blogButton: {
    backgroundColor: "#efff31", // Bright lime button
    color: "#000",
    border: "none",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease", // Smooth hover transition
  },
};

export default Hero4;