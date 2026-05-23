import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const roles = [
    {
        key: "donor",
        title: "Blood Donor",
        subtitle: "Donate blood & save lives",
        description: "Register as a donor to donate whole blood or components. Get notified for emergency requests near you.",
        icon: "🩸",
        color: "from-red-600 to-rose-700",
        border: "border-red-500",
        path: "/onboarding/donor",
        badge: "Most common"
    },
    {
        key: "employee",
        title: "Staff / Volunteer",
        subtitle: "Work at a blood bank or hospital",
        description: "Manage donor queues, assist blood collection, track components and coordinate with your organization.",
        icon: "🏥",
        color: "from-blue-600 to-indigo-700",
        border: "border-blue-500",
        path: "/onboarding/employee",
        badge: null
    },
    {
        key: "admin",
        title: "Organization Admin",
        subtitle: "Manage a hospital or blood bank",
        description: "Register your organization, manage inventory, track blood units, expiry dates, and oversee staff.",
        icon: "🏛️",
        color: "from-emerald-600 to-teal-700",
        border: "border-emerald-500",
        path: "/onboarding/admin",
        badge: null
    },
];

export default function RoleSelection() {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <div className="text-center mb-10">
                <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-2">Welcome, {user?.username}</p>
                <h1 className="text-4xl font-bold text-white mb-3">Choose your role</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    This only needs to be done once. You'll be taken directly to your dashboard on future logins.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {roles.map((role) => (
                    <button
                        key={role.key}
                        onClick={() => navigate(role.path)}
                        className={`relative flex flex-col items-start text-left p-6 rounded-2xl border ${role.border} bg-gray-900/80 hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group`}
                    >
                        {role.badge && (
                            <span className="absolute top-4 right-4 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-medium">
                                {role.badge}
                            </span>
                        )}
                        <span className="text-4xl mb-4">{role.icon}</span>
                        <h2 className="text-xl font-bold text-white mb-1">{role.title}</h2>
                        <p className="text-sm text-gray-300 font-medium mb-3">{role.subtitle}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{role.description}</p>
                        <div className={`mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r ${role.color} text-white text-sm font-semibold text-center group-hover:opacity-90`}>
                            Get started →
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
