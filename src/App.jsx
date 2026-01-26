import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AlertBar from "./components/AlertBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Platform from "./pages/Platform";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Company from "./pages/Company";

export default function App() {
  return (
    <Router>
      <AlertBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/Company" element={<Company />} />
      </Routes>

      <Footer />
    </Router>
  );
}
