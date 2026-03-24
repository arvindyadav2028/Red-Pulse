import React from "react";
import { HeartPulse, Syringe, Droplets, Calendar } from "lucide-react";

// Reusable component for the inner stat cards
const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-slate-700
        border border-white/40
        rounded-2xl
        h-32 w-36
        backdrop-blur-md
        bg-white/40
        shadow-sm
        hover:bg-white/60 hover:scale-105 hover:shadow-md
        transition-all duration-300 cursor-pointer
      "
    >
      <Icon size={28} className="mb-2 text-cyan-600" />
      <h4 className="text-2xl font-bold">{value}</h4>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
};

const ProfileCard = () => {
  return (
    // A wrapper with a background is needed to see the glassmorphism effect
    <div className="flex items-center justify-center bg-linear-to-br from-cyan-100 via-sky-200 to-cyan-100 p-4 h-[350px] w-[800px] ml-15 mt-9 rounded-2xl">
      
      {/* Main Glassmorphic Div */}
      <div
        className="
          w-[750px]
          h-[300px]
          p-8
          rounded-3xl
          flex flex-col
          backdrop-blur-2xl
          bg-linear-to-br from-sky-100/50 to-sky-50/30
          border border-white/50
          shadow-xl shadow-sky-200/30
        "
      >
        {/* Title */}
        <h4 className="font-semibold text-slate-700 text-xl">
          Patient's Donation History
        </h4>

        {/* Divider */}
        <hr className="w-full border-t border-black/50 my-4" />

        {/* Stats Section */}
        <div className="flex justify-between items-center flex-1 gap-6">
          <StatCard icon={HeartPulse} value="51" label="Lives Saved" />
          <StatCard icon={Syringe} value="17" label="Times donated" />
          <StatCard icon={Droplets} value="7.5L" label="Amount donated" />
          <StatCard icon={Calendar} value="2021" label="Donor Since" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;