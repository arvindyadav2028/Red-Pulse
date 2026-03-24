import hero1 from "../assets/hero1.png";

function Hero(){
    return(
        <div className="relative h-[90vh] w-screen flex items center mt-0 overflow-hidden">
            <div
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: `url(${hero1})`}}
            ></div>
            <div className="absolute inset-0 bg-linear-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/80 to-transparent"></div>
            <div className="relative z-10 max-w-3xl px-12 py-20">
                <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                    RED PULSE: Bridging the gap <br/> in Blood Management
                </h1>
                <p className="text-gray-200 text-lg mt-6 max-w-md text-center font-bold">
                    A comprehesive platform for a healthier tommorow
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="bg-white text-[#0A1A2F] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                        Learn More
                    </button>
                    <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0A1A2F] transition">
                        Set in Action
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero