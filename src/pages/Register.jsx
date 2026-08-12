import { useState } from "react";
import "./Register.css";

function Register() {
  const [userType, setUserType] = useState("patient");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [hospital, setHospital] = useState("");
  const [experience, setExperience] = useState("");

  const [relationship, setRelationship] = useState("");
  const [patientId, setPatientId] = useState("");

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Common field validation
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Patient validation
    if (userType === "patient") {
      if (!dateOfBirth) {
        newErrors.dateOfBirth = "Date of birth is required.";
      }

      if (!gender) {
        newErrors.gender = "Please select your gender.";
      }

      if (!emergencyContact.trim()) {
        newErrors.emergencyContact = "Emergency contact is required.";
      } else if (!/^\d{10}$/.test(emergencyContact.replace(/\D/g, ""))) {
        newErrors.emergencyContact =
          "Enter a valid 10-digit emergency contact.";
      }
    }

    // Doctor validation
    if (userType === "doctor") {
      if (!registrationNumber.trim()) {
        newErrors.registrationNumber =
          "Medical registration number is required.";
      }

      if (!specialization.trim()) {
        newErrors.specialization = "Specialization is required.";
      }

      if (!hospital.trim()) {
        newErrors.hospital = "Hospital or clinic name is required.";
      }

      if (experience === "") {
        newErrors.experience = "Years of experience is required.";
      } else if (Number(experience) < 0) {
        newErrors.experience = "Experience cannot be negative.";
      }
    }

    // Caregiver validation
    if (userType === "caregiver") {
      if (!relationship) {
        newErrors.relationship =
          "Please select your relationship with the patient.";
      }

      if (!patientId.trim()) {
        newErrors.patientId = "Patient ID or invitation code is required.";
      }
    }

    // Terms validation
    if (!agreeToTerms) {
      newErrors.agreeToTerms =
        "You must agree to the Terms of Service and Privacy Policy.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <main className="register-page">
      {/* Left side - Healthcare introduction */}
      <section className="register-info">
        <div className="register-brand">
          <span className="brand-mark">+</span>
          <span>HealthMonitor</span>
        </div>

        <div className="register-info-content">
          <span className="section-label">JOIN HEALTHMONITOR</span>

          <h1>
            Start your journey toward
            <span> connected care.</span>
          </h1>

          <p>
            Create your account and become part of a connected healthcare
            platform designed for patients, doctors, and caregivers.
          </p>
        </div>

        <div className="register-info-footer">
          <span>Secure health monitoring</span>
          <span>Connected care</span>
          <span>Real-time insights</span>
        </div>
      </section>

      {/* Right side - Registration form */}
      <section className="register-form-section">
        <div className="register-form-container">
          <div className="register-heading">
            <span className="section-label">CREATE ACCOUNT</span>

            <h2>Get started with HealthMonitor</h2>

            <p>
              Create your account to access the healthcare monitoring platform.
            </p>
          </div>

          <form
            className="register-form"
            onSubmit={(event) => {
              event.preventDefault();

              const isValid = validateForm();

              if (isValid) {
                console.log({
                  userType,
                  fullName,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  dateOfBirth,
                  gender,
                  emergencyContact,
                  registrationNumber,
                  specialization,
                  hospital,
                  experience,
                  relationship,
                  patientId,
                  agreeToTerms,
                });
              }
            }}
          >
            {/* Account type */}
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
                <option value="caregiver">Family / Caregiver</option>
              </select>
            </div>

            {/* Full name */}
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />

              {errors.fullName && (
                <span className="form-error">{errors.fullName}</span>
              )}
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

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />

              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
            </div>

            {/* Patient-specific fields */}
            {userType === "patient" && (
              <>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of birth</label>

                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(event) => setDateOfBirth(event.target.value)}
                  />

                  {errors.dateOfBirth && (
                    <span className="form-error">{errors.dateOfBirth}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>

                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>

                  {errors.gender && (
                    <span className="form-error">{errors.gender}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency contact</label>

                  <input
                    type="tel"
                    id="emergencyContact"
                    name="emergencyContact"
                    placeholder="Enter emergency contact number"
                    value={emergencyContact}
                    onChange={(event) =>
                      setEmergencyContact(event.target.value)
                    }
                  />

                  {errors.emergencyContact && (
                    <span className="form-error">
                      {errors.emergencyContact}
                    </span>
                  )}
                </div>
              </>
            )}

            {/* Doctor-specific fields */}
            {userType === "doctor" && (
              <>
                <div className="form-group">
                  <label htmlFor="registrationNumber">
                    Medical registration number
                  </label>

                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    placeholder="Enter registration number"
                    value={registrationNumber}
                    onChange={(event) =>
                      setRegistrationNumber(event.target.value)
                    }
                  />

                  {errors.registrationNumber && (
                    <span className="form-error">
                      {errors.registrationNumber}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="specialization">Specialization</label>

                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    placeholder="e.g. Cardiology"
                    value={specialization}
                    onChange={(event) => setSpecialization(event.target.value)}
                  />

                  {errors.specialization && (
                    <span className="form-error">{errors.specialization}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="hospital">Hospital / Clinic</label>

                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    placeholder="Enter hospital or clinic name"
                    value={hospital}
                    onChange={(event) => setHospital(event.target.value)}
                  />

                  {errors.hospital && (
                    <span className="form-error">{errors.hospital}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Years of experience</label>

                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    min="0"
                    placeholder="Enter years of experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                  />

                  {errors.experience && (
                    <span className="form-error">{errors.experience}</span>
                  )}
                </div>
              </>
            )}

            {/* Caregiver-specific fields */}
            {userType === "caregiver" && (
              <>
                <div className="form-group">
                  <label htmlFor="relationship">
                    Relationship with patient
                  </label>

                  <select
                    id="relationship"
                    name="relationship"
                    value={relationship}
                    onChange={(event) => setRelationship(event.target.value)}
                  >
                    <option value="" disabled>
                      Select relationship
                    </option>

                    <option value="parent">Parent</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="sibling">Sibling</option>
                    <option value="relative">Relative</option>
                    <option value="professional-caregiver">
                      Professional Caregiver
                    </option>
                    <option value="other">Other</option>
                  </select>

                  {errors.relationship && (
                    <span className="form-error">{errors.relationship}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="patientId">
                    Patient ID / Invitation Code
                  </label>

                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    placeholder="Enter patient ID or invitation code"
                    value={patientId}
                    onChange={(event) => setPatientId(event.target.value)}
                  />

                  {errors.patientId && (
                    <span className="form-error">{errors.patientId}</span>
                  )}
                </div>
              </>
            )}

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="register-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                {errors.password && (
                  <span className="form-error">{errors.password}</span>
                )}

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>

              <div className="register-password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />

                {errors.confirmPassword && (
                  <span className="form-error">{errors.confirmPassword}</span>
                )}

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="terms-group">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={(event) => setAgreeToTerms(event.target.checked)}
                />

                {errors.agreeToTerms && (
                  <span className="form-error">{errors.agreeToTerms}</span>
                )}

                <span>
                  I agree to the <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="register-submit">
              Create Account
              <span>→</span>
            </button>
          </form>

          {/* Login link */}
          <div className="login-prompt">
            <span>Already have an account?</span>

            <a href="/login">Sign in</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
