import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function StatCard({ label, value, sub, color }) {
    return (
        <div className={`bg-gray-900 border ${color} rounded-2xl p-5`}>
            <p className="text-gray-400 text-sm mb-1">{label}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
            {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
        </div>
    );
}

function Badge({ label, icon }) {
    return (
        <div className="flex items-center gap-2 bg-gray-800 border border-yellow-700 rounded-xl px-3 py-2">
            <span className="text-lg">{icon}</span>
            <span className="text-xs text-yellow-400 font-medium">{label}</span>
        </div>
    );
}

const BADGE_ICONS = { "First Donation": "🎖️", "5 Donations": "⭐", "10 Donations": "🌟", "Emergency Hero": "🦸", "Regular Donor": "❤️" };

export default function DonorDashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/profile/me")
            .then(({ data }) => setProfile(data.profile))
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    const handleLogout = () => { logout(); navigate("/login", { replace: true }); };

    const now = new Date();
    const nextDate = profile?.nextEligibleDate ? new Date(profile.nextEligibleDate) : null;
    const isEligible = !nextDate || now >= nextDate;
    const daysLeft = nextDate && !isEligible ? Math.ceil((nextDate - now) / 86400000) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
            {/* Header */}
            <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🩸</span>
                    <div>
                        <h1 className="text-white font-bold text-lg leading-tight">RedPulse</h1>
                        <p className="text-gray-500 text-xs">Donor Dashboard</p>
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
                        {/* Eligibility banner */}
                        <div className={`rounded-2xl p-5 border flex items-center justify-between ${isEligible ? "bg-emerald-950/50 border-emerald-700" : "bg-amber-950/40 border-amber-700"}`}>
                            <div>
                                <p className={`font-semibold text-lg ${isEligible ? "text-emerald-400" : "text-amber-400"}`}>
                                    {isEligible ? "✅ You are eligible to donate!" : `⏳ Next donation in ${daysLeft} days`}
                                </p>
                                <p className="text-gray-400 text-sm mt-0.5">
                                    {isEligible
                                        ? "Visit your nearest blood bank or hospital to donate."
                                        : `Eligible from ${nextDate?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`}
                                </p>
                            </div>
                            {isEligible && (
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                                    Find centre
                                </button>
                            )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <StatCard label="Total donations" value={profile?.totalDonations ?? 0} sub="All time" color="border-red-900" />
                            <StatCard label="Blood group" value={profile?.bloodGroup ?? "—"} sub="Your type" color="border-rose-900" />
                            <StatCard label="Status" value={profile?.status === 1 ? "Active" : profile?.status === 2 ? "Suspended" : "Inactive"} sub="Current status" color="border-gray-700" />
                            <StatCard label="Last donation" value={profile?.lastDonationDate ? new Date(profile.lastDonationDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "Never"} sub="Date" color="border-gray-700" />
                        </div>

                        {/* Badges */}
                        {profile?.badgesEarned?.length > 0 && (
                            <section>
                                <h2 className="text-white font-semibold mb-3">Badges earned</h2>
                                <div className="flex flex-wrap gap-3">
                                    {profile.badgesEarned.map(b => <Badge key={b} label={b} icon={BADGE_ICONS[b] ?? "🏅"} />)}
                                </div>
                            </section>
                        )}

                        {/* Profile summary */}
                        <section>
                            <h2 className="text-white font-semibold mb-4">Profile summary</h2>
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    ["Full name", profile?.name],
                                    ["Phone", profile?.phone1],
                                    ["Gender", profile?.gender === "M" ? "Male" : profile?.gender === "F" ? "Female" : "Other"],
                                    ["Age", profile?.age],
                                    ["Weight", profile?.weight ? `${profile.weight} kg` : "—"],
                                    ["City", profile?.cityOrVillage],
                                    ["District", profile?.district],
                                    ["State", profile?.state],
                                    ["Emergency available", profile?.availableOnEmg ? "Yes" : "No"],
                                    ["Continuing donation", profile?.continueDonation ? "Yes" : "No"],
                                ].map(([k, v]) => (
                                    <div key={k} className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-500 text-sm">{k}</span>
                                        <span className="text-white text-sm font-medium">{v ?? "—"}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Medical */}
                        {(profile?.allergies || profile?.medicalHistory) && (
                            <section>
                                <h2 className="text-white font-semibold mb-4">Medical information</h2>
                                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Allergies</p>
                                        <p className="text-white text-sm">{profile?.allergies || "None"}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Medical history</p>
                                        <p className="text-white text-sm">{profile?.medicalHistory || "None"}</p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}



// import userAvatar from "../assets/logo2.png"
// import LeaderCard from "../../components/Layout/MainGrid/LeaderCard";
// import MainGrid from "../../components/Layout/MainGrid/MainGrid";
// import TopBar from "../../components/Layout/TopBar";
// import Sidebar from "../../components/Layout/Sidebar";

// function DonorDashboard() {
//   return (
//     <div className="min-h-screen rounded-3xl overflow-hidden grid grid-cols-[auto_1fr_300px] z-10">

//       <div className="fixed left-0 top-0 h-screen z-50 w-24">
//         <Sidebar />
//       </div>

//       <div className="fixed top-0 float left-19 right-0 z-40 ml-6 mt-2">
//         <TopBar />
//       </div>

//       <div className="mt-24 ml-5">
//         <MainGrid />
//       </div>

//       <div className="pr-6 mt-9">
//         <LeaderCard />
//       </div>

//     </div>
//   );
// }

// export default DonorDashboard;