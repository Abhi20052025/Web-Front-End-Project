import React, { useState } from "react";
import "./Securityslider.css";

export default function SecuritySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [
    { title: "EDR", desc: "Endpoint Detection & Response" },
    { title: "SIEM & SOAR", desc: "Security Monitoring & Automation" },
    { title: "NDR", desc: "Network Detection & Response" },
    { title: "MDM", desc: "Mobile Device Management" },
    { title: "DLP", desc: "Data Loss Prevention" },
    { title: "Asset Management", desc: "Digital Asset Tracking" },
    { title: "IAM", desc: "Identity Access Management" },
    { title: "Cloud Security", desc: "Cloud Threat Protection" },
    { title: "PAM", desc: "Privileged Access Management" },
    { title: "Email Security", desc: "Phishing & Malware Defense" },
  ];

  const next = () =>
    setCurrentIndex((i) => (i === pages.length - 1 ? 0 : i + 1));
  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? pages.length - 1 : i - 1));

  const progress = (currentIndex / (pages.length - 1)) * 100;

  return (
    <div className="slider-container">
      <button className="nav-btn left-btn" onClick={prev}>‹</button>
      <button className="nav-btn right-btn" onClick={next}>›</button>

      <div className="slide-display">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pages.map((p, i) => (
            <div className="slide-card" key={i}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-container">
        <div className="base-line" />
        <div className="active-line" style={{ width: `${progress}%` }} />

        <div className="nodes-wrapper">
          {pages.map((p, i) => (
            <div
              key={i}
              className={`node ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            >
              <span className="tooltip">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
