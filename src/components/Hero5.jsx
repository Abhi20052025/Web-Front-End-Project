import React, { useState, useEffect } from "react";

const Hero5 = () => {
  const [activeTab, setActiveTab] = useState("Management & Visibility");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div style={{...styles.container, flexDirection: isMobile ? "column" : "row"}}>
        
        {/* Sidebar / Topbar */}
        <div style={{
          ...styles.sidebarContainer, 
          width: isMobile ? "100%" : "320px",
          padding: isMobile ? "15px" : "30px 20px"
        }}>
          <div style={{
            ...styles.sidebar, 
            flexDirection: isMobile ? "row" : "column",
            overflowX: isMobile ? "auto" : "visible",
            paddingBottom: isMobile ? "10px" : "0"
          }}>
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === tab ? "#66FFB2" : "transparent",
                  color: activeTab === tab ? "#1c1c1c" : "#ffffff",
                  border: activeTab === tab ? "none" : "1px solid #444",
                  padding: isMobile ? "12px 20px" : "30px 20px",
                  fontSize: isMobile ? "14px" : "16px",
                  whiteSpace: isMobile ? "nowrap" : "normal",
                  flex: isMobile ? "0 0 auto" : "unset"
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards Area */}
        <div style={{
          ...styles.comparisonArea, 
          flexDirection: isMobile ? "column" : "row",
          width: "100%"
        }}>
          {/* WITHOUT CARD */}
          <div style={{...styles.card, minHeight: isMobile ? "auto" : "500px"}}>
            <div style={styles.badgeLine}>
              <span style={styles.badge}>WITHOUT FENSE</span>
            </div>
            <div style={{...styles.icon, color: tabContent[activeTab].without.color}}>
                {tabContent[activeTab].without.icon}
            </div>
            <h3 style={{...styles.cardTitle, color: tabContent[activeTab].without.color, fontSize: isMobile ? "22px" : "28px"}}>
              {tabContent[activeTab].without.title}
            </h3>
            <p style={styles.cardText}>{tabContent[activeTab].without.content}</p>
          </div>

          {/* WITH CARD */}
          <div style={{...styles.card, minHeight: isMobile ? "auto" : "500px"}}>
            <div style={styles.badgeLine}>
              <span style={styles.badge}>WITH FENSE</span>
            </div>
            <div style={{...styles.icon, color: tabContent[activeTab].with.color}}>
                {tabContent[activeTab].with.icon}
            </div>
            <h3 style={{...styles.cardTitle, color: tabContent[activeTab].with.color, fontSize: isMobile ? "22px" : "28px"}}>
              {tabContent[activeTab].with.title}
            </h3>
            <p style={styles.cardText}>{tabContent[activeTab].with.content}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#dcdfd4",
    padding: "clamp(20px, 5vw, 80px)", // Responsive padding
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    maxWidth: "1300px",
    width: "100%",
    gap: "20px",
  },
  sidebarContainer: {
    backgroundColor: "#1c1c1c",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  sidebar: {
    display: "flex",
    gap: "10px",
    scrollbarWidth: "none", // Hide scrollbar for mobile swipe
  },
  tabButton: {
    textAlign: "center",
    borderRadius: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
  },
  comparisonArea: {
    display: "flex",
    gap: "20px",
  },
  card: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    borderRadius: "20px",
    padding: "clamp(25px, 5vw, 50px)",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    boxSizing: "border-box",
  },
  badgeLine: {
    borderBottom: "1px solid #333",
    paddingBottom: "15px",
    marginBottom: "30px"
  },
  badge: {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    opacity: 0.5
  },
  icon: {
    fontSize: "40px",
    marginBottom: "20px"
  },
  cardTitle: {
    fontWeight: "600",
    marginBottom: "20px",
    lineHeight: "1.2"
  },
  cardText: {
    color: "#a0a0a0",
    fontSize: "16px",
    lineHeight: "1.6"
  }
};

export default Hero5;