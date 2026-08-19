import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="app">
      {/* ==================== NAVBAR ==================== */}
      <header className="landing-navbar">
        <div className="landing-container landing-navbar-container">
          <Link to="/" className="landing-brand">
            <span className="landing-brand-mark">+</span>
            <span>HealthMonitor</span>
          </Link>

          <nav className="landing-nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#users">For Users</a>
          </nav>

          <div className="landing-nav-actions">
            <Link to="/login" className="landing-login-link">
              Login
            </Link>

            <Link to="/register" className="landing-primary-button landing-nav-button">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section id="home" className="landing-hero">
          <div className="landing-hero-shape landing-hero-shape-one"></div>
          <div className="landing-hero-shape landing-hero-shape-two"></div>

          <div className="landing-container landing-hero-container">
            <div className="landing-hero-content">
              <div className="landing-eyebrow">
                <span className="landing-status-dot"></span>
                Smart Home Health Monitoring
              </div>

              <h1>
                Better health monitoring,
                <span> right from home.</span>
              </h1>

              <p className="landing-hero-description">
                Monitor vital health data, detect unusual changes, and keep
                patients, doctors, and caregivers connected through one
                intelligent healthcare platform.
              </p>

              <div className="landing-hero-actions">
                <Link to="/register" className="landing-primary-button">
                  Get Started
                  <span className="landing-button-arrow">→</span>
                </Link>

                <a href="#how-it-works" className="landing-secondary-button">
                  Explore Platform
                </a>
              </div>

              <div className="landing-hero-trust">
                <div className="landing-trust-item">
                  <strong>24/7</strong>
                  <span>Monitoring</span>
                </div>

                <div className="landing-trust-divider"></div>

                <div className="landing-trust-item">
                  <strong>Real-time</strong>
                  <span>Health Data</span>
                </div>

                <div className="landing-trust-divider"></div>

                <div className="landing-trust-item">
                  <strong>3-way</strong>
                  <span>Care Access</span>
                </div>
              </div>
            </div>

            {/* ==================== DASHBOARD PREVIEW ==================== */}
            <div className="landing-hero-visual">
              <div className="landing-dashboard-preview">
                <div className="landing-preview-header">
                  <div>
                    <span className="landing-preview-label">
                      Health Overview
                    </span>
                    <h3>Today's Summary</h3>
                  </div>

                  <span className="landing-health-status">
                    <span></span>
                    Stable
                  </span>
                </div>

                <div className="landing-vitals-grid">
                  <div className="landing-vital-card landing-heart-card">
                    <div className="landing-vital-top">
                      <span className="landing-vital-icon">HR</span>
                      <span className="landing-vital-change">+2%</span>
                    </div>

                    <span className="landing-vital-name">Heart Rate</span>

                    <div className="landing-vital-value">
                      72 <small>BPM</small>
                    </div>

                    <div className="landing-mini-chart">
                      <span style={{ height: "38%" }}></span>
                      <span style={{ height: "55%" }}></span>
                      <span style={{ height: "45%" }}></span>
                      <span style={{ height: "70%" }}></span>
                      <span style={{ height: "58%" }}></span>
                      <span style={{ height: "82%" }}></span>
                      <span style={{ height: "65%" }}></span>
                      <span style={{ height: "75%" }}></span>
                    </div>
                  </div>

                  <div className="landing-vital-card">
                    <div className="landing-vital-top">
                      <span className="landing-vital-icon">O₂</span>
                      <span className="landing-vital-normal">Normal</span>
                    </div>

                    <span className="landing-vital-name">Blood Oxygen</span>

                    <div className="landing-vital-value">
                      98 <small>%</small>
                    </div>

                    <div className="landing-progress-line">
                      <span style={{ width: "98%" }}></span>
                    </div>
                  </div>

                  <div className="landing-vital-card">
                    <div className="landing-vital-top">
                      <span className="landing-vital-icon">BP</span>
                      <span className="landing-vital-normal">Normal</span>
                    </div>

                    <span className="landing-vital-name">
                      Blood Pressure
                    </span>

                    <div className="landing-vital-value">
                      118/76 <small>mmHg</small>
                    </div>

                    <div className="landing-progress-line">
                      <span style={{ width: "72%" }}></span>
                    </div>
                  </div>

                  <div className="landing-vital-card">
                    <div className="landing-vital-top">
                      <span className="landing-vital-icon">°C</span>
                      <span className="landing-vital-normal">Normal</span>
                    </div>

                    <span className="landing-vital-name">Temperature</span>

                    <div className="landing-vital-value">
                      36.7 <small>°C</small>
                    </div>

                    <div className="landing-progress-line">
                      <span style={{ width: "65%" }}></span>
                    </div>
                  </div>
                </div>

                <div className="landing-preview-bottom">
                  <div>
                    <span className="landing-preview-label">Activity</span>
                    <strong>6,842 steps</strong>
                  </div>

                  <div className="landing-activity-bars">
                    <span style={{ height: "32%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "38%" }}></span>
                    <span style={{ height: "64%" }}></span>
                    <span style={{ height: "52%" }}></span>
                    <span style={{ height: "78%" }}></span>
                    <span style={{ height: "92%" }}></span>
                    <span style={{ height: "70%" }}></span>
                    <span style={{ height: "82%" }}></span>
                    <span style={{ height: "58%" }}></span>
                  </div>
                </div>
              </div>

              <div className="landing-floating-alert">
                <div className="landing-alert-indicator"></div>

                <div>
                  <span>Monitoring active</span>
                  <strong>All vitals within range</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section id="how-it-works" className="landing-how-section">
          <div className="landing-container">
            <div className="landing-section-heading landing-centered">
              <span className="landing-section-label">HOW IT WORKS</span>

              <h2>
                Connected care, <span>made simple.</span>
              </h2>

              <p>
                Health data moves securely from connected devices to the
                people who need it, helping everyone stay informed.
              </p>
            </div>

            <div className="landing-process-grid">
              <div className="landing-process-card">
                <div className="landing-process-number">01</div>

                <div className="landing-process-icon landing-device-icon">
                  <div className="landing-device-screen"></div>
                </div>

                <h3>Collect</h3>

                <p>
                  Wearables and home sensors collect important health
                  information throughout the day.
                </p>
              </div>

              <div className="landing-process-connector"></div>

              <div className="landing-process-card">
                <div className="landing-process-number">02</div>

                <div className="landing-process-icon landing-monitor-icon">
                  <div className="landing-monitor-line"></div>
                </div>

                <h3>Monitor</h3>

                <p>
                  The platform analyzes vital readings and tracks health
                  patterns over time.
                </p>
              </div>

              <div className="landing-process-connector"></div>

              <div className="landing-process-card">
                <div className="landing-process-number">03</div>

                <div className="landing-process-icon landing-alert-icon">
                  <span>!</span>
                </div>

                <h3>Alert</h3>

                <p>
                  When an unusual reading is detected, the right people can be
                  notified quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FEATURES ==================== */}
        <section id="features" className="landing-features-section">
          <div className="landing-container">
            <div className="landing-section-heading">
              <span className="landing-section-label">PLATFORM FEATURES</span>

              <h2>
                Everything you need to stay
                <span> connected to care.</span>
              </h2>

              <p>
                A unified platform designed to bring patients, doctors, and
                caregivers together around meaningful health information.
              </p>
            </div>

            <div className="landing-features-grid">
              <article className="landing-feature-card landing-feature-large">
                <div className="landing-feature-icon">
                  <span className="landing-pulse-line"></span>
                </div>

                <div className="landing-feature-content">
                  <span className="landing-feature-number">01</span>

                  <h3>Real-time Vital Monitoring</h3>

                  <p>
                    Track heart rate, blood pressure, blood oxygen,
                    temperature, activity, and other health measurements from
                    one dashboard.
                  </p>
                </div>
              </article>

              <article className="landing-feature-card">
                <div className="landing-feature-icon landing-chart-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="landing-feature-number">02</span>

                <h3>Health Trends</h3>

                <p>
                  Understand daily, weekly, and monthly changes through clear
                  health trends and visual data.
                </p>
              </article>

              <article className="landing-feature-card">
                <div className="landing-feature-icon landing-alert-feature-icon">
                  <span>!</span>
                </div>

                <span className="landing-feature-number">03</span>

                <h3>Smart Alerts</h3>

                <p>
                  Identify abnormal readings and important events that may
                  require attention.
                </p>
              </article>

              <article className="landing-feature-card">
                <div className="landing-feature-icon landing-doctor-icon">
                  <span></span>
                </div>

                <span className="landing-feature-number">04</span>

                <h3>Doctor Access</h3>

                <p>
                  Give healthcare professionals access to relevant patient
                  information for better monitoring.
                </p>
              </article>

              <article className="landing-feature-card">
                <div className="landing-feature-icon landing-family-icon">
                  <span></span>
                  <span></span>
                </div>

                <span className="landing-feature-number">05</span>

                <h3>Family & Caregiver Access</h3>

                <p>
                  Keep trusted family members and caregivers informed about
                  the patient's current health status.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== USERS ==================== */}
        <section id="users" className="landing-users-section">
          <div className="landing-container">
            <div className="landing-section-heading landing-centered">
              <span className="landing-section-label">
                BUILT FOR EVERYONE INVOLVED
              </span>

              <h2>
                One platform.
                <span> Three perspectives.</span>
              </h2>

              <p>
                Everyone involved in a patient's care gets the information
                relevant to them.
              </p>
            </div>

            <div className="landing-users-grid">
              <article className="landing-user-card">
                <div className="landing-user-card-top">
                  <span className="landing-user-role">PATIENT</span>
                  <span className="landing-user-arrow">→</span>
                </div>

                <div className="landing-user-visual">
                  <div className="landing-user-circle">
                    <span>01</span>
                  </div>
                </div>

                <h3>Understand your health</h3>

                <p>
                  View your vital signs, health history, trends, and important
                  alerts from a single dashboard.
                </p>
              </article>

              <article className="landing-user-card landing-featured-user">
                <div className="landing-user-card-top">
                  <span className="landing-user-role">DOCTOR</span>
                  <span className="landing-user-arrow">→</span>
                </div>

                <div className="landing-user-visual landing-doctor-visual">
                  <div className="landing-user-circle">
                    <span>02</span>
                  </div>
                </div>

                <h3>Monitor patients remotely</h3>

                <p>
                  Access patient vitals, health trends, medical records, and
                  important alerts.
                </p>
              </article>

              <article className="landing-user-card">
                <div className="landing-user-card-top">
                  <span className="landing-user-role">CAREGIVER</span>
                  <span className="landing-user-arrow">→</span>
                </div>

                <div className="landing-user-visual landing-caregiver-visual">
                  <div className="landing-user-circle">
                    <span>03</span>
                  </div>
                </div>

                <h3>Stay informed</h3>

                <p>
                  Keep track of a loved one's health and receive important
                  notifications when attention is needed.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="landing-cta-section">
          <div className="landing-container">
            <div className="landing-cta-card">
              <div className="landing-cta-content">
                <span className="landing-section-label">START MONITORING</span>

                <h2>
                  Bring smarter health monitoring
                  <span> home.</span>
                </h2>

                <p>
                  Connect patients, doctors, and caregivers through one
                  intelligent health monitoring platform.
                </p>

                <Link to="/register" className="landing-primary-button landing-cta-button">
                  Create Your Account
                  <span className="landing-button-arrow">→</span>
                </Link>
              </div>

              <div className="landing-cta-decoration">
                <div className="landing-circle landing-circle-one"></div>
                <div className="landing-circle landing-circle-two"></div>
                <div className="landing-circle landing-circle-three"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="landing-footer-main">
            <div className="landing-footer-brand">
              <Link to="/" className="landing-brand">
                <span className="landing-brand-mark">+</span>
                <span>HealthMonitor</span>
              </Link>

              <p>
                Smart, connected health monitoring designed to make care more
                accessible from home.
              </p>
            </div>

            <div className="landing-footer-links">
              <div>
                <h4>Platform</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#users">For Users</a>
              </div>

              <div>
                <h4>Account</h4>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>

              <div>
                <h4>Information</h4>
                <a href="#home">About</a>
                <a href="#home">Privacy</a>
                <a href="#home">Terms</a>
              </div>
            </div>
          </div>

          <div className="landing-footer-bottom">
            <span>© 2026 HealthMonitor. All rights reserved.</span>
            <span>Smart Home Health Monitoring Platform</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;