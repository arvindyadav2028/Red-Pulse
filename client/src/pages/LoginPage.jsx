import { useState } from "react";
import sign from "../assets/signup.png"
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function LoginPage(){



    const navigate=useNavigate();
    const [showPassword, setShowPassword]=useState(true);
    const handleToggle=()=>{
        setShowPassword(prev => !prev);
    };

    return(
        <div className=" relative min-h-screen flex items-center justify-center bg-cyan-50">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sign})` }}
            >   
            </div>
            <div className="relative w-full max-w-sm border-2 border-[#666868] inset-0 bg-linear-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/90 to-transparent rounded-2xl b p-8 space-y-6">
                <h2 className="text-2xl font-bold text-white text-center">Login</h2>
                <div className="flex flex-col space-y-1">
                    <label>Email</label>
                    <input
                       type="emai"
                       className="border rounded-lg px-3 py-2 text-white"
                       placeholder="you@ .com"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-white font-medium">Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            className="border rounded-lg px-3 py-2 text-white w-full pr-10"
                            placeholder="••••••••"
                        />
                        <button
                            type={showPassword ? "text" : "password"}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-50 hover:text-blue-400"
                            onClick={handleToggle}
                            aria-label={showPassword ? "Hide Password":"Show Password"}
                        >
                            {showPassword ? <FiEye/> : <FiEyeOff/>}
                        </button>
                    </div>
                </div>
                <button className="w-full bg-blue-700 text-white py-2 rounded-xl">
                    Log in
                </button>
                <p className="text-sm text-center text-white hover:underline cursor-pointer">
                    Forgot Password?
                </p>
                <p
                    onClick={()=>navigate("/signup")}
                    className="text-sm text-center text-white hover:underline cursor-pointer"
                >
                    Not Registered?Click Her!
                </p>
            </div>
        </div>
    )
}

export default LoginPage;