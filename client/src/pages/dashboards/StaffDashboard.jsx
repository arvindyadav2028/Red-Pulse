import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function StatCard({ label, value, icon, color }) {
    return (
        <div className={`bg-gray-900 border ${color} rounded-2xl p-5 flex items-start gap-4`}>
            <span className="text-3xl">{icon}</span>
            <div>
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    );
}

const QUEUE_MOCK = [
    { id: 1, name: "Amit Verma",    blood: "B+",  status: "Waiting",     time: "10:15 AM" },
    { id: 2, name: "Neha Gupta",    blood: "O-",  status: "In Progress", time: "10:40 AM" },
    { id: 3, name: "Rohit Singh",   blood: "A+",  status: "Completed",   time: "09:50 AM" },
    { id: 4, name: "Sunita Patil",  blood: "AB+", status: "Waiting",     time: "11:00 AM" },
];

const STATUS_STYLE = {
    "Waiting":     "bg-amber-900/40 text-amber-400 border border-amber-700",
    "In Progress": "bg-blue-900/40 text-blue-400 border border-blue-700",
    "Completed":   "bg-emerald-900/40 text-emerald-400 border border-emerald-700",
};

export default function StaffDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [queue, setQueue] = useState(QUEUE_MOCK);

    useEffect(() => {
        axios.get("/api/profile/me")
            .then(({ data }) => setProfile(data.profile))
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const handleLogout = () => { logout(); navigate("/login", { replace: true }); };

    const advance = (id) => {
        setQueue(q => q.map(d =>
            d.id === id
                ? { ...d, status: d.status === "Waiting" ? "In Progress" : "Completed" }
                : d
        ));
    };

    const waiting     = queue.filter(d => d.status === "Waiting").length;
    const inProgress  = queue.filter(d => d.status === "In Progress").length;
    const completed   = queue.filter(d => d.status === "Completed").length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
            {/* Header */}
            <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                        <h1 className="text-white font-bold text-lg leading-tight">RedPulse</h1>
                        <p className="text-gray-500 text-xs">Staff Dashboard</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Hi, <span className="text-white font-medium">{user?.username}</span></span>
                    <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-red-400 transition-colors">Logout</button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
                {loading ? (
                    <div className="text-gray-500 text-center py-20">Loading your profile…</div>
                ) : (
                    <>
                        {/* Staff info banner */}
                        {profile && (
                            <div className="bg-blue-950/40 border border-blue-800 rounded-2xl p-5 flex items-center justify-between">
                                <div>
                                    <p className="text-white font-semibold text-lg">{profile.name}</p>
                                    <p className="text-blue-300 text-sm">{profile.designation} · {profile.workLocation}</p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        {profile.shift} shift · <span className={profile.status === "Active" ? "text-emerald-400" : "text-amber-400"}>{profile.status}</span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-500 text-xs">Role</p>
                                    <p className="text-white font-medium">{profile.role ?? "Staff"}</p>
                                </div>
                            </div>
                        )}

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <StatCard label="Waiting"     value={waiting}    icon="⏳" color="border-amber-900" />
                            <StatCard label="In Progress" value={inProgress}  icon="🔄" color="border-blue-900" />
                            <StatCard label="Completed"   value={completed}   icon="✅" color="border-emerald-900" />
                        </div>

                        {/* Donor queue */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-white font-semibold">Today's donor queue</h2>
                                <span className="text-xs text-gray-500">{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}</span>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-800">
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium">Donor</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium">Blood</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium">Time</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium">Status</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {queue.map((d) => (
                                            <tr key={d.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                                                <td className="px-5 py-3 text-white font-medium">{d.name}</td>
                                                <td className="px-5 py-3">
                                                    <span className="bg-red-900/40 border border-red-800 text-red-300 text-xs font-bold px-2 py-0.5 rounded-lg">{d.blood}</span>
                                                </td>
                                                <td className="px-5 py-3 text-gray-400">{d.time}</td>
                                                <td className="px-5 py-3">
                                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${STATUS_STYLE[d.status]}`}>{d.status}</span>
                                                </td>
                                                <td className="px-5 py-3">
                                                    {d.status !== "Completed" ? (
                                                        <button
                                                            onClick={() => advance(d.id)}
                                                            className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg transition-colors"
                                                        >
                                                            {d.status === "Waiting" ? "Start" : "Complete"}
                                                        </button>
                                                    ) : (
                                                        <span className="text-gray-600 text-xs">Done</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Blood components quick ref */}
                        <section>
                            <h2 className="text-white font-semibold mb-4">Blood components reference</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { name: "Whole Blood",    shelf: "35 days",  temp: "2–6°C",   icon: "🩸" },
                                    { name: "Platelets",      shelf: "5 days",   temp: "20–24°C", icon: "🔴" },
                                    { name: "Plasma (FFP)",   shelf: "1 year",   temp: "−18°C",   icon: "🟡" },
                                    { name: "Red Cells",      shelf: "42 days",  temp: "2–6°C",   icon: "🔵" },
                                ].map(c => (
                                    <div key={c.name} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                                        <p className="text-xl mb-2">{c.icon}</p>
                                        <p className="text-white text-sm font-medium">{c.name}</p>
                                        <p className="text-gray-500 text-xs mt-1">Shelf: {c.shelf}</p>
                                        <p className="text-gray-500 text-xs">Storage: {c.temp}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
}
