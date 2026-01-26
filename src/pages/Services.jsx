import React, { useState } from "react";
import abstract from "../assets/images/logo3.svg";
import SecuritySlider from "../pages/SecuritySlider";


import monitor from "../assets/images/image copy 2.png";
import cost from "../assets/images/image.png";
import expert from "../assets/images/image copy.png";
import compliance from "../assets/images/image copy 3.png";

export default function Services() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "24x7x365 Monitoring",
      icon: monitor,
      text:
        "SOC 2 Type 2 Certified global security operations centers monitor your environment 24x7x365 with rapid detection, response, threat hunting, and forensics.",
    },
    {
      title: "Save 72% Operational Cost",
      icon: cost,
      text:
        "Reduce SOC costs by up to 72% with consolidated MDR tools and high-performing global SOC operations.",
    },
    {
      title: "Deep Domain Expertise",
      icon: expert,
      text:
        "Certified analysts with CISSP, CISM, CISA, CEH credentials defend your organization against evolving threats.",
    },
    {
      title: "Regulatory Compliance",
      icon: compliance,
      text:
        "Meet NIST, HITRUST, GDPR, GLBA, FISMA, and HIPAA compliance requirements with secure environments.",
    },
  ];

  return (
    <>
      {/* KEYFRAMES */}
      <style>{`
        @keyframes rotateBg {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* HERO */}
      <section style={hero.wrapper}>
        <img src={abstract} alt="" style={hero.rotatingBg} />
        <div style={hero.content}>
          <h1 style={hero.heading}>
            Managed Security Services –
            <br />
            Unified in One Place
          </h1>
          <p style={hero.description}>
            Modular cybersecurity services designed around your organization’s
            security requirements.
          </p>
        </div>
      </section>

      {/* MANAGED SERVICES */}
      <section style={managed.wrapper}>
        <div style={managed.container}>
          <div style={managed.chip}>Fortuna Cysec Managed Services</div>
          <h1 style={managed.title}>
            Deploy, Configure & Manage Security
            <br />
            On-Premises or in the Cloud
          </h1>
          <p style={managed.description}>
            Our 24×7×365 SOC manages leading security platforms across hybrid
            environments with continuous protection.
          </p>
        </div>
      </section>

            {/* SECURITY SLIDER */}
<section style={{ background: "#111", padding: "120px 20px" }}>
  <SecuritySlider />
</section>
                                              

      {/* WHAT YOU GET */}
      <section style={service.wrapper}>
        <div style={service.chip}>What You Get</div>
        <h1 style={service.title}>
          Fortuna Cysec provides{" "}
          <span style={service.highlight}>Unified Services</span> with
        </h1>

        <div style={cardsStyle.grid}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                ...cardsStyle.card,
                ...(hovered === i ? cardsStyle.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={cardsStyle.cardTitle}>{card.title}</h3>

              <div
                style={{
                  ...cardsStyle.line,
                  ...(hovered === i ? cardsStyle.lineHover : {}),
                }}
              />

              <div style={cardsStyle.body}>
                <img src={card.icon} alt="" style={cardsStyle.icon} />
                <p style={cardsStyle.text}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ================= STYLES ================= */

const hero = {
  wrapper: {
    minHeight: "100vh",
    background: "#778560",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  rotatingBg: {
    position: "absolute",
    width: "900px",
    maxWidth: "90%",
    opacity: 0.08,
    animation: "rotateBg 60s linear infinite",
  },
  content: {
    textAlign: "center",
    maxWidth: "900px",
    zIndex: 2,
  },
  heading: {
    fontSize: "56px",
    fontWeight: "400",
    color: "#2a2a2a",
    marginBottom: "32px",
  },
  description: {
    fontSize: "20px",
    color: "#2a2a2a",
    lineHeight: "1.6",
  },
};

const managed = {
  wrapper: {
    background: "#262626",
    padding: "120px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1100px",
    textAlign: "center",
  },
  chip: {
    display: "inline-block",
    padding: "8px 22px",
    background: "#000",
    color: "#eee5e5",
    borderRadius: "999px",
    marginBottom: "36px",
  },
  title: {
    fontSize: "56px",
    fontWeight: "400",
    color: "#f1f3ed",
    marginBottom: "32px",
  },
  description: {
    fontSize: "18px",
    color: "#e5e5e5",
    maxWidth: "900px",
    margin: "0 auto",
  },
};

const service = {
  wrapper: {
    background: "#eef1e7",
    padding: "100px 20px",
    textAlign: "center",
  },
  chip: {
    display: "inline-block",
    padding: "6px 18px",
    borderRadius: "20px",
    background: "#fff",
    color:"#000",
    marginBottom: "24px",
  },
  title: {
    fontSize: "52px",
    marginBottom: "70px",
    color:"#000",
  },
  highlight: {
    color: "#f04b1d",
    fontWeight: "600",
  },
};

const cardsStyle = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#262626",
    borderRadius: "20px",
    padding: "32px",
    color: "#fff",
    transition: "all 0.35s ease",
  },
  cardHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 25px 45px rgba(255,255,0,0.15)",
  },
  cardTitle: {
    fontSize: "26px",
    fontWeight: "400",
    marginBottom: "20px",
  },
  line: {
    height: "1px",
    background: "linear-gradient(90deg,#fff,#777)",
    marginBottom: "28px",
    transition: "0.35s",
  },
  lineHover: {
    background: "linear-gradient(90deg,#f5ff5c,#fff)",
  },
  body: {
    display: "flex",
    gap: "22px",
  },
  icon: {
    width: "52px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#dcdcdc",
  },
};
