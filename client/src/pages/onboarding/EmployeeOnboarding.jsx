import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EmployeeOnboarding() {
    const navigate = useNavigate();
    const { refreshUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "", age: "", gender: "", phone1: "", phone2: "",
        email: "", designation: "", workLocation: "",
        role: "Staff", shift: "Day", status: "Active", joinedOn: "",
    });
    const [files, setFiles] = useState({});

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFile = (e) => setFiles({ ...files, [e.target.name]: e.target.files[0] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const payload = new FormData();
        Object.keys(formData).forEach(k => payload.append(k, formData[k]));
        Object.keys(files).forEach(k => payload.append(k, files[k]));
        try {
            await axios.post("/api/profile/become-employee", payload, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            await refreshUser();
            navigate("/dashboard/staff", { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || "Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputCls = "w-full border border-gray-700 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 placeholder-gray-600";
    const labelCls = "block text-sm text-gray-400 font-medium mb-1";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex justify-center items-start py-12 px-4">
            <div className="w-full max-w-3xl">
                <div className="mb-8">
                    <button onClick={() => navigate("/onboarding/role")} className="text-gray-500 hover:text-white text-sm mb-4 flex items-center gap-1">
                        ← Back to role selection
                    </button>
                    <h1 className="text-3xl font-bold text-white">Staff Registration 🏥</h1>
                    <p className="text-gray-400 mt-1">Complete your profile to access the staff dashboard.</p>
                </div>

                {error && <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-xl mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-8 space-y-6">

                    {/* Personal */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Personal details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className={labelCls}>Full name *</label><input className={inputCls} type="text" name="name" onChange={handleChange} placeholder="Priya Sharma" required /></div>
                            <div><label className={labelCls}>Age *</label><input className={inputCls} type="number" name="age" min="18" max="65" onChange={handleChange} required /></div>
                            <div>
                                <label className={labelCls}>Gender *</label>
                                <select className={inputCls} name="gender" onChange={handleChange} required>
                                    <option value="">Select gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                            <div><label className={labelCls}>Primary phone *</label><input className={inputCls} type="tel" name="phone1" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Secondary phone</label><input className={inputCls} type="tel" name="phone2" onChange={handleChange} /></div>
                            <div><label className={labelCls}>Work email *</label><input className={inputCls} type="email" name="email" onChange={handleChange} required /></div>
                        </div>
                    </section>

                    {/* Work */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Work details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className={labelCls}>Designation *</label><input className={inputCls} type="text" name="designation" onChange={handleChange} placeholder="Blood Bank Technician" required /></div>
                            <div><label className={labelCls}>Work location *</label><input className={inputCls} type="text" name="workLocation" onChange={handleChange} placeholder="City General Hospital, Bhopal" required /></div>
                            <div>
                                <label className={labelCls}>Role *</label>
                                <select className={inputCls} name="role" onChange={handleChange}>
                                    {["Admin","Doctor","Technician","Nurse","Staff"].map(r => <option key={r}>{r}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Shift *</label>
                                <select className={inputCls} name="shift" onChange={handleChange}>
                                    {["Day","Night","Rotational"].map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Status</label>
                                <select className={inputCls} name="status" onChange={handleChange}>
                                    {["Active","Inactive","On Leave"].map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div><label className={labelCls}>Joined on</label><input className={inputCls} type="date" name="joinedOn" onChange={handleChange} /></div>
                        </div>
                    </section>

                    {/* Photo */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Profile photo</h2>
                        <input type="file" name="image" accept="image/*" onChange={handleFile}
                            className="w-full text-gray-400 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer" />
                    </section>

                    <button type="submit" disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition-opacity">
                        {loading ? "Registering…" : "Complete Staff Registration"}
                    </button>
                </form>
            </div>
        </div>
    );
}
