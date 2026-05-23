import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function OrganizationSetup() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const options = [
        {
            title: "Register a Hospital",
            description: "Multi-speciality, general, emergency or trauma centres. Manage beds, staff, inventory and blood requests.",
            icon: "🏥",
            color: "from-blue-600 to-indigo-700",
            border: "border-blue-600",
            path: "/organization/register-hospital",
            features: ["Blood inventory management", "Staff management", "Emergency request handling", "Donor tracking"],
        },
        {
            title: "Register a Blood Bank",
            description: "Standalone or hospital-attached blood banks. Track units, expiry, components and surplus software.",
            icon: "🩸",
            color: "from-red-600 to-rose-700",
            border: "border-red-600",
            path: "/organization/register-bloodbank",
            features: ["Blood unit tracking", "Component separation logs", "Expiry alerts", "Surplus & shortage reports"],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex flex-col items-center justify-center px-4 py-12">
            <div className="text-center mb-10">
                <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-2">Step 2 of 2</p>
                <h1 className="text-4xl font-bold text-white mb-3">Set up your organization</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    Welcome, <span className="text-white font-medium">{user?.username}</span>. 
                    Choose the type of organization you manage. You can always update details later.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                {options.map((opt) => (
                    <button
                        key={opt.path}
                        onClick={() => navigate(opt.path)}
                        className={`flex flex-col items-start text-left p-7 rounded-2xl border ${opt.border} bg-gray-900/80 hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group`}
                    >
                        <span className="text-5xl mb-5">{opt.icon}</span>
                        <h2 className="text-xl font-bold text-white mb-2">{opt.title}</h2>
                        <p className="text-sm text-gray-400 leading-relaxed mb-5">{opt.description}</p>
                        <ul className="space-y-1.5 mb-6 w-full">
                            {opt.features.map(f => (
                                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-emerald-500">✓</span> {f}
                                </li>
                            ))}
                        </ul>
                        <div className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${opt.color} text-white text-sm font-semibold text-center group-hover:opacity-90`}>
                            Register →
                        </div>
                    </button>
                ))}
            </div>

            <p className="text-gray-600 text-sm mt-8">
                You can register both a hospital and a blood bank using the same admin account.
            </p>
        </div>
    );
}
