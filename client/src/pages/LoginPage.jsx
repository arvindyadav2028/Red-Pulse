import { useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import sign from "../assets/signup.png";

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const { data } = await axios.post("/api/auth/login", formData, { withCredentials: true });
            const destination = login(data.user, data.accessToken);
            navigate(destination, { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cyan-50">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sign})` }} />
            <div className="relative w-full max-w-sm border-2 border-[#666868] bg-[#0A1A2F]/95 rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white text-center">Login</h2>

                {error && (
                    <p className="text-red-400 text-sm text-center bg-red-900/30 p-2 rounded-lg">{error}</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col space-y-1">
                        <label className="text-white font-medium">Email</label>
                        <input
                            type="email" name="email" value={formData.email}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2 text-white bg-transparent"
                            placeholder="you@example.com" required
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-white font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" value={formData.password}
                                onChange={handleChange}
                                className="border rounded-lg px-3 py-2 text-white bg-transparent w-full pr-10"
                                placeholder="••••••••" required
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-50 hover:text-blue-400"
                                onClick={() => setShowPassword(p => !p)}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit" disabled={loading}
                        className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 disabled:opacity-60"
                    >
                        {loading ? "Logging in…" : "Log in"}
                    </button>
                </form>

                <p className="text-sm text-center text-white/60 hover:text-white cursor-pointer">Forgot Password?</p>
                <p onClick={() => navigate("/signup")} className="text-sm text-center text-white hover:underline cursor-pointer">
                    Not registered? Sign up
                </p>
            </div>
        </div>
    );
}
