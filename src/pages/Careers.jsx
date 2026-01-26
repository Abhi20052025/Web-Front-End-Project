import React, { useState } from "react";
import "./Careers.css";
import careerBg from "../assets/images/pic.webp"; // Hero background image

export default function Careers() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/careers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", position: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="careers-hero"
        style={{ backgroundImage: `url(${careerBg})` }}
      >
        <div className="careers-overlay" />
        <div className="careers-content">
          <span className="career-chip">Find The Right Position For You</span>

          <h1 className="career-title">
            Join us in building robust
            <br />
            security postures for businesses
          </h1>

          <p className="career-desc">
            Fortuna CySec Inc is a global Cybersecurity company helping
            customers understand the changing Cybersecurity landscape and
            secure their network with our innovative TheFense Cybersecurity
            Platform and Managed Security Services.
          </p>

          <div className="career-actions">
            <a href="#careers-form" className="career-btn primary">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Careers Form Section */}
      <section id="careers-form" className="careers-form-section">
        <h2>Apply for a Position</h2>
        <form onSubmit={handleSubmit} className="careers-form">
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            placeholder="Position"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Apply"}
          </button>
        </form>
      </section>
    </div>
  );
}
