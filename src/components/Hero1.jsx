import { useEffect, useRef, useState } from "react";

export default function Hero1() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.wrapper}>
      <div style={styles.chip}>What You Get And How We Do It</div>

      <h1 style={styles.title}>
        Fortuna Cysec <span style={styles.orange}>transforms your</span>
        <br />
        <span style={styles.orange}>security posture</span> and pays for itself
      </h1>

      <div style={styles.cards}>
        <MetricCard tag="PREDICT" title="Visibility & Coverage" percent={90} start={start} />
        <MetricCard tag="PREVENT" title="Faster Detection" percent={95} start={start} />
        <MetricCard tag="PROTECT" title="Cost Reduction" percent={72} start={start} />
      </div>
    </section>
  );
}

/* ================= METRIC CARD ================= */

function MetricCard({ tag, title, percent, start }) {
  const [count, setCount] = useState(0);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= percent) {
        current = percent;
        clearInterval(interval);
      }
      setCount(current);
    }, 18);

    return () => clearInterval(interval);
  }, [start, percent]);

  const offset = circumference - (count / 100) * circumference;

  return (
    <div style={styles.card}>
      <div style={styles.tag}>{tag}</div>
      <h3 style={styles.cardTitle}>{title}</h3>

      <div style={styles.circleWrap}>
        <svg width="220" height="220" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="#6f6f6f"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="110"
            cy="110"
            r={radius}
            stroke="#f05a28"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div style={styles.value}>&gt;{count}%</div>
      </div>

      <div style={styles.text}>
        {tag === "PREDICT" && (
          <>
            <p>One managed cybersecurity platform</p>
            <p>Telemetry across your entire environment</p>
          </>
        )}
        {tag === "PREVENT" && (
          <>
            <p>Alert correlation & prioritization</p>
            <p>Better context for alerts & events</p>
          </>
        )}
        {tag === "PROTECT" && (
          <>
            <p>Managed platform with SOC services</p>
            <p>One team from implementation to support</p>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    background: "#eef1e7",
    padding: "120px 60px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
  },

  chip: {
    display: "inline-block",
    padding: "8px 18px",
    background: "#fff",
    color:"black",
    borderRadius: "20px",
    fontSize: "14px",
    marginBottom: "30px",
  },

  title: {
    fontSize: "56px",
    fontWeight: "500",
    marginBottom: "90px",
    lineHeight: "1.2",
    color: "#1f1f1f",
  },

  orange: { color: "#f05a28" },

  cards: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    background: "#262626",
    color: "#fff",
    borderRadius: "24px",
    padding: "40px 30px",
    width: "340px",
    textAlign: "center",
  },

  tag: {
    display: "inline-block",
    padding: "6px 16px",
    border: "1px solid #f05a28",
    borderRadius: "20px",
    color: "#f05a28",
    fontSize: "14px",
    marginBottom: "20px",
  },

  cardTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  circleWrap: {
    position: "relative",
    width: "220px",
    height: "220px",
    margin: "0 auto 40px",
  },

  value: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "44px",
    fontWeight: "500",
    color: "#e0e0e0",
  },

  text: {
    fontSize: "15.5px",
    color: "#cfcfcf",
    lineHeight: "1.7",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
