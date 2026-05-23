import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterHospital() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "", hospitalID: "", ownership: "", type: "",
        licence: "", accreditation: "", emgServices: "",
        phoneNo1: "", phoneNo2: "", hospitalHeadID: "", totalEmp: "",
        address: "", cityOrVillage: "", district: "", state: "",
        pincode: "", location: "",
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
            await axios.post("/api/profile/register-hospital", payload, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            navigate("/dashboard/organization", { replace: true });
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
            <div className="w-full max-w-4xl">
                <div className="mb-8">
                    <button onClick={() => navigate("/organization/setup")} className="text-gray-500 hover:text-white text-sm mb-4 flex items-center gap-1">
                        ← Back to organization setup
                    </button>
                    <h1 className="text-3xl font-bold text-white">Register Hospital 🏥</h1>
                    <p className="text-gray-400 mt-1">Fill in your hospital's details. All information will be verified.</p>
                </div>

                {error && <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-xl mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-8 space-y-6">

                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Basic information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className={labelCls}>Hospital name *</label><input className={inputCls} type="text" name="name" onChange={handleChange} placeholder="City General Hospital" required /></div>
                            <div><label className={labelCls}>Hospital ID</label><input className={inputCls} type="text" name="hospitalID" onChange={handleChange} placeholder="HOS-2024-001" /></div>
                            <div>
                                <label className={labelCls}>Ownership *</label>
                                <select className={inputCls} name="ownership" onChange={handleChange} required>
                                    <option value="">Select ownership</option>
                                    <option>Government</option><option>Private</option><option>NGO</option><option>Trust</option>
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Hospital type *</label>
                                <select className={inputCls} name="type" onChange={handleChange} required>
                                    <option value="">Select type</option>
                                    <option>Multi Speciality</option><option>General</option><option>Emergency</option><option>Trauma Center</option>
                                </select>
                            </div>
                            <div><label className={labelCls}>Licence number</label><input className={inputCls} type="text" name="licence" onChange={handleChange} /></div>
                            <div><label className={labelCls}>Accreditation</label><input className={inputCls} type="text" name="accreditation" onChange={handleChange} placeholder="NABH / JCI / ISO" /></div>
                            <div><label className={labelCls}>Emergency services</label><input className={inputCls} type="text" name="emgServices" onChange={handleChange} placeholder="24x7 ICU, Trauma, Blood Bank" /></div>
                            <div><label className={labelCls}>Total employees</label><input className={inputCls} type="number" name="totalEmp" onChange={handleChange} /></div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Contact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className={labelCls}>Primary contact *</label><input className={inputCls} type="tel" name="phoneNo1" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Secondary contact</label><input className={inputCls} type="tel" name="phoneNo2" onChange={handleChange} /></div>
                            <div><label className={labelCls}>Hospital head ID</label><input className={inputCls} type="text" name="hospitalHeadID" onChange={handleChange} /></div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Location</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2"><label className={labelCls}>Street address *</label><input className={inputCls} type="text" name="address" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>City / Village *</label><input className={inputCls} type="text" name="cityOrVillage" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>District *</label><input className={inputCls} type="text" name="district" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>State *</label><input className={inputCls} type="text" name="state" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Pincode *</label><input className={inputCls} type="text" name="pincode" maxLength={6} onChange={handleChange} required /></div>
                            <div className="md:col-span-2"><label className={labelCls}>GPS coordinates (lat, lng)</label><input className={inputCls} type="text" name="location" onChange={handleChange} placeholder="23.2599, 77.4126" /></div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Documents & photos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[["image","Hospital photo"],["licenceImage","Licence image"],["accreditationImage","Accreditation image"]].map(([name, label]) => (
                                <div key={name}>
                                    <label className={labelCls}>{label}</label>
                                    <input type="file" name={name} accept="image/*" onChange={handleFile}
                                        className="w-full text-gray-400 text-sm file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <button type="submit" disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition-opacity">
                        {loading ? "Registering…" : "Register Hospital"}
                    </button>
                </form>
            </div>
        </div>
    );
}
