import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot/Chatbot";
import "./PatientDashboard.css";

function PatientDashboard() {
  const [darkMode, setDarkMode] = useState(
    () =>
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
  );

  const [trendPeriod, setTrendPeriod] =
    useState("Day");

  const [user] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("healthMonitorUser")
        ) || {}
      );
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleThemeChange
      );
    };
  }, []);

  const patientName =
    user.fullName || "Patient";

  const patientInitials =
    patientName
      .split(" ")
      .filter(Boolean)
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";

    return "Good night";
  };

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main
      className={`patient-dashboard ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* NAVBAR */}

      <nav className="dashboard-navbar">
        <div className="brand">
          <div className="brand-mark">+</div>

          <span>
            Health<span>Monitor</span>
          </span>
        </div>

        <div className="nav-links">
          <a
            href="/dashboard"
            className="nav-link active"
          >
            Dashboard
          </a>

          <a
            href="/records"
            className="nav-link"
          >
            Records
          </a>

          <a
            href="/alerts"
            className="nav-link"
          >
            Alerts
          </a>

          <a
            href="/settings"
            className="nav-link"
          >
            Settings
          </a>
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            <span
              className={
                !darkMode ? "selected" : ""
              }
            >
              Light
            </span>

            <span
              className={
                darkMode ? "selected" : ""
              }
            >
              Dark
            </span>
          </button>

          <button
            type="button"
            className="profile-button"
          >
            <span className="profile-avatar">
              {patientInitials || "PT"}
            </span>

            <span className="profile-name">
              {patientName}
            </span>
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* HEADER */}

        <header className="dashboard-header">
          <div>
            <span className="dashboard-label">
              PATIENT DASHBOARD
            </span>

            <h1>
              {getGreeting()}, {patientName}
            </h1>

            <p>
              Here's your health overview for
              today.
            </p>
          </div>

          <div className="dashboard-header-right">
            <div className="today-date">
              <span>TODAY</span>

              <strong>{today}</strong>
            </div>

            <div className="overall-status">
              <span className="status-dot"></span>

              <div>
                <span>Overall Health</span>

                <strong>Stable</strong>
              </div>
            </div>
          </div>
        </header>

        {/* VITALS */}

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <span className="dashboard-label">
                CURRENT VITALS
              </span>

              <h2>Health measurements</h2>
            </div>

            <span className="last-updated">
              Last updated 2 minutes ago
            </span>
          </div>

          <div className="vitals-grid">
            <article className="vital-card">
              <div className="vital-top">
                <div className="vital-icon heart-icon">
                  HR
                </div>

                <span className="vital-badge">
                  Normal
                </span>
              </div>

              <h3>Heart Rate</h3>

              <div className="vital-reading">
                <strong>72</strong>
                <span>BPM</span>
              </div>

              <div className="vital-footer">
                <span>Resting</span>
                <span>60–100 BPM</span>
              </div>
            </article>

            <article className="vital-card">
              <div className="vital-top">
                <div className="vital-icon oxygen-icon">
                  O₂
                </div>

                <span className="vital-badge">
                  Normal
                </span>
              </div>

              <h3>Blood Oxygen</h3>

              <div className="vital-reading">
                <strong>98</strong>
                <span>%</span>
              </div>

              <div className="vital-footer">
                <span>SpO₂</span>
                <span>95–100%</span>
              </div>
            </article>

            <article className="vital-card">
              <div className="vital-top">
                <div className="vital-icon pressure-icon">
                  BP
                </div>

                <span className="vital-badge">
                  Normal
                </span>
              </div>

              <h3>Blood Pressure</h3>

              <div className="vital-reading">
                <strong>118/76</strong>
                <span>mmHg</span>
              </div>

              <div className="vital-footer">
                <span>Current reading</span>
                <span>Normal range</span>
              </div>
            </article>

            <article className="vital-card">
              <div className="vital-top">
                <div className="vital-icon temperature-icon">
                  °C
                </div>

                <span className="vital-badge">
                  Normal
                </span>
              </div>

              <h3>Temperature</h3>

              <div className="vital-reading">
                <strong>36.7</strong>
                <span>°C</span>
              </div>

              <div className="vital-footer">
                <span>Body temperature</span>
                <span>36.1–37.2°C</span>
              </div>
            </article>
          </div>
        </section>

        {/* HEALTH + ALERTS */}

        <section className="two-column-section">
          <article className="dashboard-card">
            <div className="card-heading">
              <div>
                <span className="dashboard-label">
                  HEALTH STATUS
                </span>

                <h2>Overall health</h2>
              </div>

              <span className="stable-badge">
                Stable
              </span>
            </div>

            <div className="health-content">
              <div className="score-ring">
                <div>
                  <strong>92</strong>
                  <span>/100</span>
                </div>
              </div>

              <div className="health-message">
                <h3>Looking good</h3>

                <p>
                  Your current vital readings are
                  within their expected ranges.
                </p>
              </div>

              <div className="health-details">
                <div>
                  <span>Vitals checked</span>
                  <strong>4 / 4</strong>
                </div>

                <div>
                  <span>Last check</span>
                  <strong>2 min ago</strong>
                </div>

                <div>
                  <span>Current status</span>
                  <strong>Stable</strong>
                </div>
              </div>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="card-heading">
              <div>
                <span className="dashboard-label">
                  RECENT ACTIVITY
                </span>

                <h2>Recent alerts</h2>
              </div>

              <a
                href="/alerts"
                className="view-all"
              >
                View all
              </a>
            </div>

            <div className="alerts-list">
              <div className="alert-row">
                <span className="alert-marker normal"></span>

                <div>
                  <strong>
                    Vitals within normal range
                  </strong>

                  <span>
                    All monitored vitals are stable.
                  </span>
                </div>

                <time>2 min ago</time>
              </div>

              <div className="alert-row">
                <span className="alert-marker info"></span>

                <div>
                  <strong>
                    Daily monitoring completed
                  </strong>

                  <span>
                    Your scheduled health check was
                    recorded.
                  </span>
                </div>

                <time>1 hr ago</time>
              </div>

              <div className="alert-row">
                <span className="alert-marker info"></span>

                <div>
                  <strong>
                    Activity goal updated
                  </strong>

                  <span>
                    You have reached 68% of today's
                    target.
                  </span>
                </div>

                <time>3 hrs ago</time>
              </div>
            </div>
          </article>
        </section>

        {/* TRENDS + ACTIVITY */}

        <section className="two-column-section">
          <article className="dashboard-card trends-card">
            <div className="card-heading">
              <div>
                <span className="dashboard-label">
                  HEALTH TRENDS
                </span>

                <h2>
                  Vital readings over time
                </h2>
              </div>

              <div className="period-selector">
                {["Day", "Week", "Month"].map(
                  (period) => (
                    <button
                      key={period}
                      type="button"
                      className={
                        trendPeriod === period
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setTrendPeriod(period)
                      }
                    >
                      {period}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="chart-wrapper">
              <div className="chart-y-labels">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="chart-container">
                <div className="chart-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <svg
                  viewBox="0 0 800 260"
                  preserveAspectRatio="none"
                  className="health-chart"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#0b9a91"
                        stopOpacity="0.18"
                      />

                      <stop
                        offset="100%"
                        stopColor="#0b9a91"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <polygon
                    points="
                      0,170
                      80,125
                      160,155
                      240,135
                      320,100
                      400,125
                      480,92
                      560,112
                      640,70
                      720,105
                      800,75
                      800,260
                      0,260
                    "
                    fill="url(#chartGradient)"
                  />

                  <polyline
                    points="
                      0,170
                      80,125
                      160,155
                      240,135
                      320,100
                      400,125
                      480,92
                      560,112
                      640,70
                      720,105
                      800,75
                    "
                    fill="none"
                    stroke="#0b9a91"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="chart-x-labels">
                  <span>6 AM</span>
                  <span>8 AM</span>
                  <span>10 AM</span>
                  <span>12 PM</span>
                  <span>2 PM</span>
                  <span>4 PM</span>
                  <span>6 PM</span>
                  <span>8 PM</span>
                </div>
              </div>
            </div>

            <div className="chart-footer">
              <span>
                <i></i>
                Heart Rate
              </span>

              <span>
                Average: <strong>72 BPM</strong>
              </span>
            </div>
          </article>

          <article className="dashboard-card">
            <div className="card-heading">
              <div>
                <span className="dashboard-label">
                  DAILY ACTIVITY
                </span>

                <h2>Today's activity</h2>
              </div>

              <span className="activity-date">
                {today}
              </span>
            </div>

            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-name">
                  <span className="activity-icon steps">
                    ST
                  </span>

                  <strong>Steps</strong>
                </div>

                <div className="activity-number">
                  <strong>6,842</strong>
                  <span>/ 10,000</span>
                </div>

                <div className="progress-track">
                  <span
                    className="progress-green"
                    style={{
                      width: "68.42%",
                    }}
                  ></span>
                </div>

                <div className="activity-meta">
                  <span>
                    68% of daily goal
                  </span>

                  <strong>
                    3,158 remaining
                  </strong>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-name">
                  <span className="activity-icon time">
                    AT
                  </span>

                  <strong>
                    Active Time
                  </strong>
                </div>

                <div className="activity-number">
                  <strong>48</strong>
                  <span>/ 60 min</span>
                </div>

                <div className="progress-track">
                  <span
                    className="progress-blue"
                    style={{
                      width: "80%",
                    }}
                  ></span>
                </div>

                <div className="activity-meta">
                  <span>
                    80% of daily goal
                  </span>

                  <strong>
                    12 min remaining
                  </strong>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-name">
                  <span className="activity-icon calories">
                    CL
                  </span>

                  <strong>Calories</strong>
                </div>

                <div className="activity-number">
                  <strong>386</strong>
                  <span>/ 600 kcal</span>
                </div>

                <div className="progress-track">
                  <span
                    className="progress-orange"
                    style={{
                      width: "64%",
                    }}
                  ></span>
                </div>

                <div className="activity-meta">
                  <span>
                    64% of daily goal
                  </span>

                  <strong>
                    214 remaining
                  </strong>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      <Chatbot role="patient" />
    </main>
  );
}

export default PatientDashboard;