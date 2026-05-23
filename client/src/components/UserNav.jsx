import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import logo3 from "../assets/logo3.png"
function UserNav() {
  return (
    <nav className='h-16 bg-[#0A1A2F] w-full text-gray-50 pl-12 pr-4 flex mb-4 items-center justify-between shadow-lg border-b border-white/10 mt-0'>
      <div className='text-2xl font-bold flex items-center gap-2'>
        <span>
             <img src={logo3} alt="Lifeline logo" className="h-8 w-auto opacity-90" />           
         </span>
         <h4>Life Line</h4>
      </div>

      <ul className="hidden md:flex gap-8 items-center text-lg  tracking-wide">
        <li className='cursor-pointer hover:text-slate-50'>Home</li>
        <li className='cursor-pointer hover:text-slate-50'>Calander</li>
        <li className='cursor-pointer hover:text-slate-50'>Tracking</li>
        <li className='cursor-pointer hover:text-slate-50'>Leaderboard</li>
      </ul>

      <div className='flex  justify-end p-0 items-center'>
        <button className='p-2  bg-transparent cursor-pointer '>
             <FontAwesomeIcon icon={["fas", "bell"]} className="text-white text-lg" />
        </button>
        <button className='p-2  bg-transparent cursor-pointer'>
             <FontAwesomeIcon icon={["far", "circle-user"]} className="text-white text-lg" />
        </button>
      </div>
    </nav>
  )
}

export default UserNav
