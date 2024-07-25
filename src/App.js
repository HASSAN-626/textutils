import "./App.css";
import { useState } from "react";
import Separate from "./Separate";
import Dashboard from "./Dashboard";
import CurrentMeetings from "./CurrentMeetings";
import UpcomingMeetings from "./UpcomingMeetings";
import BackgroundVideo from "./BackgroundVideo";
import Nav from "./Nav";
import Body from "./Body";
function App() {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="flex flex-row">
          <Dashboard/>
          <div className="flex flex-col w-full ml-48">
            <Nav/>
            <div className=" w-full ">
              <div className="  pt-24 w-full  flex items-center ">
                <Separate />
                <div className="bg-white p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-lg mr-12 pl-4 shadow-lg">
                  <b>No Shifts Today</b>
                </div>
              </div>
              
            </div>
            <div className="pl-10 pt-8 text-black-light">
              <b className="">Recent Events</b>
            </div>
            <BackgroundVideo/>
            <Body/>
            <UpcomingMeetings/>
            <CurrentMeetings/>
            <div className="pl-10 pt-11">
              <b>Suggested CSRs of the Month(Coming Soon)</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
