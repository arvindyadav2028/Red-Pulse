import logo3 from "../assets/logo3.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="bg-[#0A1A2F] w-full text-white px-8 md:px-12 py-4 flex items-center justify-between shadow-lg border-b border-white/10">
            <button
                onClick={() => navigate("/")}
                className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
                <img src={logo3} alt="RedPulse Logo" className="h-10 w-14 opacity-90 object-contain" />
                <span className="tracking-wider">RED PULSE</span>
            </button>

            <ul className="hidden md:flex gap-8 text-sm tracking-wide text-white/80">
                <li className="cursor-pointer hover:text-white transition-colors">Features</li>
                <li className="cursor-pointer hover:text-white transition-colors">Impact</li>
                <li className="cursor-pointer hover:text-white transition-colors">Community</li>
                <li className="cursor-pointer hover:text-white transition-colors">Contact</li>
            </ul>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => navigate("/login")}
                    className="text-sm text-white/80 hover:text-white px-4 py-2 rounded-lg border border-white/20 hover:border-white/50 transition-all"
                >
                    Log in
                </button>
                <button
                    onClick={() => navigate("/signup")}
                    className="text-sm bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                    Sign up
                </button>
            </div>
        </nav>
    );
}
