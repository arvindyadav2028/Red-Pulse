import React from 'react'
import {Crown} from 'lucide-react'
const LeaderCard = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-cyan-100 via-sky-200 to-cyan-100 p-4 h-[550px] w-[300px] ml-4 mr-10 mt-25 rounded-2xl">
    <div
        className="
          w-[250px]
          h-[500px]
          p-8
          rounded-3xl
          flex flex-col
          backdrop-blur-2xl
          bg-gradient-to-br from-sky-100/50 to-sky-50/30
          border border-white/50
          shadow-xl shadow-sky-200/30
        "
      >
       <h4 className="font-semibold text-slate-700 text-xl gap-3  flex row">Leaderboard <Crown /></h4>

         <hr className="w-full border-t border-black/50 my-4" />

    </div>
    </div>
  )
}

export default LeaderCard
