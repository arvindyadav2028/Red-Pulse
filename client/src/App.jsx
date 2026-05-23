import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Public
import Landing from "./pages/Landing.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Signup from "./pages/Signup.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";

// Onboarding
import RoleSelection from "./pages/onboarding/RoleSelection.jsx";
import BecomeDonor from "./pages/onboarding/BecomeDonor.jsx";
import EmployeeOnboarding from "./pages/onboarding/EmployeeOnboarding.jsx";
import AdminOnboarding from "./pages/onboarding/AdminOnboarding.jsx";
import OrganizationSetup from "./pages/onboarding/OrganizationSetup.jsx";
import RegisterHospital from "./pages/onboarding/RegisterHospital.jsx";
import RegisterBloodBank from "./pages/onboarding/RegisterBloodBank.jsx";

// Dashboards
import DonorDashboard from "./pages/dashboards/DonorDashboard.jsx";
import StaffDashboard from "./pages/dashboards/StaffDashboard.jsx";
import OrganizationDashboard from "./pages/dashboards/OrganizationDashboard.jsx";

function Spinner() {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
            <span className="text-4xl animate-pulse">🩸</span>
            <p className="text-gray-500 text-sm">Loading RedPulse…</p>
        </div>
    );
}

/** Require login — shows spinner while session restores */
function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <Spinner />;
    return user ? children : <Navigate to="/login" replace />;
}

/** Onboarding pages — redirect already-onboarded users to their dashboard */
function OnboardingGuard({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <Spinner />;
    if (!user) return <Navigate to="/login" replace />;
    if (user.onboardingCompleted) {
        if (user.role === "donor")    return <Navigate to="/dashboard/donor" replace />;
        if (user.role === "employee") return <Navigate to="/dashboard/staff" replace />;
        if (user.role === "admin")    return <Navigate to="/dashboard/organization" replace />;
    }
    return children;
}

/** Dashboard pages — require login + specific role + completed onboarding */
function DashboardGuard({ role, children }) {
    const { user, loading } = useAuth();
    if (loading) return <Spinner />;
    if (!user)                   return <Navigate to="/login" replace />;
    if (!user.onboardingCompleted) return <Navigate to="/onboarding/role" replace />;
    if (user.role !== role)       return <Navigate to="/onboarding/role" replace />;
    return children;
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ── Public ───────────────────────────────────────── */}
                <Route path="/"            element={<Landing />} />
                <Route path="/login"       element={<LoginPage />} />
                <Route path="/signup"      element={<Signup />} />
                <Route path="/verify-email" element={<VerifyEmail />} />

                {/* ── Onboarding ───────────────────────────────────── */}
                <Route path="/onboarding/role"     element={<OnboardingGuard><RoleSelection /></OnboardingGuard>} />
                <Route path="/onboarding/donor"    element={<OnboardingGuard><BecomeDonor /></OnboardingGuard>} />
                <Route path="/onboarding/employee" element={<OnboardingGuard><EmployeeOnboarding /></OnboardingGuard>} />
                <Route path="/onboarding/admin"    element={<OnboardingGuard><AdminOnboarding /></OnboardingGuard>} />

                {/* Org setup — admin only but onboarding already complete */}
                <Route path="/organization/setup"              element={<PrivateRoute><OrganizationSetup /></PrivateRoute>} />
                <Route path="/organization/register-hospital"  element={<PrivateRoute><RegisterHospital /></PrivateRoute>} />
                <Route path="/organization/register-bloodbank" element={<PrivateRoute><RegisterBloodBank /></PrivateRoute>} />

                {/* ── Dashboards ───────────────────────────────────── */}
                <Route path="/dashboard/donor"        element={<DashboardGuard role="donor"><DonorDashboard /></DashboardGuard>} />
                <Route path="/dashboard/staff"        element={<DashboardGuard role="employee"><StaffDashboard /></DashboardGuard>} />
                <Route path="/dashboard/organization" element={<DashboardGuard role="admin"><OrganizationDashboard /></DashboardGuard>} />

                {/* ── Fallback ─────────────────────────────────────── */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
