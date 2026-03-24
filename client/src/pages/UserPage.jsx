
import userAvatar from "../assets/logo2.png"
import LeaderCard from "../components/Layout/MainGrid/LeaderCard";
import MainGrid from "../components/Layout/MainGrid/MainGrid";
import Sidebar from "../components/Layout/Sidebar";
import TopBar from "../components/Layout/TopBar";

function UserPage(){
 return(
<div className="
  min-h-screen
  rounded-3xl
  overflow-hidden
  grid
  grid-cols-[auto_1fr_300px] z-10
">
  <div className="fixed left-0 top-0 h-screen z-50 w-24">
        <Sidebar />
      </div>

 <div className="fixed top-0 float left-19 right-0 z-40 ml-6 mt-2">
        <TopBar />
      </div>

      <div className="mt-24 ml-5">
    <MainGrid />
  </div>

  {/* Right Column */}
  <div className="pr-6 mt-9">
    <LeaderCard />
  </div>

</div>
 )
}

export default UserPage;