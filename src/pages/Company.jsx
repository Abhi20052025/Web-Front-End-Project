import React, { useState, useEffect } from "react";
import abstract from "../assets/images/pic.webp";
import cityImage from "../assets/images/image1.png";

export default function Company() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <style>
        {`
          @keyframes slowRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          /* Custom scrollbar for mobile location grid */
          .mobile-scroll::-webkit-scrollbar { display: none; }
        `}
      </style>

      {/* ================= SECTION 1: HERO ================= */}
      <section style={{...styles.heroWrapper, padding: isMobile ? "60px 0" : "100px 0"}}>
        <div style={{
          ...styles.containerFlex, 
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "left",
          gap: isMobile ? "40px" : "0"
        }}>
          <div style={styles.heroLeft}>
            <h1 style={{...styles.heroHeading, fontSize: isMobile ? "32px" : "52px"}}>
              <span style={styles.orangeText}>One platform</span> to orchestrate all
              your cybersecurity needs.
            </h1>
            <p style={{...styles.heroTagline, fontSize: isMobile ? "18px" : "22px"}}>
              Predict <span style={styles.heroDot}>•</span> Prevent{" "}
              <span style={styles.heroDot}>•</span> Protect
            </p>
          </div>

          <div style={{...styles.heroRight, justifyContent: isMobile ? "center" : "flex-end"}}>
            <img
              src={abstract}
              alt="Cybersecurity abstraction"
              style={{
                ...styles.heroRotatingImage,
                width: isMobile ? "280px" : "400px"
              }}
            />
          </div>
        </div>
        {/* Notched bar hidden on very small mobile for cleaner UI */}
        {!isMobile && <div style={styles.heroBottomCurve}></div>}
      </section>

      {/* ================= SECTION 2: ABOUT US ================= */}
      <section style={{...styles.aboutSection, padding: isMobile ? "60px 0" : "120px 0"}}>
        <div style={{
          ...styles.containerFlex, 
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: isMobile ? "50px" : "0"
        }}>
          <div style={{...styles.leftContent, paddingRight: isMobile ? "0" : "40px", textAlign: isMobile ? "center" : "left"}}>
            <div style={styles.badge}>Our Story</div>
            <h2 style={{...styles.heading, fontSize: isMobile ? "30px" : "40px"}}>About Fortuna Cysec</h2>
            <div style={styles.textBlock}>
              <p style={styles.paragraph}>
                Fortuna CySec Inc is a global Cybersecurity company helping customers 
                understand the changing Cybersecurity landscape and secure their network 
                with our new innovative TheFense Cybersecurity Platform and Managed Security Services.
              </p>
              <p style={styles.paragraph}>
                Our leadership team along with our global cybersecurity experts have more 
                than total 100+ years of experience in Cybersecurity and Compliance. 
              </p>
            </div>
          </div>

          <div style={{...styles.rightContent, justifyContent: "center"}}>
            <div style={{
              ...styles.imageFrame, 
              width: isMobile ? "300px" : isTablet ? "380px" : "450px",
              height: isMobile ? "280px" : "400px",
              clipPath: isMobile ? "none" : styles.imageFrame.clipPath, // Remove complex shape on mobile for better perf
              borderRadius: isMobile ? "20px" : "0"
            }}>
              <img src={cityImage} alt="City Skyline" style={styles.cityImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LOCATIONS ================= */}
      <section style={styles.locationSection}>
        <img src={abstract} style={{...styles.rotatingBg, width: isMobile ? "300px" : "600px"}} alt="" />
        <div style={styles.container}>
          <h2 style={{...styles.locHeading, fontSize: isMobile ? "32px" : "42px", textAlign: isMobile ? "center" : "left"}}>
            Our locations
          </h2>
          <div className="mobile-scroll" style={{
            ...styles.grid, 
            gridTemplateColumns: isMobile ? "repeat(3, 85%)" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
            overflowX: isMobile ? "auto" : "hidden",
            paddingBottom: isMobile ? "20px" : "0",
            display: isMobile ? "flex" : "grid"
          }}>
            <div style={{...styles.locCol, minWidth: isMobile ? "85%" : "auto"}}>
              <h4 style={styles.countryTitle}>USA</h4>
              <p style={styles.address}>
                <strong>Global Headquarters</strong><br/>
                Fortuna Cysec Inc.<br/>
                Two Ballpark Center,<br/>
                800 Battery Avenue SE, Suite 100,<br/>
                Atlanta, Georgia, 30339 USA<br/>
                Main: +1 470-80-CYSEC
              </p>
            </div>
            <div style={{...styles.locCol, minWidth: isMobile ? "85%" : "auto"}}>
              <h4 style={styles.countryTitle}>Australia</h4>
              <p style={styles.address}>
                526/368 Sussex St,<br/>
                Sydney NSW 2000<br/>
                AUSTRALIA
              </p>
            </div>
            <div style={{...styles.locCol, minWidth: isMobile ? "85%" : "auto"}}>
              <h4 style={styles.countryTitle}>India</h4>
              <p style={styles.address}>
                Plot No. 101, Kavuri Hills<br/>
                Phase II, Hyderabad<br/>
                TS 500033 INDIA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageWrapper: { fontFamily: "'Segoe UI', sans-serif", overflowX: "hidden" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 25px", position: "relative" },
  containerFlex: { 
    maxWidth: "1200px", 
    margin: "0 auto", 
    padding: "0 25px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between",
    width: "100%"
  },
  heroWrapper: {
    minHeight: "80vh",
    backgroundColor: "#eef1e7",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  heroLeft: { flex: 1 },
  heroHeading: { fontWeight: "400", color: "#333", lineHeight: "1.2" },
  orangeText: { color: "#d35400" },
  heroTagline: { color: "#d35400", marginTop: "20px" },
  heroDot: { margin: "0 10px" },
  heroRight: { flex: 1, display: "flex" },
  heroRotatingImage: { height: "auto", animation: "slowRotate 20s linear infinite" },
  heroBottomCurve: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80px",
    background: "#1e1e1e",
    clipPath: "polygon(0 100%, 100% 100%, 100% 35%, 88% 35%, 85% 0%, 15% 0%, 12% 35%, 0% 35%)",
  },
  aboutSection: { backgroundColor: "#1e1e1e", color: "#fff" },
  leftContent: { flex: 1 },
  badge: { 
    border: "1px solid #d35400", 
    padding: "6px 16px", 
    borderRadius: "4px", 
    display: "inline-block", 
    fontSize: "14px", 
    marginBottom: "25px", 
    color: "#fff" 
  },
  heading: { marginBottom: "25px" },
  textBlock: { display: "flex", flexDirection: "column", gap: "15px" },
  paragraph: { color: "#ccc", lineHeight: "1.6", fontSize: "16px" },
  rightContent: { flex: 1, display: "flex" },
  imageFrame: { 
    clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)", 
    overflow: "hidden" 
  },
  cityImg: { width: "100%", height: "100%", objectFit: "cover" },
  locationSection: { backgroundColor: "#eef1e7", color: "#333", padding: "80px 0", position: "relative", overflow: "hidden" },
  rotatingBg: { position: "absolute", top: "0", right: "0", opacity: 0.1, animation: "slowRotate 40s linear infinite" },
  locHeading: { marginBottom: "40px" },
  grid: { gap: "20px" },
  locCol: { background: "rgba(255,255,255,0.4)", padding: "20px", borderRadius: "15px" },
  countryTitle: { color: "#d35400", fontSize: "22px", marginBottom: "15px" },
  address: { color: "#666", lineHeight: "1.5" }
};