import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import MainGridChart from "./MainGridChart";

const ChartSection = () => {
  const [open, setOpen] = useState(false);

  return (
     <div className="flex items-center justify-center bg-linear-to-br from-cyan-100 via-sky-200 to-cyan-100 p-4 h-[350px] w-[800px] ml-15 mt-6 mb-5 rounded-2xl ">
    <div
      className="
        w-[800px]
        h-[300px]
          p-6 
        rounded-2xl
        flex flex-col
        
        /* Light Glassmorphism Styles */
      bg-linear-to-br from-cyan-100 via-sky-200 to-cyan-100
        backdrop-blur-2xl
        border border-white/60
        shadow-xl shadow-sky-200/30
      "
    >
      {/* Header Container (Title + Dropdown) */}
      <div className="flex justify-between items-start relative z-20">
        
       <h4 className="font-semibold text-slate-700 text-xl">
          Donation Timeline
        </h4>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="
              flex items-center gap-2 px-3 py-1.5
              rounded-lg 
              bg-white/40 hover:bg-white/60
              border border-white/50
              text-slate-600 text-sm font-medium
              transition-all duration-200
            "
          >
            Weekly
            <ChevronDown size={16} className="text-slate-500" />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div
              className="
                absolute right-0 mt-2 w-32
                bg-white/90 backdrop-blur-xl
                border border-white/60
                rounded-lg shadow-lg
                text-sm text-slate-600
                overflow-hidden
                z-50
              "
            >
              <div
                onClick={() => setOpen(false)}
                className="px-3 py-2 hover:bg-sky-50 hover:text-cyan-700 cursor-pointer transition-colors"
              >
                Daily
              </div>
              <div
                onClick={() => setOpen(false)}
                className="px-3 py-2 hover:bg-sky-50 hover:text-cyan-700 cursor-pointer transition-colors"
              >
                Weekly
              </div>
              <div
                onClick={() => setOpen(false)}
                className="px-3 py-2 hover:bg-sky-50 hover:text-cyan-700 cursor-pointer transition-colors"
              >
                Monthly
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
     <hr className="w-full border-t border-black/50 my-4" />

      {/* Content Area */}
      <div className="flex justify-between items-center flex-1">
        
        {/* Left Side - Stats */}
        <div className="flex flex-col items-start pl-2">
          <h3 className="text-4xl font-bold text-cyan-700 drop-shadow-sm  hover:bg-cyan/60 hover:scale-105
        transition-all duration-300 cursor-pointer">
            20%
          </h3>
          <p className="text-sm text-slate-500 font-medium mt-1">
            More Donations This Year
          </p>
         
        </div>

        {/* Right Side - Chart Wrapper */}
        <div className="w-[500px] h-[170px] text-black">
          <MainGridChart />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChartSection;