import "../App.css";

function LandingPage() {
  return (
    <div className="app">
      {/* ==================== NAVBAR ==================== */}
      <header className="navbar">
        <div className="container navbar-container">
          <a href="#home" className="brand">
            <span className="brand-mark">+</span>
            <span>HealthMonitor</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#users">For Users</a>
          </nav>

          <div className="nav-actions">
            <a href="/login" className="login-link">
              Login
            </a>

            <a href="/register" className="primary-button nav-button">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section id="home" className="hero">
          <div className="hero-shape hero-shape-one"></div>
          <div className="hero-shape hero-shape-two"></div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot"></span>
                Smart Home Health Monitoring
              </div>

              <h1>
                Better health monitoring,
                <span> right from home.</span>
              </h1>

              <p className="hero-description">
                Monitor vital health data, detect unusual changes, and keep
                patients, doctors, and caregivers connected through one
                intelligent healthcare platform.
              </p>

              <div className="hero-actions">
                <a href="/register" className="primary-button">
                  Get Started
                  <span className="button-arrow">→</span>
                </a>

                <a href="#how-it-works" className="secondary-button">
                  Explore Platform
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <strong>24/7</strong>
                  <span>Monitoring</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>Real-time</strong>
                  <span>Health Data</span>
                </div>

                <div className="trust-divider"></div>

                <div className="trust-item">
                  <strong>3-way</strong>
                  <span>Care Access</span>
                </div>
              </div>
            </div>

            {/* ==================== DASHBOARD PREVIEW ==================== */}
            <div className="hero-visual">
              <div className="dashboard-preview">
                <div className="preview-header">
                  <div>
                    <span className="preview-label">Health Overview</span>
                    <h3>Today's Summary</h3>
                  </div>

                  <span className="health-status">
                    <span></span>
                    Stable
                  </span>
                </div>

                <div className="vitals-grid">
                  <div className="vital-card heart-card">
                    <div className="vital-top">
                      <span className="vital-icon">HR</span>
                      <span className="vital-change">+2%</span>
                    </div>

                    <span className="vital-name">Heart Rate</span>

                    <div className="vital-value">
                      72 <small>BPM</small>
                    </div>

                    <div className="mini-chart">
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

                  <div className="vital-card">
                    <div className="vital-top">
                      <span className="vital-icon">O₂</span>
                      <span className="vital-normal">Normal</span>
                    </div>

                    <span className="vital-name">Blood Oxygen</span>

                    <div className="vital-value">
                      98 <small>%</small>
                    </div>

                    <div className="progress-line">
                      <span style={{ width: "98%" }}></span>
                    </div>
                  </div>

                  <div className="vital-card">
                    <div className="vital-top">
                      <span className="vital-icon">BP</span>
                      <span className="vital-normal">Normal</span>
                    </div>

                    <span className="vital-name">Blood Pressure</span>

                    <div className="vital-value">
                      118/76 <small>mmHg</small>
                    </div>

                    <div className="progress-line">
                      <span style={{ width: "72%" }}></span>
                    </div>
                  </div>

                  <div className="vital-card">
                    <div className="vital-top">
                      <span className="vital-icon">°C</span>
                      <span className="vital-normal">Normal</span>
                    </div>

                    <span className="vital-name">Temperature</span>

                    <div className="vital-value">
                      36.7 <small>°C</small>
                    </div>

                    <div className="progress-line">
                      <span style={{ width: "65%" }}></span>
                    </div>
                  </div>
                </div>

                <div className="preview-bottom">
                  <div>
                    <span className="preview-label">Activity</span>
                    <strong>6,842 steps</strong>
                  </div>

                  <div className="activity-bars">
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

              <div className="floating-alert">
                <div className="alert-indicator"></div>

                <div>
                  <span>Monitoring active</span>
                  <strong>All vitals within range</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== HOW IT WORKS ==================== */}
        <section id="how-it-works" className="how-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">HOW IT WORKS</span>

              <h2>
                Connected care, <span>made simple.</span>
              </h2>

              <p>
                Health data moves securely from connected devices to the
                people who need it, helping everyone stay informed.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <div className="process-number">01</div>

                <div className="process-icon device-icon">
                  <div className="device-screen"></div>
                </div>

                <h3>Collect</h3>

                <p>
                  Wearables and home sensors collect important health
                  information throughout the day.
                </p>
              </div>

              <div className="process-connector"></div>

              <div className="process-card">
                <div className="process-number">02</div>

                <div className="process-icon monitor-icon">
                  <div className="monitor-line"></div>
                </div>

                <h3>Monitor</h3>

                <p>
                  The platform analyzes vital readings and tracks health
                  patterns over time.
                </p>
              </div>

              <div className="process-connector"></div>

              <div className="process-card">
                <div className="process-number">03</div>

                <div className="process-icon alert-icon">
                  <span></span>
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
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">PLATFORM FEATURES</span>

              <h2>
                Everything you need to stay
                <span> connected to care.</span>
              </h2>

              <p>
                A unified platform designed to bring patients, doctors, and
                caregivers together around meaningful health information.
              </p>
            </div>

            <div className="features-grid">
              <article className="feature-card feature-large">
                <div className="feature-icon">
                  <span className="pulse-line"></span>
                </div>

                <div className="feature-content">
                  <span className="feature-number">01</span>

                  <h3>Real-time Vital Monitoring</h3>

                  <p>
                    Track heart rate, blood pressure, blood oxygen,
                    temperature, activity, and other health measurements from
                    one dashboard.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <div className="feature-icon chart-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="feature-number">02</span>

                <h3>Health Trends</h3>

                <p>
                  Understand daily, weekly, and monthly changes through clear
                  health trends and visual data.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon alert-feature-icon">
                  <span>!</span>
                </div>

                <span className="feature-number">03</span>

                <h3>Smart Alerts</h3>

                <p>
                  Identify abnormal readings and important events that may
                  require attention.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon doctor-icon">
                  <span></span>
                </div>

                <span className="feature-number">04</span>

                <h3>Doctor Access</h3>

                <p>
                  Give healthcare professionals access to relevant patient
                  information for better monitoring.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon family-icon">
                  <span></span>
                  <span></span>
                </div>

                <span className="feature-number">05</span>

                <h3>Family & Caregiver Access</h3>

                <p>
                  Keep trusted family members and caregivers informed about
                  the patient's current health status.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== USER TYPES ==================== */}
        <section id="users" className="users-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">
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

            <div className="users-grid">
              <article className="user-card">
                <div className="user-card-top">
                  <span className="user-role">PATIENT</span>
                  <span className="user-arrow">→</span>
                </div>

                <div className="user-visual patient-visual">
                  <div className="user-circle">
                    <span>01</span>
                  </div>
                </div>

                <h3>Understand your health</h3>

                <p>
                  View your vital signs, health history, trends, and important
                  alerts from a single dashboard.
                </p>
              </article>

              <article className="user-card featured-user">
                <div className="user-card-top">
                  <span className="user-role">DOCTOR</span>
                  <span className="user-arrow">→</span>
                </div>

                <div className="user-visual doctor-visual">
                  <div className="user-circle">
                    <span>02</span>
                  </div>
                </div>

                <h3>Monitor patients remotely</h3>

                <p>
                  Access patient vitals, health trends, medical records, and
                  important alerts.
                </p>
              </article>

              <article className="user-card">
                <div className="user-card-top">
                  <span className="user-role">CAREGIVER</span>
                  <span className="user-arrow">→</span>
                </div>

                <div className="user-visual caregiver-visual">
                  <div className="user-circle">
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
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <span className="section-label">START MONITORING</span>

                <h2>
                  Bring smarter health monitoring
                  <span> home.</span>
                </h2>

                <p>
                  Connect patients, doctors, and caregivers through one
                  intelligent health monitoring platform.
                </p>

                <a href="/register" className="primary-button cta-button">
                  Create Your Account
                  <span className="button-arrow">→</span>
                </a>
              </div>

              <div className="cta-decoration">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="brand">
                <span className="brand-mark">+</span>
                <span>HealthMonitor</span>
              </a>

              <p>
                Smart, connected health monitoring designed to make care more
                accessible from home.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <h4>Platform</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#users">For Users</a>
              </div>

              <div>
                <h4>Account</h4>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>

              <div>
                <h4>Information</h4>
                <a href="#home">About</a>
                <a href="#home">Privacy</a>
                <a href="#home">Terms</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 HealthMonitor. All rights reserved.</span>
            <span>Smart Home Health Monitoring Platform</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;