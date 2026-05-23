import hero1 from "../assets/hero1.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    return (
        <div className="relative h-[90vh] w-full flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${hero1})` }}
            />
            {/* gradient overlay — use inline style instead of bg-linear-to-r (not valid Tailwind v3) */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, rgba(10,26,47,0.96) 0%, rgba(10,26,47,0.80) 55%, transparent 100%)" }}
            />
            <div className="relative z-10 max-w-3xl px-8 md:px-12 py-20">
                <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
                    Blood Management Platform
                </span>
                <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                    Bridging the gap<br />in blood management
                </h1>
                <p className="text-gray-300 text-lg mt-6 max-w-md leading-relaxed">
                    A comprehensive platform connecting donors, hospitals and blood banks for a healthier tomorrow.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                    <button
                        onClick={() => navigate("/signup")}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors shadow-lg"
                    >
                        Get started
                    </button>
                    <button
                        onClick={() => {
                            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-colors"
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
}
