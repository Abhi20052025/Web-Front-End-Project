import React from 'react';
import './Platform.css';

// 1. IMPORT YOUR IMAGE HERE
// Replace 'your-image-file.png' with your actual filename
import PlatformDashboardImage from '../assets/images/image copy 4.png'; 

const Platform = () => {
  return (
    <div className="platform-container">
      {/* SECTION 1: HERO */}
      <section className="platform-hero">
        <div className="glow-container">
          <div className="green-glass-shape"></div>
        </div>

        <div className="hero-content">
          <h1 className="main-title">
            Complete cybersecurity for <br />
            <span className="bold-text">enterprises</span> on one platform
          </h1>
          <p className="hero-subtitle">
            The Fense platform to fortify your organization's security posture
          </p>

          <div className="features-row">
            <div className="feature-item">
              Co-ordinate cybersecurity <br /> in one place
            </div>
            <div className="vertical-divider"></div>
            <div className="feature-item">
              Detection to assessment to <br /> compliance
            </div>
            <div className="vertical-divider"></div>
            <div className="feature-item">
              Eliminate siloed vendors & <br /> management
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DESCRIPTION */}
      <section className="platform-description">
        <div className="badge">TheFense Platform</div>
        <h2 className="description-text">
          TheFense offers a <span className="highlight">cohesive, interconnected, interactive, configurable, dynamic cybersecurity platform.</span> A single pane of glass dashboard of the organization's security posture with risks from all the assets across all locations. The Fense is one platform to orchestrate all your cybersecurity needs.
        </h2>

        {/* 2. IMAGE ADDED AFTER THE PARAGRAPH */}
        <div className="platform-image-wrapper">
          <img 
            src={PlatformDashboardImage} 
            alt="The Fense Platform Overview" 
            className="bottom-platform-img"
          />
        </div>
      </section>
    </div>
  );
};

export default Platform;