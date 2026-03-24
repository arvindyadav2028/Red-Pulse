import { LayoutDashboard, Hospital, CalendarHeart, Trophy, Siren } from 'lucide-react'

const Sidebar = () => {
  // Common style for the icons to keep code clean
  const iconStyle = "flex items-center justify-center w-12 h-12 text-slate-300 rounded-xl transition-all duration-400 hover:bg-white hover:text-[#0A1A2F] hover:shadow-lg hover:scale-110 cursor-pointer";

  return (
    <div 
      className="
        fixed
        top-4
        left-6
        w-24
        h-[calc(100vh-2rem)]
        rounded-3xl
        flex flex-col
        items-center
        justify-center
        gap-8
        z-50
        
        /* DARK GLASSMORPHISM STYLES */
        bg-[#0f172a]/90        /* Dark Blue with 70% Opacity */
        backdrop-blur-xl       /* Heavy Blur */
        border-white/10 /* Subtle light border for edge definition */
        shadow-2xl shadow-black/20
      "
    >
      <span className={iconStyle}>
        <LayoutDashboard size={24} />
      </span>

      <span className={iconStyle}>
        <Hospital size={24} />
      </span>

      <span className={iconStyle}>
        <CalendarHeart size={24} />
      </span>

      <span className={iconStyle}>
        <Trophy size={24} />
      </span>

      <span className={iconStyle}>
        <Siren size={24} />
      </span>
    </div>
  )
}

export default Sidebar