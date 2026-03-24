import logo3 from "../assets/logo3.png"
import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate();
    return(
        <nav className="pt-4 bg-[#0A1A2F] w-screen text-white px-12 py-4 flex mb-2 items-center justify-between shadow-lg border-b border-white/10 mt-0">
            <div className="text-2xl font-bold flex items-center gap-2">
                <span>
                    <img src={logo3} alt="RedPulse Logo" className="h-15 w-20 opacity-90"/>
                </span>
                <h5>RED PULSE</h5>
            </div>
            <ul className="hidden md:flex gap-10 pt-4 text-lg tracking-wide">
                <li className="cursor-pointer hover:text-gray-300">Features</li>
                <li className="cursor-pointer hover:text-gray-300">Impact</li>
                <li className="cursor-pointer hover:text-gray-300">Community</li>
                <li className="cursor-pointer hover:text-gray-300">Resources</li>
            </ul>
            <button
             onClick={()=> navigate("./login")}
             className="bg-yellow-600 px-4 py-2 rounded-md text-black font-semibold cursor-pointer"
            >
                Login/Sign up
            </button>
        </nav>
    )
}

export default Navbar