import React, { useState, useEffect } from "react"; // Added useEffect
import { Link } from "react-router-dom"; // Moved Link import to the top
import "./Resources.css";

/* =======================
   IMAGE IMPORTS
======================= */
import HealthcareImg from "../assets/images/blog1.webp";
import EngineeringImg from "../assets/images/blog4.png";
import MsspImg from "../assets/images/blog2.webp";
import BulletinImg from "../assets/images/blog3.png";
import EventPerson1 from "../assets/images/image copy 5.png";
import EventPerson2 from "../assets/images/image copy 6.png";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("Blog");
  
  // FIXED: Added isMobile state and logic
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="resources-container">
      {/* =======================
          RESOURCES SECTION
      ======================= */}
      <section className="resources-section">

        {/* TAB NAVIGATION */}
        <div className="tab-navigation">
          <div className="tab-pill-box">
            {["Blog", "Use Case", "Events"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active-green" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="results-count">
            Showing{" "}
            {activeTab === "Blog" ? "4" : activeTab === "Use Case" ? "2" : "1"}{" "}
            out of 11
          </p>
        </div>

        {/* =======================
            CONTENT DISPLAY
        ======================= */}
        <div className="content-display">
          {/* ========== BLOG TAB ========== */}
          {activeTab === "Blog" && (
            <div className="blog-grid-view">
              <div className="main-blog-card card-hover">
                <div className="image-hover-wrapper">
                  <img src={EngineeringImg} alt="Featured Blog" className="zoom-effect" />
                </div>
                <div className="blog-details">
                  <span className="cat-label">FINANCE</span>
                  <h3>Isolated Security for a Multi-Tenant World: How TheFense Sets a Standard</h3>
                  <div className="author-row">
                    <img src={EventPerson1} alt="Author" className="avatar" />
                    <div className="author-meta">
                      <strong>Patrick H Whelan</strong>
                      <span>Feb 24, 2025 • 7 min read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mini-blog-list">
                {[{ title: "Benefits of an MSSP", img: MsspImg },
                  { title: "Monthly Cybersecurity Vulnerability Bulletin", img: BulletinImg }
                ].map((blog, idx) => (
                  <div className="mini-item card-hover" key={idx}>
                    <div className="mini-thumb">
                      <img src={blog.img} alt="Blog" className="zoom-effect" />
                    </div>
                    <div className="mini-info">
                      <h4>{blog.title}</h4>
                      <a href="#read" className="read-link">READ BLOG →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========== USE CASE TAB ========== */}
          {activeTab === "Use Case" && (
            <div className="usecase-view">
              <div className="usecase-grid">
                {[1, 2].map((i) => (
                  <div className="usecase-card card-hover" key={i}>
                    <div className="image-hover-wrapper">
                      <img src={HealthcareImg} alt="Healthcare" className="zoom-effect" />
                      <div className="hover-overlay">
                        <button className="green-action-btn">VIEW CASE STUDY</button>
                      </div>
                    </div>
                    <div className="usecase-info">
                      <span className="cat-label">HEALTHCARE</span>
                      <h4>Fortuna Cysec helps Extended Care Facility increase security posture</h4>
                      <div className="author-row">
                        <img src={EventPerson2} alt="Author" className="avatar" />
                        <span>Navin Balakrishnanraja • 5 min read</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========== EVENTS TAB ========== */}
          {activeTab === "Events" && (
            <div className="events-view">
              <div className="event-detail-card card-hover">
                <div className="event-text">
                  <span className="join-badge">JOIN US AT</span>
                  <h2>Age Georgia Annual Conference</h2>
                  <p className="event-meta">MAR 23, 2026 | CHATTANOOGA, TN</p>
                  <p className="event-desc">
                    Navigating the Compliance, Risk Management & Cybersecurity Landscape.
                  </p>
                </div>
                <div className="event-person-profile">
                  <div className="image-hover-wrapper person-img">
                    <img src={EventPerson2} alt="Speaker" className="zoom-effect" />
                  </div>
                  <div className="person-bio">
                    <strong>Navin Balakrishnanraja</strong>
                    <p>Fortuna Cysec Inc</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =======================
            CTA FOOTER (FIXED)
        ======================= */}
        <div className="cta-footer" style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row", 
            gap: isMobile ? "15px" : "20px",
            alignItems: "center",
            marginTop: "50px",
            justifyContent: "center"
        }}>
          <Link
            to="/services"
            className="fense-btn-green"
            style={{
              background: "#00ffa3",
              color: "#1c1c1c",
              padding: "14px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease",
              width: isMobile ? "100%" : "auto",
            }}
          >
            TOUR FENSE
          </Link>

          <Link
            to="/company"
            className="expert-link"
            style={{
              background: "transparent",
              color: "#0e0b0b",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              padding: "10px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
          >
            Talk to an Expert <span style={{ fontSize: "18px" }}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}