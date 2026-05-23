import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminOnboarding() {
    const navigate = useNavigate();
    const { refreshUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await axios.post("/api/profile/become-admin");
            await refreshUser();
            // Onboarding is complete — go set up the organization
            navigate("/organization/setup", { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex justify-center items-start py-12 px-4">
            <div className="w-full max-w-lg">
                <div className="mb-8">
                    <button onClick={() => navigate("/onboarding/role")} className="text-gray-500 hover:text-white text-sm mb-4 flex items-center gap-1">
                        ← Back to role selection
                    </button>
                    <h1 className="text-3xl font-bold text-white">Organization Admin 🏛️</h1>
                    <p className="text-gray-400 mt-1">
                        You're registering as an administrator. After this step you'll set up your hospital or blood bank.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-xl mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-8 space-y-6">

                    {/* What happens next info card */}
                    <div className="bg-emerald-950/50 border border-emerald-800 rounded-xl p-5">
                        <h3 className="text-emerald-400 font-semibold text-sm mb-3 uppercase tracking-wide">What happens next</h3>
                        <ol className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-emerald-700 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                Your account is assigned the <strong className="text-white">Admin</strong> role
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-emerald-700 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                You register your <strong className="text-white">Hospital</strong> or <strong className="text-white">Blood Bank</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-emerald-700 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                You're taken to your <strong className="text-white">Organization Dashboard</strong> to manage inventory, staff and blood units
                            </li>
                        </ol>
                    </div>

                    <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 text-sm text-gray-400">
                        <p>
                            By continuing, you confirm that you are an authorized representative of the organization you will register, 
                            and that all submitted details will be verified by the RedPulse team.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                        {loading ? "Setting up…" : "Continue as Admin →"}
                    </button>
                </form>
            </div>
        </div>
    );
}
