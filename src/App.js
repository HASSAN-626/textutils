import "./App.css";
import { useState } from "react";
import Separate from "./Separate";
import Dashboard from "./Dashboard";
import CurrentMeetings from "./CurrentMeetings";
import UpcomingMeetings from "./UpcomingMeetings";
import BackgroundVideo from "./BackgroundVideo";
import Nav from "./Nav";
function App() {
  return (
    <>
      <div className="bg-gray-50 ">
        <div className="flex flex-row">
          <Dashboard/>
          <div className="flex flex-col w-full ml-48">
            <Nav/>
            <div className=" w-full ">
              <div className="  pt-24 w-full  flex items-center ">
                <Separate />
                <div className="bg-gray-100 p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-md ">
                  <b>No Shifts Today</b>
                </div>
              </div>
            </div>
            <div className="pl-5 pt-10 font-sans md:font-sans">
              <b>Recent Events</b>
            </div>
            <BackgroundVideo/>
            <UpcomingMeetings/>
            <CurrentMeetings/>
            <div className="pl-5 pt-11">
              <b>Suggested CSRs of the Month(Coming Soon)</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
