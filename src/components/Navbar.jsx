import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/fortunacysec_logo.jpg";

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Update view on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkStyle = (path, name) => ({
    color: location.pathname === path ? "#fff" : "#bbb",
    textDecoration: "none",
    fontSize: isMobile ? "18px" : "15px",
    paddingBottom: "4px",
    transition: "all 0.3s ease",
    borderBottom:
      hovered === name || location.pathname === path
        ? "2px solid #ff4d1c"
        : "2px solid transparent",
  });

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Platform", path: "/platform" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Company", path: "/company" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "15px 25px" : "18px 60px",
        background: "#1f1f1f",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff", fontSize: "22px", textDecoration: "none" }}>
        <img src={logo} alt="Fortuna Cysec" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
        fortuna <b>cysec</b>
      </Link>

      {/* HAMBURGER ICON (Mobile Only) */}
      {isMobile && (
        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer", color: "#fff", fontSize: "28px" }}>
          {isOpen ? "✕" : "☰"}
        </div>
      )}

      {/* NAV LINKS */}
      <div
        style={{
          display: isMobile ? (isOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "30px" : "26px",
          position: isMobile ? "absolute" : "static",
          top: "70px",
          left: 0,
          width: isMobile ? "100%" : "auto",
          background: isMobile ? "#1f1f1f" : "transparent",
          padding: isMobile ? "40px 25px" : "0",
          borderTop: isMobile ? "1px solid #333" : "none",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={navLinkStyle(item.path, item.name)}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        {/* CONTACT BUTTON (Inside menu on mobile) */}
        <Link
          to="/contact"
          style={{
            background: "#ff4d1c",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "4px",
            fontSize: "14px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: isMobile ? "10px" : "0",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#ff6a3c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#ff4d1c")}
          onClick={() => setIsOpen(false)}
        >
          Contact Us →
        </Link>
      </div>
    </nav>
  );
}