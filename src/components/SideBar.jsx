import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const ismenuOpen = useSelector((store) => store.app.ismenuOpen);

  return ismenuOpen ?
    <div className="fixed top-[56px] w-[200px] bg-gray-200 h-full transition-all duration-300">
drurtjurtfh
    </div> : (
      <div className={`fixed top-[56px] bg-gray-200 h-full transition-all duration-300 w-[75px]`} >
         <div className="flex flex-col items-center py-4 gap-6">
        <div className="flex flex-col items-center text-center">
          <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/109/109588.png" alt="homeicon" />
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="w-6" src="https://img.icons8.com/m_rounded/512/youtube-shorts.png" alt="exploreicon" />
          <p className="text-xs">Shorts</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="w-6" src="https://cdn1.iconfinder.com/data/icons/youtube-23/31/Vector-4-512.png" alt="subscriptionsicon" />
          <p className="text-xs">Subscriptions</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img className="w-6" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="libraryicon" />
          <p className="text-xs">You</p>
        </div>
      </div>

      </div>
    );
};

export default SideBar;
