import React, { useState } from "react";

const Company = () => {
  const [activeTab, setActiveTab] = useState("Management & Visibility");

  const tabContent = {
    "Management & Visibility": {
      without: {
        title: "Disparate and siloed",
        content: "Multiple tools, vendors and support contracts to deal with, resulting in disparate security tools without cross-platform visibility and threat intelligence.",
        icon: "🔳", 
        color: "#f04a23"
      },
      with: {
        title: "Integrated solution for increased visibility",
        content: "One Managed Enterprise Platform for complete cybersecurity + compliance providing Cross Platform Visibility enables security teams to identify attack patterns that span multiple layers of the IT infrastructure.",
        icon: "🌊",
        color: "#00ffa3"
      }
    },
    "Response Time": {
      without: {
        title: "Response Time Lags",
        content: "Manual correlation and limited threat intelligence leading to higher Mean Time To Detect (MTTD) and Mean Time To Respond (MTTR).",
        icon: "⏳",
        color: "#f04a23"
      },
      with: {
        title: "Agile Response Time",
        content: "Improved Threat detection and response leading to lower Mean Time To Detect (MTTD) and Mean Time To Respond (MTTR).",
        icon: "⚡",
        color: "#00ffa3"
      }
    },
    "Alerts & False Positives": {
      without: {
        title: "Alert Fatigue",
        content: "Increase in false positive alerts without alert correlation, validation and prioritization leading to security teams spending more time on non-malicious activities.",
        icon: "⚠️",
        color: "#f04a23"
      },
      with: {
        title: "Reduced False Positives",
        content: "Reduce False Positives with Alert correlation, validation and Prioritization.",
        icon: "✅",
        color: "#00ffa3"
      }
    },
    "Maintenance & Costs": {
      without: {
        title: "Expensive to Maintain",
        content: "Expensive and hard to maintain team of security professionals for 24X7X365 SOC operations adds to the huge security expenditure and increased costs Year over Year (YoY).",
        icon: "💰",
        color: "#f04a23"
      },
      with: {
        title: "Decreased Costs + Easy to Maintain",
        content: "Global Team of cybersecurity product developers, SOC engineers focused on Managed Security Services. Along with this, overall cybersecurity costs see a decrease which can be scalable and flexible.",
        icon: "📉",
        color: "#00ffa3"
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Sidebar - Dark Panel */}
        <div style={styles.sidebarPanel}>
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tabButton,
                backgroundColor: activeTab === tab ? "#00ffa3" : "transparent",
                color: activeTab === tab ? "#000" : "#fff",
                border: activeTab === tab ? "none" : "1px solid #333",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) e.target.style.borderColor = "#00ffa3";
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) e.target.style.borderColor = "#333";
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Comparison Cards */}
        <div style={styles.contentArea}>
          {/* WITHOUT FENSE Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.badge}>WITHOUT FENSE</span>
            </div>
            <div style={{ ...styles.icon, color: tabContent[activeTab].without.color }}>
              {tabContent[activeTab].without.icon}
            </div>
            <h3 style={{ ...styles.cardTitle, color: tabContent[activeTab].without.color }}>
              {tabContent[activeTab].without.title}
            </h3>
            <p style={styles.cardDescription}>
              {tabContent[activeTab].without.content}
            </p>
          </div>

          {/* WITH FENSE Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.badge}>WITH FENSE</span>
            </div>
            <div style={{ ...styles.icon, color: tabContent[activeTab].with.color }}>
              {tabContent[activeTab].with.icon}
            </div>
            <h3 style={{ ...styles.cardTitle, color: tabContent[activeTab].with.color }}>
              {tabContent[activeTab].with.title}
            </h3>
            <p style={styles.cardDescription}>
              {tabContent[activeTab].with.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#e6e8e0", // Light background for the overall page
    padding: "100px 40px",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1400px",
    width: "100%",
    gap: "30px",
    alignItems: "stretch",
  },
  sidebarPanel: {
    backgroundColor: "#1a1a1a", // Black panel from your video
    padding: "30px",
    borderRadius: "24px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  },
  tabButton: {
    padding: "25px 20px",
    textAlign: "center",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
  },
  contentArea: {
    display: "flex",
    flex: 1,
    gap: "20px",
  },
  card: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Match sidebar black
    borderRadius: "24px",
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    minHeight: "550px", // Increased height as requested
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  cardHeader: {
    borderBottom: "1px solid #333",
    paddingBottom: "25px",
    marginBottom: "40px",
  },
  badge: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    letterSpacing: "1px",
    opacity: 0.5,
  },
  icon: {
    fontSize: "48px",
    marginBottom: "30px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "25px",
    lineHeight: "1.2",
  },
  cardDescription: {
    color: "#a0a0a0",
    fontSize: "18px",
    lineHeight: "1.6",
  },
};

export default Company;