import React from 'react'

export default function UpcomingMeetings() {
  return (
    <>
    <div className="pl-5 pt-6 font-sans md:font-serif border border-black">
              <b>Upcoming Meetings</b>{" "}
              <button
                className="p-2 text-zinc-50 rounded
             bg-slate-500"
              >
                View All
              </button>
              <p className="pt-5 pl-14">No Schedule Meeting</p>
            </div>
            <div className="  pt-2  w-full  flex ">
              <div className="pt-10 bg-slate-50 p-5  w-3/4 border-2 border-sky-200  ">
                <b>Testing Company</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>

              <div className="pt-9 bg-slate-50 p-5 h-40  ml-2 w-3/4 rounded-md border-2 border-y-sky-200 ">
                <b>HBL TEST</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>
            </div>
            <div className="  pt-2  w-full  flex ">
              <div className="pt-10 bg-slate-50 p-5  w-3/4  border-2 border-y-sky-200 ">
                <b>Testing Company</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>

              <div className="pt-9 bg-slate-50 p-5 h-40 ml-2 w-3/4 rounded-md border-2 border-y-sky-200  ">
                <b>HBL TEST</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>
            </div>
    </>
  )
}
