import React, { useState } from "react";
import axios from "axios";
import "./Careers.css";
import careerBg from "../assets/images/pic.webp"; // Hero background image

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(""); // success message
  const [error, setError] = useState(""); // error message

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");
  setError("");

  try {
    // ✅ Remove 'res' because it's unused
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/careers`,
      formData
    );

    setSuccess("Application submitted successfully!");
    setFormData({ name: "", email: "", position: "", message: "" });
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="careers-page">
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

          <a href="#careers-form" className="career-btn primary">
            Apply Now
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section id="careers-form" className="careers-form-section">
        <h2 className="form-title">Apply for a Position</h2>

        {success && <p className="form-success">{success}</p>}
        {error && <p className="form-error">{error}</p>}

        <form onSubmit={handleSubmit} className="careers-form">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="text"
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
