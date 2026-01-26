import logo from "../assets/images/fortuna cysec.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [hoverSub, setHoverSub] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);

  const footerLinks = [
    {
      title: "Platform",
      items: [{ label: "TheFense", path: "/platform" }]
    },
    {
      title: "Services",
      items: [
        { label: "Managed Security", path: "/services" },
        { label: "Threat Intelligence", path: "/services" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Blogs", path: "/resources" },
        { label: "Use Cases", path: "/resources" },
        { label: "Events", path: "/resources" },
        { label: "Security & Trust", path: "/resources" }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
        { label: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Customer Portal",
      items: []
    }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left}>
          <img src={logo} alt="Fortuna Cysec" style={styles.logo} />
          <p style={styles.tagline}>Predict. Prevent. Protect.</p>

          <div style={styles.subscribeBox}>
            <p style={styles.subscribeText}>
              Subscribe to get updates on Fortuna Cysec’s newsletters,
              product updates, events and more.
            </p>

            <div style={styles.inputRow}>
              <input
                type="email"
                placeholder="Business Email Address"
                style={styles.input}
              />
              <button
                style={{
                  ...styles.subscribeBtn,
                  background: hoverSub ? "#ff7a4a" : "#ff5a1f",
                  transform: hoverSub ? "translateY(-2px)" : "none"
                }}
                onMouseEnter={() => setHoverSub(true)}
                onMouseLeave={() => setHoverSub(false)}
              >
                Subscribe →
              </button>
            </div>

            <p style={styles.privacy}>Privacy Policy</p>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/fortunacysec/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
            onMouseEnter={() => setHoverLinkedIn(true)}
            onMouseLeave={() => setHoverLinkedIn(false)}
          >
            <i
              className="fa-brands fa-linkedin-in"
              style={{
                ...styles.linkedinIcon,
                transform: hoverLinkedIn ? "scale(1.2)" : "scale(1)"
              }}
            />
          </a>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 style={styles.heading}>{section.title}</h4>

              {section.items.map((item, j) => (
                <Link
                  key={j}
                  to={item.path}
                  style={styles.link}
                  onMouseEnter={e => e.target.style.opacity = "1"}
                  onMouseLeave={e => e.target.style.opacity = "0.7"}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        © Copyright 2025 Fortuna Cysec. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ================= STYLES ================= */

const styles = {
  footer: {
    background: "#1f1f1f",
    color: "#fff",
    padding: "60px 20px 30px"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "60px",
    maxWidth: "1280px",
    margin: "0 auto"
  },

  left: {
    maxWidth: "420px"
  },

  logo: {
    width: "220px",
    marginBottom: "14px"
  },

  tagline: {
    opacity: 0.7,
    marginBottom: "24px"
  },

  subscribeBox: {
    marginTop: "30px"
  },

  subscribeText: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "12px",
    opacity: 0.9
  },

  inputRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  input: {
    flex: 1,
    minWidth: "220px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#111",
    color: "#fff"
  },

  subscribeBtn: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  privacy: {
    fontSize: "12px",
    opacity: 0.6,
    marginTop: "8px",
    cursor: "pointer"
  },

  socialLink: {
    display: "inline-block",
    marginTop: "22px"
  },

  linkedinIcon: {
    fontSize: "28px",
    color: "#0A66C2",
    transition: "transform 0.3s ease"
  },

  /* 👇 RIGHT SIDE IMPROVED */
  right: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "40px",
    width: "100%",
    maxWidth: "760px",
    borderTop: "1px solid #2f2f2f",
    paddingTop: "30px"
  },

  heading: {
    marginBottom: "14px",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "0.3px"
  },

  link: {
    display: "block",
    fontSize: "14px",
    opacity: 0.7,
    marginBottom: "10px",
    cursor: "pointer",
    transition: "opacity 0.3s ease, transform 0.2s ease",
    color: "#fff",
    textDecoration: "none"
  },

  bottom: {
    marginTop: "50px",
    borderTop: "1px solid #333",
    paddingTop: "18px",
    textAlign: "center",
    fontSize: "13px",
    opacity: 0.6
  }
};
