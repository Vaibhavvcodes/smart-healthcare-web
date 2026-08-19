import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";

import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import DoctorAlerts from "./pages/DoctorAlerts";

import MyPatients from "./pages/MyPatients";
import CareTasks from "./pages/CareTasks";
import CaregiverAlerts from "./pages/CaregiverAlerts";

import Records from "./pages/Records";
import PatientAlerts from "./pages/PatientAlerts";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* PATIENT */}

        <Route
          path="/dashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/records"
          element={<Records />}
        />

        <Route
          path="/alerts"
          element={<PatientAlerts />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* DOCTOR */}

        <Route
          path="/doctor-dashboard"
          element={<DoctorDashboard />}
        />

        <Route
          path="/patients"
          element={<Patients />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />

        <Route
          path="/doctor-alerts"
          element={<DoctorAlerts />}
        />

        {/* CAREGIVER */}

        <Route
          path="/caregiver-dashboard"
          element={<CaregiverDashboard />}
        />

        <Route
          path="/my-patients"
          element={<MyPatients />}
        />

        <Route
          path="/care-tasks"
          element={<CareTasks />}
        />

        <Route
          path="/caregiver-alerts"
          element={<CaregiverAlerts />}
        />

        {/* FALLBACK */}

        <Route
          path="*"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;