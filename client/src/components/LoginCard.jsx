import { useState } from "react"
import SignupPage from "../pages/SignupPage.jsx"
export default function LoginCard(){
    const [isLogin, setIsLogin] = useState(true);
    return(
        <>
        {isLogin?
            <div className="w-[380px] p-8 rounded-2xl 
                    bg-slate-900/60 backdrop-blur-md 
                    text-white shadow-2xl">            
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login
                </h2>

                <div className="mb-4">
                    <label className="text-sm">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter email"
                        className="w-full mt-1 p-3 rounded-lg bg-white text-black outline-none"
                    />
                </div>

                <div className="">
                    <label className="">Email</label>
                    <input 
                        type="password"
                        placeholder="Enter password"
                        className="w-full mt-1 p-3 rounded-lg bg-white text-black outline-none"
                    />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 
                            py-3 rounded-lg font-medium mt-2">
                    Login
                </button>

                <p className="text-sm text-center mt-4 opacity-80">
                    <a href="#">Forgot Password?</a>
                </p>
                <p className="text-sm text-center mt-4 opacity-80">
                    <a href="#" onClick={()=>setIsLogin(false)}>
                        Not Registered?Click here</a>
                </p>
            </div>:
                <SignupPage/>
        }
        </>
    );
}