import React from 'react'

export default function UpcomingMeetings() {
  return (
    <>
    <div className="pl-5 pt-6  ">
              <b className='text-black-light text-xl'>Upcoming Meetings</b>&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="p-2 text-blue-500 rounded-2xl bg-blue-200"
              >
                View All
              </button>
              <p className="pt-5 pl-14 text-black-lighter text-lg mb-10">No Schedule Meeting</p>
            </div>
            <div className="  pt-2 ml-4 w-full  flex ">
              <div className="pt-10 ml-4 bg-slate-50 p-5  w-3/4 border-2 rounded-lg ">
                <b>Testing Company</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>

              <div className="pt-9 ml-4 bg-slate-50 p-5 h-40   w-3/4 rounded-lg border-2 ">
                <b>HBL TEST</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>
            </div>
            <div className="  pt-2 ml-4 w-full  flex ">
              <div className="pt-10 ml-4 bg-slate-50 p-5  w-3/4 rounded-lg border-2  ">
                <b>Testing Company</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>

              <div className="pt-9 ml-4 bg-slate-50 p-5 h-40  w-3/4 rounded-lg border-2   ">
                <b>HBL TEST</b>
                <p className="pt-2">Status:Meeting</p>
                <p>Joining Date:5/28/2024</p>
              </div>
            </div>
    </>
  )
}
