import React from "react";

export default function Dashbord() {
  return (
    <>
      <div className=" w-full ">
        <div className="  pt-6 w-full  flex items-center ">
          <Separate />
          <div className="bg-white p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-lg mr-12 pl-4 shadow-lg">
            <b>No Shifts Today</b>
          </div>
        </div>
      </div>
      <div className="pl-10 pt-8 text-black-light">
        <b className="">Recent Events</b>
      </div>
      <BackgroundVideo />
      <Main />
      <UpcomingMeetings />
      <CurrentMeetings />
      <div className="pl-10 pt-11">
        <b>Suggested CSRs of the Month(Coming Soon)</b>
      </div>
    </>
  );
}
