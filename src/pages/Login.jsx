// calling Login.css
import { useState } from "react";
import "./Login.css";

// Login page component
function Login() {
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
      newErrors.password = "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <main className="login-page">
      {/* Left side - Healthcare introduction */}
      <section className="login-info">
        <div className="login-brand">
          <span className="brand-mark">+</span>
          <span>HealthMonitor</span>
        </div>

        <div className="login-info-content">
          <span className="section-label">SMART HEALTH MONITORING</span>

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

      {/* Right side - Login form */}
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
            onSubmit={(event) => {
              event.preventDefault();

              const isValid = validateForm();

              if (isValid) {
                console.log({
                  userType,
                  email,
                  password,
                  rememberMe,
                });
              }
            }}
          >
            {/* User type */}
            <div className="form-group">
              <label htmlFor="userType">Account type</label>

              <select id="userType" name="userType" defaultValue="patient">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="caregiver">Family / Caregiver</option>
              </select>
            </div>

            {/* Email */}
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
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <a href="/forgot-password">Forgot password?</a>
              </div>

              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && (
                  <span className="form-error">{errors.password}</span>
                )}

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" name="rememberMe" />
                <span>Remember me</span>
              </label>
            </div>

            {/* Login button */}
            <button type="submit" className="login-submit">
              Sign In
              <span>→</span>
            </button>
          </form>

          {/* Register link */}
          <div className="register-prompt">
            <span>Don't have an account?</span>

            <a href="/register">Create an account</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
