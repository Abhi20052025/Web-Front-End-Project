import { useState } from "react";
import dashboard1 from "../assets/images/pic 1.webp";
import dashboard2 from "../assets/images/pic2.webp";
import dashboard3 from "../assets/images/pic3.webp";

export default function Hero2() {
  const images = [dashboard1, dashboard2, dashboard3];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section style={styles.wrapper}>
      {/* TOP PILL */}
      <div style={styles.chip}>
        Elevate Your Cybersecurity Capabilities With{" "}
        <span style={styles.highlight}>AI And Automation</span>
      </div>

      {/* MAIN HEADING */}
      <h1 style={styles.title}>
        <span style={styles.light}>Fense:</span>{" "}
        <span style={styles.highlight}>An end-to-end managed platform</span>{" "}
        that eliminates cybersecurity gaps in your enterprise
      </h1>

      {/* SLIDER AREA */}
      <div style={styles.sliderWrapper}>
        {/* LEFT BUTTON */}
        <button style={styles.navButton} onClick={prevSlide}>
          ‹
        </button>

        {/* CENTER IMAGE */}
        <div style={styles.imageBox}>
          <img
            src={images[index]}
            alt="Platform dashboard"
            style={styles.image}
          />
        </div>

        {/* RIGHT BUTTON */}
        <button style={styles.navButton} onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* SUB TEXT */}
      <div style={styles.subSection}>
        <h2 style={styles.subTitle}>
          Data Telemetry & Environment Monitoring
        </h2>
        <p style={styles.subText}>
          Unified data collection across all platforms
        </p>
      </div>
    </section>
  );
}



const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #1c1c1c 0%, #141414 100%)",
    color: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "80px 40px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
  },

  chip: {
    background: "#000",
    padding: "10px 26px",
    borderRadius: "30px",
    fontSize: "18px",
    marginBottom: "40px",
    color: "#fff",
  },

  highlight: {
    color: "#f3ff6b",
    fontWeight: "500",
  },

  title: {
    fontSize: "52px",
    maxWidth: "1100px",
    lineHeight: "1.3",
    marginBottom: "60px",
    fontWeight: "400",
  },

  light: {
    color: "#dcdcdc",
  },

  sliderWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginBottom: "60px",
  },

  navButton: {
    background: "#000",
    color: "#fff4a3",
    border: "none",
    borderRadius: "50%",
    width: "54px",
    height: "54px",
    fontSize: "32px",
    cursor: "pointer",
  },

  imageBox: {
    background: "#e9ecdf",
    padding: "20px",
    borderRadius: "18px",
    maxWidth: "900px",
  },

  image: {
    width: "100%",
    borderRadius: "14px",
  },

  subSection: {
    marginTop: "20px",
  },

  subTitle: {
    fontSize: "36px",
    color: "#fff4a3",
    marginBottom: "12px",
  },

  subText: {
    fontSize: "18px",
    color: "#cfcfcf",
  },
};
