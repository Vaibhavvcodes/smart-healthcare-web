import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log({
      userType,
      email,
      password,
      rememberMe,
    });

    if (userType === "patient") {
      navigate("/dashboard");
    } else if (userType === "doctor") {
      navigate("/doctor-dashboard");
    } else {
      navigate("/caregiver-dashboard");
    }
  };

  return (
    <main className="login-page">
      <section className="login-info">
        <Link to="/" className="login-brand">
          <span className="brand-mark">+</span>
          <span>HealthMonitor</span>
        </Link>

        <div className="login-info-content">
          <span className="section-label">
            SMART HEALTH MONITORING
          </span>

          <h1>
            Healthcare that
            <span> stays connected.</span>
          </h1>

          <p>
            Monitor health, stay informed, and keep patients, doctors, and
            caregivers connected through one secure platform.
          </p>
        </div>

        <div className="login-info-footer">
          <span>Secure health monitoring</span>
          <span>Real-time insights</span>
          <span>Connected care</span>
        </div>
      </section>

      <section className="login-form-section">
        <div className="login-form-container">
          <div className="login-heading">
            <span className="section-label">WELCOME BACK</span>

            <h2>Sign in to your account</h2>

            <p>
              Enter your credentials to access your HealthMonitor dashboard.
            </p>
          </div>

          <form
            className="login-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="userType">Account type</label>

              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(event) => setUserType(event.target.value)}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="caregiver">
                  Family / Caregiver
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <span className="form-error">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="login-submit">
              Sign In
              <span>→</span>
            </button>
          </form>

          <div className="register-prompt">
            <span>Don't have an account?</span>

            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;