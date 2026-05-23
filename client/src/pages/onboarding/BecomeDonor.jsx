import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function BecomeDonor() {
    const navigate = useNavigate();
    const { refreshUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "", phone1: "", bloodGroup: "", gender: "",
        age: "", weight: "", address: "", cityOrVillage: "",
        district: "", state: "", pincode: "", idProof: "", idProofNo: "",
        allergies: "", medicalHistory: "",
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
            await axios.post("/api/profile/become-donor", payload, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            const updatedUser = await refreshUser();
            navigate("/dashboard/donor", { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || "Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputCls = "w-full border border-gray-700 bg-gray-900 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 placeholder-gray-600";
    const labelCls = "block text-sm text-gray-400 font-medium mb-1";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex justify-center items-start py-12 px-4">
            <div className="w-full max-w-3xl">
                <div className="mb-8">
                    <button onClick={() => navigate("/onboarding/role")} className="text-gray-500 hover:text-white text-sm mb-4 flex items-center gap-1">
                        ← Back to role selection
                    </button>
                    <h1 className="text-3xl font-bold text-white">Register as a Donor 🩸</h1>
                    <p className="text-gray-400 mt-1">Complete your profile to start saving lives.</p>
                </div>

                {error && <div className="bg-red-900/40 border border-red-700 text-red-300 px-4 py-3 rounded-xl mb-6 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-8 space-y-6">

                    {/* Personal */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Personal details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><label className={labelCls}>Full name *</label><input className={inputCls} type="text" name="name" onChange={handleChange} placeholder="Ravi Kumar" required /></div>
                            <div><label className={labelCls}>Phone number *</label><input className={inputCls} type="tel" name="phone1" onChange={handleChange} placeholder="+91 98765 43210" required /></div>
                            <div>
                                <label className={labelCls}>Blood group *</label>
                                <select className={inputCls} name="bloodGroup" onChange={handleChange} required>
                                    <option value="">Select blood group</option>
                                    {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(g => <option key={g}>{g}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={labelCls}>Gender *</label>
                                <select className={inputCls} name="gender" onChange={handleChange} required>
                                    <option value="">Select gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                            <div><label className={labelCls}>Age * (18–65)</label><input className={inputCls} type="number" name="age" min="18" max="65" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Weight (kg) * (min 45)</label><input className={inputCls} type="number" name="weight" min="45" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Allergies</label><input className={inputCls} type="text" name="allergies" onChange={handleChange} placeholder="None" /></div>
                            <div><label className={labelCls}>Medical history</label><input className={inputCls} type="text" name="medicalHistory" onChange={handleChange} placeholder="None" /></div>
                        </div>
                    </section>

                    {/* Address */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2"><label className={labelCls}>Street address *</label><input className={inputCls} type="text" name="address" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>City / Village *</label><input className={inputCls} type="text" name="cityOrVillage" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>District *</label><input className={inputCls} type="text" name="district" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>State *</label><input className={inputCls} type="text" name="state" onChange={handleChange} required /></div>
                            <div><label className={labelCls}>Pincode *</label><input className={inputCls} type="text" name="pincode" maxLength={6} onChange={handleChange} required /></div>
                        </div>
                    </section>

                    {/* ID & Photos */}
                    <section>
                        <h2 className="text-lg font-semibold text-white mb-4 border-b border-gray-800 pb-2">Identity verification</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className={labelCls}>ID proof type *</label>
                                <select className={inputCls} name="idProof" onChange={handleChange} required>
                                    <option value="">Select ID type</option>
                                    <option>Aadhaar Card</option>
                                    <option>PAN Card</option>
                                    <option>Voter ID</option>
                                    <option>Passport</option>
                                    <option>Driving Licence</option>
                                </select>
                            </div>
                            <div><label className={labelCls}>ID number *</label><input className={inputCls} type="text" name="idProofNo" onChange={handleChange} placeholder="XXXX-XXXX-XXXX" required /></div>
                            <div>
                                <label className={labelCls}>Profile photo *</label>
                                <input type="file" name="image" accept="image/*" onChange={handleFile} className="w-full text-gray-400 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer" required />
                            </div>
                            <div>
                                <label className={labelCls}>ID proof image</label>
                                <input type="file" name="idProofImage" accept="image/*" onChange={handleFile} className="w-full text-gray-400 text-sm file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-800 file:text-white hover:file:bg-gray-700 cursor-pointer" />
                            </div>
                        </div>
                    </section>

                    <button type="submit" disabled={loading}
                        className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 disabled:opacity-50 transition-opacity">
                        {loading ? "Registering…" : "Complete Donor Registration"}
                    </button>
                </form>
            </div>
        </div>
    );
}
