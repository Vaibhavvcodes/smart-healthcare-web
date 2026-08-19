import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot/Chatbot";
import "./DoctorDashboard.css";

function DoctorDashboard() {
  const [darkMode, setDarkMode] = useState(
    () =>
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
  );

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

  const doctorName = user.fullName || "Doctor";

  const doctorDisplayName =
    doctorName.toLowerCase().startsWith("dr.")
      ? doctorName
      : `Dr. ${doctorName}`;

  const doctorInitials = doctorName
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
      className={`doctor-dashboard ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* NAVBAR */}

      <nav className="doctor-navbar">
        <div className="doctor-brand">
          <div className="doctor-brand-mark">
            +
          </div>

          <span>
            Health<span>Monitor</span>
          </span>
        </div>

        <div className="doctor-nav-links">
          <a
            href="/doctor-dashboard"
            className="doctor-nav-link active"
          >
            Dashboard
          </a>

          <a
            href="/patients"
            className="doctor-nav-link"
          >
            Patients
          </a>

          <a
            href="/appointments"
            className="doctor-nav-link"
          >
            Appointments
          </a>

          <a
            href="/doctor-alerts"
            className="doctor-nav-link"
          >
            Alerts
          </a>
        </div>

        <div className="doctor-navbar-actions">
          <button
            type="button"
            className="doctor-theme-toggle"
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
            className="doctor-profile-button"
          >
            <span className="doctor-profile-avatar">
              {doctorInitials || "DR"}
            </span>

            <span className="doctor-profile-name">
              {doctorDisplayName}
            </span>
          </button>
        </div>
      </nav>

      {/* MAIN */}

      <div className="doctor-dashboard-content">
        {/* HEADER */}

        <header className="doctor-dashboard-header">
          <div>
            <span className="doctor-label">
              DOCTOR DASHBOARD
            </span>

            <h1>
              {getGreeting()},{" "}
              {doctorDisplayName}
            </h1>

            <p>
              Here's your practice overview for
              today.
            </p>
          </div>

          <div className="doctor-header-right">
            <div className="doctor-date">
              <span>TODAY</span>

              <strong>{today}</strong>
            </div>

            <div className="doctor-status">
              <span className="doctor-status-dot"></span>

              <div>
                <span>Availability</span>

                <strong>Available</strong>
              </div>
            </div>
          </div>
        </header>

        {/* STATISTICS */}

        <section className="doctor-stats-section">
          <div className="doctor-section-heading">
            <div>
              <span className="doctor-label">
                PRACTICE OVERVIEW
              </span>

              <h2>Today's summary</h2>
            </div>
          </div>

          <div className="doctor-stats-grid">
            <article className="doctor-stat-card">
              <div className="doctor-stat-icon appointments">
                AP
              </div>

              <span className="doctor-stat-title">
                Today's Appointments
              </span>

              <strong className="doctor-stat-value">
                8
              </strong>

              <span className="doctor-stat-description">
                3 appointments remaining
              </span>
            </article>

            <article className="doctor-stat-card">
              <div className="doctor-stat-icon patients">
                PT
              </div>

              <span className="doctor-stat-title">
                Total Patients
              </span>

              <strong className="doctor-stat-value">
                124
              </strong>

              <span className="doctor-stat-description">
                6 new patients this week
              </span>
            </article>

            <article className="doctor-stat-card">
              <div className="doctor-stat-icon consultations">
                CO
              </div>

              <span className="doctor-stat-title">
                Pending Consultations
              </span>

              <strong className="doctor-stat-value">
                5
              </strong>

              <span className="doctor-stat-description">
                Require your attention
              </span>
            </article>

            <article className="doctor-stat-card">
              <div className="doctor-stat-icon alerts">
                AL
              </div>

              <span className="doctor-stat-title">
                Active Alerts
              </span>

              <strong className="doctor-stat-value">
                2
              </strong>

              <span className="doctor-stat-description">
                1 requires immediate review
              </span>
            </article>
          </div>
        </section>

        {/* APPOINTMENTS + ALERTS */}

        <section className="doctor-two-column">
          <article className="doctor-card">
            <div className="doctor-card-heading">
              <div>
                <span className="doctor-label">
                  SCHEDULE
                </span>

                <h2>
                  Today's appointments
                </h2>
              </div>

              <a
                href="/appointments"
                className="doctor-view-all"
              >
                View all
              </a>
            </div>

            <div className="appointments-list">
              <div className="appointment-row">
                <div className="appointment-time">
                  <strong>10:00</strong>
                  <span>AM</span>
                </div>

                <div className="patient-avatar">
                  RK
                </div>

                <div className="appointment-patient">
                  <strong>
                    Rahul Kumar
                  </strong>

                  <span>
                    General Consultation
                  </span>
                </div>

                <span className="appointment-status confirmed">
                  Confirmed
                </span>
              </div>

              <div className="appointment-row">
                <div className="appointment-time">
                  <strong>11:30</strong>
                  <span>AM</span>
                </div>

                <div className="patient-avatar">
                  PS
                </div>

                <div className="appointment-patient">
                  <strong>
                    Priya Sharma
                  </strong>

                  <span>
                    Follow-up
                  </span>
                </div>

                <span className="appointment-status waiting">
                  Waiting
                </span>
              </div>

              <div className="appointment-row">
                <div className="appointment-time">
                  <strong>01:00</strong>
                  <span>PM</span>
                </div>

                <div className="patient-avatar">
                  AM
                </div>

                <div className="appointment-patient">
                  <strong>
                    Amit Mehta
                  </strong>

                  <span>
                    Blood Pressure Review
                  </span>
                </div>

                <span className="appointment-status confirmed">
                  Confirmed
                </span>
              </div>

              <div className="appointment-row">
                <div className="appointment-time">
                  <strong>03:30</strong>
                  <span>PM</span>
                </div>

                <div className="patient-avatar">
                  SN
                </div>

                <div className="appointment-patient">
                  <strong>
                    Sneha Nair
                  </strong>

                  <span>
                    Routine Check-up
                  </span>
                </div>

                <span className="appointment-status confirmed">
                  Confirmed
                </span>
              </div>
            </div>
          </article>

          <article className="doctor-card">
            <div className="doctor-card-heading">
              <div>
                <span className="doctor-label">
                  PATIENT MONITORING
                </span>

                <h2>Patient alerts</h2>
              </div>

              <a
                href="/doctor-alerts"
                className="doctor-view-all"
              >
                View all
              </a>
            </div>

            <div className="doctor-alert-list">
              <div className="doctor-alert-row critical">
                <span className="doctor-alert-dot"></span>

                <div>
                  <strong>
                    Amit Mehta
                  </strong>

                  <span>
                    Blood pressure reading above
                    normal
                  </span>
                </div>

                <time>8 min</time>
              </div>

              <div className="doctor-alert-row warning">
                <span className="doctor-alert-dot"></span>

                <div>
                  <strong>
                    Rahul Kumar
                  </strong>

                  <span>
                    Missed medication reminder
                  </span>
                </div>

                <time>32 min</time>
              </div>

              <div className="doctor-alert-row normal">
                <span className="doctor-alert-dot"></span>

                <div>
                  <strong>
                    Priya Sharma
                  </strong>

                  <span>
                    Daily monitoring completed
                  </span>
                </div>

                <time>1 hr</time>
              </div>

              <div className="doctor-alert-row normal">
                <span className="doctor-alert-dot"></span>

                <div>
                  <strong>
                    Sneha Nair
                  </strong>

                  <span>
                    Vital readings within normal
                    range
                  </span>
                </div>

                <time>2 hrs</time>
              </div>
            </div>
          </article>
        </section>

        {/* ACTIVITY */}

        <section className="doctor-card doctor-activity-card">
          <div className="doctor-card-heading">
            <div>
              <span className="doctor-label">
                RECENT ACTIVITY
              </span>

              <h2>Practice activity</h2>
            </div>
          </div>

          <div className="doctor-activity-grid">
            <div className="doctor-activity-item">
              <span className="activity-number">
                12
              </span>

              <div>
                <strong>
                  Consultations completed
                </strong>

                <span>Today</span>
              </div>
            </div>

            <div className="doctor-activity-item">
              <span className="activity-number">
                7
              </span>

              <div>
                <strong>
                  Prescriptions issued
                </strong>

                <span>Today</span>
              </div>
            </div>

            <div className="doctor-activity-item">
              <span className="activity-number">
                4
              </span>

              <div>
                <strong>
                  Reports reviewed
                </strong>

                <span>Today</span>
              </div>
            </div>

            <div className="doctor-activity-item">
              <span className="activity-number">
                96%
              </span>

              <div>
                <strong>
                  Patient follow-up rate
                </strong>

                <span>This month</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Chatbot role="doctor" />
    </main>
  );
}

export default DoctorDashboard;