import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const ismenuOpen = useSelector((store) => store.app.ismenuOpen);

  return (
    <div
      className={`fixed top-[56px] transition-all duration-300 ${
        ismenuOpen
          ? "left-[200px] w-[calc(100%-200px)]"
          : "left-[75px] w-[calc(100%-75px)]"
      } h-full border bg-white`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
