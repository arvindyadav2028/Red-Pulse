import { Search, Bell, Mail, ChevronDown } from "lucide-react";

const TopBar = (props) => {
  return (
    <div 
      className="
        flex items-center justify-between
        h-20
        px-8
        mx-6 mt-4
        rounded-2xl
        bg-white/60
        backdrop-blur-xl
        border border-white/40
        shadow-sm
        z-40
      "
    >
      
      {/* 1. Left Section: Welcome Message */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-slate-800">
          Dashboard
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Welcome back, John
        </p>
      </div>

      {/* 2. Middle Section: Glass Search Bar */}
      <div className="relative w-96 group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search hospitals, reports..."
          className="
            w-full
            py-2.5 pl-10 pr-4
            rounded-xl
            bg-slate-100/50
            border border-transparent
            text-sm text-slate-700
            placeholder-slate-400
            outline-none
            transition-all duration-300
            focus:bg-white
            focus:border-cyan-200
            focus:ring-4 focus:ring-cyan-100/50
            focus:shadow-md
          "
        />
      </div>

      {/* 3. Right Section: Actions & Profile */}
      <div className="flex items-center gap-6">
        
        {/* Notification Icons */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-white/50 text-slate-500 hover:text-cyan-700 transition-all">
            <Mail size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-white/50 text-slate-500 hover:text-cyan-700 transition-all">
            <Bell size={20} />
            <span className="absolute top-1 right-2 w-2 h-2 bg-amber-400 rounded-full border border-white"></span>
          </button>
        </div>

        {/* Separator - Fixed Width */}
        <div className="h-8 w-px bg-slate-300/50"></div>

        {/* Profile Pill */}
        <button className="flex items-center gap-3 p-1.5 pr-3 rounded-full hover:bg-white/60 transition-all border border-transparent hover:border-white/40">
          <img 
            src={props.img} 
            alt="User" 
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
          />
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold text-slate-700 leading-tight">John Doe</span>
            <span className="text-[10px] text-slate-500 font-medium">Donor</span>
          </div>
          <ChevronDown size={14} className="text-slate-400 ml-1" />
        </button>

      </div>
    </div>
  );
};

export default TopBar;