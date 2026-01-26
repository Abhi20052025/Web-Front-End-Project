import { useState } from "react";
import formBg from "../assets/images/image.webp";


export default function Contact() {
  const [hoverSubmit, setHoverSubmit] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert("Please accept the terms");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully ✅");
        console.log(data);

        // reset form
        setFormData({
          name: "",
          companyName: "",
          jobTitle: "",
          email: "",
          phone: "",
          interest: "",
          message: "",
          acceptedTerms: false,
        });
      } else {
        alert("Submission failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div style={contactStyles.page}>

      {/* HELP SECTION */}
      <section style={contactStyles.helpSection}>
        <div style={contactStyles.callBox}>
          Call <strong>1-833-33-CYSEC</strong> <strong>(1-833-33-29732)</strong>
        </div>
        <p style={contactStyles.helpText}>
          Need help? Experiencing Security or Privacy Incident or a Breach?
        </p>
      </section>

      {/* FORM SECTION */}
      <section
        style={{
          ...contactStyles.formSection,
          backgroundImage: `url(${formBg})`,
        }}
      >
        <div style={contactStyles.overlay}>
          <form style={contactStyles.form} onSubmit={handleSubmit}>

            <label style={contactStyles.label}>Name*</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={contactStyles.input}
              required
            />

            <div style={contactStyles.row}>
              <div style={contactStyles.col}>
                <label style={contactStyles.label}>Company Name*</label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  style={contactStyles.input}
                  required
                />
              </div>

              <div style={contactStyles.col}>
                <label style={contactStyles.label}>Job Title*</label>
                <input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  style={contactStyles.input}
                  required
                />
              </div>
            </div>

            <div style={contactStyles.row}>
              <div style={contactStyles.col}>
                <label style={contactStyles.label}>Business Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={contactStyles.input}
                  required
                />
              </div>

              <div style={contactStyles.col}>
                <label style={contactStyles.label}>Contact Phone*</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={contactStyles.input}
                  required
                />
              </div>
            </div>

            <p style={contactStyles.radioTitle}>I’d like more information on</p>
            <div style={contactStyles.radioRow}>
              <label>
                <input
                  type="radio"
                  name="interest"
                  value="TheFense Platform"
                  onChange={handleChange}
                />{" "}
                TheFense Platform
              </label>

              <label>
                <input
                  type="radio"
                  name="interest"
                  value="Managed Services"
                  onChange={handleChange}
                />{" "}
                Managed Services
              </label>

              <label>
                <input
                  type="radio"
                  name="interest"
                  value="Other"
                  onChange={handleChange}
                />{" "}
                Other
              </label>
            </div>

            <label style={contactStyles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={contactStyles.textarea}
            />

            <label style={contactStyles.checkbox}>
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
              />{" "}
              I accept the Terms
            </label>

            <button
              type="submit"
              style={{
                ...contactStyles.submitBtn,
                background: hoverSubmit ? "#ff6a2d" : "#f04e23",
              }}
              onMouseEnter={() => setHoverSubmit(true)}
              onMouseLeave={() => setHoverSubmit(false)}
            >
              SUBMIT →
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}



const contactStyles = {
  page: {
    background: "#000",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  helpSection: {
    background: "#eef1e7",
    color:"#000",
    padding: "80px 20px",
    textAlign: "center",
  },

  callBox: {
    background: "#fff",
    color: "#000",
    fontSize: "32px",
    fontWeight: "500",
    padding: "14px 28px",
    display: "inline-block",
    marginBottom: "16px",
  },

  helpText: {
    fontSize: "18px",
    marginTop: "10px",
  },

  formSection: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    background: "rgba(0,0,0,0.75)",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
  },

  form: {
    background: "#fff",
    padding: "40px",
    maxWidth: "700px",
    width: "100%",
    borderRadius: "8px",
    color: "#000",
  },

  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "18px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },

  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "18px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },

  row: {
    display: "flex",
    gap: "16px",
  },

  col: {
    flex: 1,
  },

  radioTitle: {
    fontWeight: "500",
    marginBottom: "8px",
  },

  radioRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },

  checkbox: {
    display: "block",
    marginBottom: "20px",
  },

  submitBtn: {
    width: "100%",
    padding: "14px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
