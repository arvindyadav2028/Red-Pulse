import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import sign from "../assets/signup.png";

export default function VerifyEmail() {
    const navigate      = useNavigate();
    const location      = useLocation();
    const emailFromState = location.state?.email || "";

    const [email, setEmail]   = useState(emailFromState);
    const [otp, setOtp]       = useState("");
    const [error, setError]   = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [resending, setResending] = useState(false);
    const [resent, setResent]       = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await axios.post("/api/auth/verify-email", { email, otp });
            setSuccess(true);
            setTimeout(() => navigate("/login"), 2500);
        } catch (err) {
            setError(err.response?.data?.message || "OTP verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        setResending(true);
        setError("");
        try {
            await axios.post("/api/auth/resend-otp", { email });
            setResent(true);
            setTimeout(() => setResent(false), 5000);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to resend OTP.");
        } finally {
            setResending(false);
        }
    };

    const inputCls = "w-full border border-white/20 rounded-lg px-3 py-2.5 text-white bg-white/5 focus:outline-none focus:border-red-500 placeholder-white/30";

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sign})` }} />
            <div className="absolute inset-0 bg-[#0A1A2F]/80" />

            <div className="relative w-full max-w-sm border border-white/10 bg-[#0A1A2F]/95 backdrop-blur rounded-2xl p-8 space-y-5 mx-4">
                <div className="text-center">
                    <span className="text-4xl">📧</span>
                    <h2 className="text-2xl font-bold text-white mt-2">Verify your email</h2>
                    <p className="text-white/40 text-sm mt-1">
                        {emailFromState ? `Code sent to ${emailFromState}` : "Enter the 6-digit code sent to your email."}
                    </p>
                </div>

                {error && (
                    <div className="text-red-400 text-sm text-center bg-red-900/30 border border-red-800 p-3 rounded-lg">{error}</div>
                )}
                {success && (
                    <div className="text-emerald-400 text-sm text-center bg-emerald-900/30 border border-emerald-800 p-3 rounded-lg">
                        ✅ Email verified! Redirecting to login…
                    </div>
                )}
                {resent && (
                    <div className="text-blue-400 text-sm text-center bg-blue-900/30 border border-blue-800 p-3 rounded-lg">
                        New OTP sent to your email.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!emailFromState && (
                        <div className="space-y-1">
                            <label className="text-white/70 text-sm font-medium">Email</label>
                            <input className={inputCls} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                        </div>
                    )}
                    <div className="space-y-1">
                        <label className="text-white/70 text-sm font-medium">6-digit code</label>
                        <input
                            className={`${inputCls} tracking-[0.5em] text-center text-xl font-bold`}
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                            placeholder="——————"
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading || success}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors">
                        {loading ? "Verifying…" : "Verify email"}
                    </button>
                </form>

                <div className="flex items-center justify-between text-sm">
                    <button onClick={() => navigate("/signup")} className="text-white/40 hover:text-white/70 transition-colors">
                        ← Back to sign up
                    </button>
                    <button
                        onClick={handleResend}
                        disabled={resending || !email}
                        className="text-red-400 hover:text-red-300 disabled:opacity-40 transition-colors font-medium"
                    >
                        {resending ? "Sending…" : "Resend code"}
                    </button>
                </div>
            </div>
        </div>
    );
}
