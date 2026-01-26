import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function AnimatedCircle() {
  const [time, setTime] = useState(0);
  const [visible, setVisible] = useState(true);

  // Constants for coordinate system (remains fixed inside the viewBox)
  const centerX = 200;
  const centerY = 200;
  const baseRadius = 120;
  const numPoints = 96;

  /* TIME LOOP */
  useEffect(() => {
    let raf;
    const loop = () => {
      setTime((t) => t + 0.018);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  /* HIDE → SHOW CYCLE */
  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1200);
    }, 7500);
    return () => clearInterval(cycle);
  }, []);

  /* MORPHING SHAPE PATHS */
  const paths = useMemo(() => {
    return [0, 8, 16, 24].map((offset, index) => {
      const points = [];
      const phase = time + index * 0.7;

      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;

        /* Circle ↔ Polygon ↔ Icosahedron blend */
        const morph = Math.sin(time * 0.5) * 0.5 + 0.5;

        const polygonFactor =
          Math.cos(Math.floor(angle * 6) * (Math.PI / 3)) * (1 - morph);

        const wobble =
          Math.sin(angle * 5 + phase) * 14 +
          Math.cos(angle * 3 - phase) * 10;

        const r =
          baseRadius +
          offset +
          polygonFactor * 26 +
          wobble * (0.4 + morph);

        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);

        points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
      }

      return {
        d: points.join(" ") + " Z",
        strokeWidth: index === 0 ? 3 : 1.3,
        opacity: 1 - index * 0.18,
      };
    });
  }, [time]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        width: "100%",        // Takes full width of parent
        overflow: "hidden",   // Prevents glow from causing scrollbars
        padding: "20px"       // Keeps it from touching screen edges
      }}
    >
      <motion.svg
        // RESPONSIVE SETTINGS
        viewBox="0 0 400 400"  // Internal "canvas" size
        style={{
          width: "100%",       // Scales to parent width
          maxWidth: "500px",   // Maximum size on Desktop
          height: "auto",      // Maintains aspect ratio
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffec3d" />
            <stop offset="50%" stopColor="#ff4d1c" />
            <stop offset="100%" stopColor="#9e1030" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth={p.strokeWidth}
            opacity={p.opacity}
            filter="url(#glow)"
          />
        ))}
      </motion.svg>
    </div>
  );
}