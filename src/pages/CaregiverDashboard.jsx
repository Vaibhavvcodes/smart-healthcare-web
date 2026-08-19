import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot/Chatbot";
import "./CaregiverDashboard.css";

function CaregiverDashboard() {
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

  const caregiverName =
    user.fullName || "Caregiver";

  const caregiverInitials =
    caregiverName
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
      className={`caregiver-dashboard ${
        darkMode
          ? "dark-mode"
          : "light-mode"
      }`}
    >
      {/* NAVBAR */}

      <nav className="caregiver-navbar">
        <div className="caregiver-brand">
          <div className="caregiver-brand-mark">
            +
          </div>

          <span>
            Health<span>Monitor</span>
          </span>
        </div>

        <div className="caregiver-nav-links">
          <a
            href="/caregiver-dashboard"
            className="caregiver-nav-link active"
          >
            Dashboard
          </a>

          <a
            href="/my-patients"
            className="caregiver-nav-link"
          >
            My Patients
          </a>

          <a
            href="/care-tasks"
            className="caregiver-nav-link"
          >
            Care Tasks
          </a>

          <a
            href="/caregiver-alerts"
            className="caregiver-nav-link"
          >
            Alerts
          </a>
        </div>

        <div className="caregiver-navbar-actions">
          <button
            type="button"
            className="caregiver-theme-toggle"
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
            className="caregiver-profile-button"
          >
            <span className="caregiver-profile-avatar">
              {caregiverInitials || "CA"}
            </span>

            <span className="caregiver-profile-name">
              {caregiverName}
            </span>
          </button>
        </div>
      </nav>

      {/* MAIN */}

      <div className="caregiver-dashboard-content">
        {/* HEADER */}

        <header className="caregiver-dashboard-header">
          <div>
            <span className="caregiver-label">
              CAREGIVER DASHBOARD
            </span>

            <h1>
              {getGreeting()},{" "}
              {caregiverName}
            </h1>

            <p>
              Here's your care overview for today.
            </p>
          </div>

          <div className="caregiver-header-right">
            <div className="caregiver-date">
              <span>TODAY</span>

              <strong>{today}</strong>
            </div>

            <div className="caregiver-status">
              <span className="caregiver-status-dot"></span>

              <div>
                <span>Care Status</span>

                <strong>
                  All Stable
                </strong>
              </div>
            </div>
          </div>
        </header>

        {/* SUMMARY */}

        <section className="caregiver-summary-section">
          <div className="caregiver-section-heading">
            <div>
              <span className="caregiver-label">
                CARE OVERVIEW
              </span>

              <h2>Today's summary</h2>
            </div>
          </div>

          <div className="caregiver-summary-grid">
            <article className="caregiver-summary-card">
              <div className="caregiver-summary-icon patients">
                PT
              </div>

              <span className="caregiver-summary-title">
                Patients Under Care
              </span>

              <strong className="caregiver-summary-value">
                4
              </strong>

              <span className="caregiver-summary-description">
                All patients currently stable
              </span>
            </article>

            <article className="caregiver-summary-card">
              <div className="caregiver-summary-icon tasks">
                TK
              </div>

              <span className="caregiver-summary-title">
                Today's Tasks
              </span>

              <strong className="caregiver-summary-value">
                7
              </strong>

              <span className="caregiver-summary-description">
                4 completed, 3 remaining
              </span>
            </article>

            <article className="caregiver-summary-card">
              <div className="caregiver-summary-icon medication">
                MD
              </div>

              <span className="caregiver-summary-title">
                Medication Reminders
              </span>

              <strong className="caregiver-summary-value">
                5
              </strong>

              <span className="caregiver-summary-description">
                3 completed, 2 upcoming
              </span>
            </article>

            <article className="caregiver-summary-card">
              <div className="caregiver-summary-icon alerts">
                AL
              </div>

              <span className="caregiver-summary-title">
                Active Alerts
              </span>

              <strong className="caregiver-summary-value">
                1
              </strong>

              <span className="caregiver-summary-description">
                Requires your attention
              </span>
            </article>
          </div>
        </section>

        {/* PATIENTS + TASKS */}

        <section className="caregiver-two-column">
          <article className="caregiver-card">
            <div className="caregiver-card-heading">
              <div>
                <span className="caregiver-label">
                  PATIENT MONITORING
                </span>

                <h2>My patients</h2>
              </div>

              <a
                href="/my-patients"
                className="caregiver-view-all"
              >
                View all
              </a>
            </div>

            <div className="caregiver-patients-list">
              {[
                [
                  "RK",
                  "Rahul Kumar",
                  "Age 64 • Diabetes",
                  "Heart Rate",
                  "74 BPM",
                  "stable",
                  "Stable",
                ],
                [
                  "PS",
                  "Priya Sharma",
                  "Age 58 • Hypertension",
                  "Blood Pressure",
                  "122/78",
                  "stable",
                  "Stable",
                ],
                [
                  "AM",
                  "Amit Mehta",
                  "Age 71 • Heart Condition",
                  "Heart Rate",
                  "86 BPM",
                  "attention",
                  "Attention",
                ],
                [
                  "SN",
                  "Sneha Nair",
                  "Age 62 • Asthma",
                  "Blood Oxygen",
                  "98%",
                  "stable",
                  "Stable",
                ],
              ].map((patient) => (
                <div
                  className="caregiver-patient-row"
                  key={patient[1]}
                >
                  <div className="caregiver-patient-avatar">
                    {patient[0]}
                  </div>

                  <div className="caregiver-patient-info">
                    <strong>
                      {patient[1]}
                    </strong>

                    <span>
                      {patient[2]}
                    </span>
                  </div>

                  <div className="caregiver-patient-vitals">
                    <span>
                      {patient[3]}
                    </span>

                    <strong>
                      {patient[4]}
                    </strong>
                  </div>

                  <span
                    className={`patient-health ${patient[5]}`}
                  >
                    {patient[6]}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="caregiver-card">
            <div className="caregiver-card-heading">
              <div>
                <span className="caregiver-label">
                  CARE PLAN
                </span>

                <h2>Today's tasks</h2>
              </div>

              <a
                href="/care-tasks"
                className="caregiver-view-all"
              >
                View all
              </a>
            </div>

            <div className="caregiver-task-list">
              {[
                [
                  true,
                  "Morning medication",
                  "Rahul Kumar • 08:00 AM",
                ],
                [
                  true,
                  "Blood pressure check",
                  "Priya Sharma • 09:00 AM",
                ],
                [
                  false,
                  "Afternoon medication",
                  "Amit Mehta • 01:00 PM",
                ],
                [
                  false,
                  "Doctor appointment",
                  "Sneha Nair • 03:30 PM",
                ],
                [
                  false,
                  "Evening medication",
                  "Rahul Kumar • 07:00 PM",
                ],
              ].map((task) => (
                <div
                  className={`caregiver-task ${
                    task[0] ? "completed" : ""
                  }`}
                  key={task[1]}
                >
                  <span className="task-checkbox">
                    {task[0] ? "✓" : ""}
                  </span>

                  <div>
                    <strong>{task[1]}</strong>

                    <span>{task[2]}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* ALERTS + MEDICATION */}

        <section className="caregiver-two-column">
          <article className="caregiver-card">
            <div className="caregiver-card-heading">
              <div>
                <span className="caregiver-label">
                  IMPORTANT
                </span>

                <h2>Patient alerts</h2>
              </div>

              <a
                href="/caregiver-alerts"
                className="caregiver-view-all"
              >
                View all
              </a>
            </div>

            <div className="caregiver-alert-list">
              {[
                [
                  "critical",
                  "Amit Mehta",
                  "Heart rate higher than usual",
                  "8 min",
                ],
                [
                  "warning",
                  "Rahul Kumar",
                  "Medication reminder missed",
                  "32 min",
                ],
                [
                  "normal",
                  "Priya Sharma",
                  "Blood pressure reading normal",
                  "1 hr",
                ],
              ].map((alert) => (
                <div
                  className={`caregiver-alert-row ${alert[0]}`}
                  key={alert[1]}
                >
                  <span className="caregiver-alert-dot"></span>

                  <div>
                    <strong>
                      {alert[1]}
                    </strong>

                    <span>
                      {alert[2]}
                    </span>
                  </div>

                  <time>{alert[3]}</time>
                </div>
              ))}
            </div>
          </article>

          <article className="caregiver-card">
            <div className="caregiver-card-heading">
              <div>
                <span className="caregiver-label">
                  MEDICATION
                </span>

                <h2>
                  Upcoming medication
                </h2>
              </div>
            </div>

            <div className="medication-list">
              {[
                [
                  "01:00 PM",
                  "Metformin",
                  "Rahul Kumar • 500 mg",
                ],
                [
                  "02:00 PM",
                  "Amlodipine",
                  "Priya Sharma • 5 mg",
                ],
                [
                  "07:00 PM",
                  "Atorvastatin",
                  "Amit Mehta • 20 mg",
                ],
              ].map((medication) => (
                <div
                  className="medication-row"
                  key={medication[1]}
                >
                  <div className="medication-time">
                    {medication[0]}
                  </div>

                  <div className="medication-info">
                    <strong>
                      {medication[1]}
                    </strong>

                    <span>
                      {medication[2]}
                    </span>
                  </div>

                  <span className="medication-status upcoming">
                    Upcoming
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* DAILY PROGRESS */}

        <section className="caregiver-card caregiver-progress-card">
          <div className="caregiver-card-heading">
            <div>
              <span className="caregiver-label">
                DAILY PROGRESS
              </span>

              <h2>Care activities</h2>
            </div>

            <span className="caregiver-progress-date">
              {today}
            </span>
          </div>

          <div className="caregiver-progress-grid">
            {[
              ["Medication", "60%", "60%", "3 of 5 completed"],
              ["Health checks", "75%", "75%", "3 of 4 completed"],
              ["Care tasks", "57%", "57%", "4 of 7 completed"],
            ].map((progress, index) => (
              <div
                className="caregiver-progress-item"
                key={progress[0]}
              >
                <div className="caregiver-progress-top">
                  <span>{progress[0]}</span>

                  <strong>{progress[1]}</strong>
                </div>

                <div className="caregiver-progress-track">
                  <span
                    className={
                      index === 0
                        ? "progress-green"
                        : index === 1
                        ? "progress-blue"
                        : "progress-orange"
                    }
                    style={{
                      width: progress[2],
                    }}
                  ></span>
                </div>

                <small>{progress[3]}</small>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Chatbot role="caregiver" />
    </main>
  );
}

export default CaregiverDashboard;