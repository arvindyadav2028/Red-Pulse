import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function StatCard({ label, value, icon, sub, color }) {
    return (
        <div className={`bg-gray-900 border ${color} rounded-2xl p-5`}>
            <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm">{label}</p>
                <span className="text-xl">{icon}</span>
            </div>
            <p className="text-3xl font-bold text-white">{value}</p>
            {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
        </div>
    );
}

const MOCK_INVENTORY = [
    { group: "A+",  units: 12, expiring: 2 },
    { group: "A-",  units: 4,  expiring: 0 },
    { group: "B+",  units: 18, expiring: 1 },
    { group: "B-",  units: 3,  expiring: 1 },
    { group: "AB+", units: 7,  expiring: 0 },
    { group: "AB-", units: 2,  expiring: 0 },
    { group: "O+",  units: 24, expiring: 3 },
    { group: "O-",  units: 5,  expiring: 0 },
];

export default function OrganizationDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/profile/me")
            .then(({ data }) => setProfile(data.profile))
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const handleLogout = () => { logout(); navigate("/login", { replace: true }); };

    const org = profile?.hospital || profile?.bloodBank;
    const orgType = profile?.hospital ? "Hospital" : "Blood Bank";
    const totalUnits = MOCK_INVENTORY.reduce((s, r) => s + r.units, 0);
    const expiringUnits = MOCK_INVENTORY.reduce((s, r) => s + r.expiring, 0);

    const tabs = ["overview", "inventory", "staff", "requests"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
            {/* Header */}
            <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                        <h1 className="text-white font-bold text-lg leading-tight">RedPulse</h1>
                        <p className="text-gray-500 text-xs">Organization Dashboard</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Hi, <span className="text-white font-medium">{user?.username}</span></span>
                    <button onClick={handleLogout} className="text-xs text-gray-500 hover:text-red-400 transition-colors">Logout</button>
                </div>
            </header>

            {/* Tab nav */}
            <div className="border-b border-gray-800 px-6">
                <nav className="flex gap-1 -mb-px">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm font-medium capitalize border-b-2 transition-colors ${
                                activeTab === tab
                                    ? "border-emerald-500 text-emerald-400"
                                    : "border-transparent text-gray-500 hover:text-gray-300"
                            }`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
                {loading ? (
                    <div className="text-gray-500 text-center py-20">Loading organization data…</div>
                ) : (
                    <>
                        {/* Org info banner */}
                        <div className="bg-emerald-950/40 border border-emerald-800 rounded-2xl p-5 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs bg-emerald-800 text-emerald-300 px-2 py-0.5 rounded-full font-medium">{orgType}</span>
                                    {!org && <span className="text-xs bg-amber-800 text-amber-300 px-2 py-0.5 rounded-full font-medium">No org registered yet</span>}
                                </div>
                                <p className="text-white font-bold text-xl">{org?.name ?? "Set up your organization"}</p>
                                {org && <p className="text-emerald-300 text-sm mt-0.5">{org.cityOrVillage}, {org.state} · {org.phoneNo1}</p>}
                            </div>
                            {!org && (
                                <button onClick={() => navigate("/organization/setup")}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                                    Setup org →
                                </button>
                            )}
                            {profile?.hospital && !profile?.bloodBank && (
                                <button onClick={() => navigate("/organization/register-bloodbank")}
                                    className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-2 rounded-xl transition-colors">
                                    + Add Blood Bank
                                </button>
                            )}
                        </div>

                        {/* ── OVERVIEW TAB ── */}
                        {activeTab === "overview" && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <StatCard label="Total blood units"   value={totalUnits}    icon="🩸" sub="All groups"      color="border-red-900" />
                                    <StatCard label="Expiring soon"       value={expiringUnits} icon="⚠️" sub="Within 7 days"  color="border-amber-900" />
                                    <StatCard label="Staff on duty"       value={8}             icon="👥" sub="Today"          color="border-blue-900" />
                                    <StatCard label="Pending requests"    value={3}             icon="📋" sub="Awaiting action" color="border-purple-900" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Blood level bars */}
                                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                                        <h3 className="text-white font-semibold mb-4">Blood group levels</h3>
                                        <div className="space-y-3">
                                            {MOCK_INVENTORY.map(r => {
                                                const pct = Math.min(100, Math.round((r.units / 30) * 100));
                                                const color = pct < 20 ? "bg-red-600" : pct < 50 ? "bg-amber-500" : "bg-emerald-500";
                                                return (
                                                    <div key={r.group} className="flex items-center gap-3">
                                                        <span className="w-8 text-xs font-bold text-gray-300">{r.group}</span>
                                                        <div className="flex-1 h-2.5 bg-gray-800 rounded-full overflow-hidden">
                                                            <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                                                        </div>
                                                        <span className="w-12 text-right text-xs text-gray-400">{r.units} units</span>
                                                        {r.expiring > 0 && (
                                                            <span className="text-xs text-amber-400">⚠️ {r.expiring}</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Recent activity */}
                                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                                        <h3 className="text-white font-semibold mb-4">Recent activity</h3>
                                        <ul className="space-y-3">
                                            {[
                                                { text: "3 units of O+ added to inventory",  time: "2h ago",  icon: "➕", c: "text-emerald-400" },
                                                { text: "Emergency request for B- fulfilled", time: "4h ago",  icon: "🚨", c: "text-red-400" },
                                                { text: "2 units of AB+ expiring in 3 days",  time: "6h ago",  icon: "⚠️", c: "text-amber-400" },
                                                { text: "New staff member Priya Sharma added", time: "1d ago", icon: "👤", c: "text-blue-400" },
                                                { text: "Monthly report generated",           time: "2d ago", icon: "📊", c: "text-purple-400" },
                                            ].map((a, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm">
                                                    <span className={`mt-0.5 ${a.c}`}>{a.icon}</span>
                                                    <span className="text-gray-300 flex-1">{a.text}</span>
                                                    <span className="text-gray-600 text-xs whitespace-nowrap">{a.time}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── INVENTORY TAB ── */}
                        {activeTab === "inventory" && (
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                                    <h2 className="text-white font-semibold">Blood inventory</h2>
                                    <button className="text-xs bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg">+ Add units</button>
                                </div>
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-800">
                                            {["Blood group","Units","Expiring soon","Status","Action"].map(h => (
                                                <th key={h} className="text-left px-6 py-3 text-gray-500 font-medium">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MOCK_INVENTORY.map(r => {
                                            const low = r.units < 5;
                                            return (
                                                <tr key={r.group} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                                                    <td className="px-6 py-3">
                                                        <span className="bg-red-900/40 border border-red-800 text-red-300 text-xs font-bold px-2.5 py-1 rounded-lg">{r.group}</span>
                                                    </td>
                                                    <td className="px-6 py-3 text-white font-semibold">{r.units}</td>
                                                    <td className="px-6 py-3">
                                                        {r.expiring > 0
                                                            ? <span className="text-amber-400 font-medium">{r.expiring} units</span>
                                                            : <span className="text-gray-600">—</span>}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${low ? "bg-red-900/40 text-red-400 border border-red-800" : "bg-emerald-900/40 text-emerald-400 border border-emerald-800"}`}>
                                                            {low ? "Low stock" : "Sufficient"}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        <button className="text-xs text-gray-400 hover:text-white underline">Update</button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* ── STAFF TAB ── */}
                        {activeTab === "staff" && (
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-white font-semibold">Staff management</h2>
                                    <button className="text-xs bg-blue-700 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg">+ Add staff</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: "Dr. Anita Roy",    role: "Doctor",     shift: "Day",   status: "Active" },
                                        { name: "Rakesh Mehta",     role: "Technician", shift: "Night", status: "Active" },
                                        { name: "Priya Sharma",     role: "Nurse",      shift: "Day",   status: "Active" },
                                        { name: "Suresh Kumar",     role: "Staff",      shift: "Day",   status: "On Leave" },
                                    ].map(s => (
                                        <div key={s.name} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
                                            <div>
                                                <p className="text-white text-sm font-medium">{s.name}</p>
                                                <p className="text-gray-500 text-xs">{s.role} · {s.shift} shift</p>
                                            </div>
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${s.status === "Active" ? "bg-emerald-900/40 text-emerald-400 border border-emerald-800" : "bg-amber-900/40 text-amber-400 border border-amber-800"}`}>
                                                {s.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── REQUESTS TAB ── */}
                        {activeTab === "requests" && (
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-white font-semibold">Blood requests</h2>
                                    <span className="text-xs text-gray-500">3 pending</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { group: "O-",  units: 2, from: "AIIMS Bhopal",       urgency: "Critical", time: "30 min ago" },
                                        { group: "B+",  units: 1, from: "Hamidia Hospital",    urgency: "Urgent",   time: "2h ago" },
                                        { group: "AB+", units: 3, from: "District Blood Bank", urgency: "Normal",   time: "5h ago" },
                                    ].map((r, i) => {
                                        const uc = { "Critical": "text-red-400 border-red-800 bg-red-900/40", "Urgent": "text-amber-400 border-amber-800 bg-amber-900/40", "Normal": "text-blue-400 border-blue-800 bg-blue-900/40" };
                                        return (
                                            <div key={i} className="flex items-center justify-between bg-gray-800 rounded-xl px-5 py-4">
                                                <div className="flex items-center gap-4">
                                                    <span className="bg-red-900/40 border border-red-800 text-red-300 text-sm font-bold px-2.5 py-1 rounded-lg">{r.group}</span>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">{r.units} unit{r.units > 1 ? "s" : ""} requested</p>
                                                        <p className="text-gray-500 text-xs">{r.from} · {r.time}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${uc[r.urgency]}`}>{r.urgency}</span>
                                                    <button className="text-xs bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg">Fulfil</button>
                                                    <button className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg">Decline</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
