import { useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import sign from "../assets/signup.png";

export default function Signup() {
    const navigate = useNavigate();
    const [show, setShow]         = useState({ password: false, confirm: false });
    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
    const [error, setError]       = useState("");
    const [loading, setLoading]   = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (formData.password.length < 8) { setError("Password must be at least 8 characters."); return; }
        if (formData.password !== formData.confirmPassword) { setError("Passwords do not match."); return; }
        setLoading(true);
        try {
            await axios.post("/api/auth/register", {
                username: formData.username,
                email:    formData.email,
                password: formData.password,
            });
            navigate("/verify-email", { state: { email: formData.email } });
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputCls = "w-full border border-white/20 rounded-lg px-3 py-2.5 text-white bg-white/5 focus:outline-none focus:border-red-500 placeholder-white/30";

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sign})` }} />
            <div className="absolute inset-0 bg-[#0A1A2F]/80" />

            <div className="relative w-full max-w-sm border border-white/10 bg-[#0A1A2F]/95 backdrop-blur rounded-2xl p-8 space-y-5 mx-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Create account</h2>
                    <p className="text-white/40 text-sm mt-1">Join RedPulse today</p>
                </div>

                {error && (
                    <div className="text-red-400 text-sm text-center bg-red-900/30 border border-red-800 p-3 rounded-lg">{error}</div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-white/70 text-sm font-medium">Username</label>
                        <input className={inputCls} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="johndoe" required autoComplete="username" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-white/70 text-sm font-medium">Email</label>
                        <input className={inputCls} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required autoComplete="email" />
                    </div>
                    {[
                        { key: "password",        label: "Password",         show: show.password, field: "password" },
                        { key: "confirmPassword", label: "Confirm password",  show: show.confirm,  field: "confirm"  },
                    ].map(({ key, label, show: shown, field }) => (
                        <div key={key} className="space-y-1">
                            <label className="text-white/70 text-sm font-medium">{label}</label>
                            <div className="relative">
                                <input
                                    className={`${inputCls} pr-10`}
                                    type={shown ? "text" : "password"}
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
                                    onClick={() => setShow(s => ({ ...s, [field]: !s[field] }))}
                                >
                                    {shown ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>
                    ))}

                    <button type="submit" disabled={loading}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors mt-2">
                        {loading ? "Creating account…" : "Sign up"}
                    </button>
                </form>

                <p className="text-sm text-center text-white/50">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/login")} className="text-red-400 hover:text-red-300 font-medium">
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
}
