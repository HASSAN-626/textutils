import React from "react";

export default function UpcomingMeetings() {
  return (
    <>
      <div className="pl-5 pt-16 ">
        <b className="text-black-light text-xl pl-5">Current Openings</b>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="pl-3 pr-3 font-semibold text-blue-500 rounded-2xl bg-blue-200 hover:bg-blue-300">
          View All
        </button>
        <div className=" w-full ">
          <div className="  pt-12 w-full  flex items-center  ">
            <div className="bg-white p-5  w-full h-28 rounded-lg shadow-md ml-4">
              <p className="flex items-center  justify-center ">
                New Life Investment
              </p>
            </div>
            <div className="bg-white p-5 h-28 flex items-center justify-center ml-2 w-full rounded-lg shadow-md">
              <b>Coming Soon</b>
            </div>
            <div className="flex items-center justify-center bg-white p-5 h-28  ml-2 w-full rounded-lg mr-4 shadow-md">
              <b>Coming Soon</b>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className="  pt-2 w-full  flex items-center ">
            <div className="bg-white p-5  w-full h-28 rounded-lg shadow-md ml-4">
              <p className="flex items-center justify-center ">247 Cars</p>
            </div>
            <div className="bg-white p-5 h-28 flex items-center justify-center  ml-2 w-full rounded-lg shadow-md">
              <b>Coming Soon</b>
            </div>
            <div className="bg-white p-5 h-28  ml-2 w-full rounded-lg flex items-center justify-center mr-4 shadow-md">
              <b>Coming Soon</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
