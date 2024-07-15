import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
    <div className="bg-gray-100">
      <div className="flex flex-row">
        <div className="px-10 py-20  h-screen border border-gray-900 fixed left-0 font-sans md:font-serif">
          <a href="" className="p-3">
            <li>Dashboard</li>
          </a>
          <a href="" className="p-4">
            <li>Personal</li>
          </a>
          <a href="" className="p-4">
            <li>My Rota</li>
          </a>
          <a href="" className="p-4">
            <li>Inbox</li>
          </a>
          <a href="" className="p-4">
            <li>c2o Profile</li>
          </a>
          <a href="" className="p-4">
            <li>Chats</li>
          </a>
          <a href="" className="p-4">
            <li>ATS</li>
          </a>
          <a href="" className="p-4">
            <li>CMS</li>
          </a>
          <a href="" className="p-4">
            <li>OCCS</li>
          </a>
          <a href="" className="p-4">
            <li>Preference</li>
          </a>
        </div>
        <div className="flex flex-col w-full ml-48">
          <div className="bg-gray-100  text-right ">
            <p>Abdul Manan</p>
            <p>abdulmzak36@gmail.com</p>
          </div>
          <div className=" w-full ">
            <div className="  pt-24 w-full  flex items-center ">
              <div className="bg-gray-100 p-5  w-3/4 ">
                <p>
                  <b>Good Morning!</b>
                </p>
                <b> Abdul Manan </b>
                <p>Remember every good conversation starts with listening..</p>
              </div>

              <div className="bg-gray-100 p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-md ">
                <b>No Shifts Today</b>
              </div>
            </div>
          </div>
          <div className="pl-5 pt-10 font-sans md:font-serif">
            <b>Recent Events</b>
          </div>
          <video muted loop autoPlay className="rounded-lg  m-10 ">
            <source
              src="./WhatsApp Video 2024-07-12 at 12.33.28 PM.mp4"
              className=""
              type="video/mp4"
            ></source>
          </video>
          <div className="pl-5 pt-6 font-sans md:font-serif">
            <b>Upcoming Meetings</b>       <button className=" text-zinc-50 rounded
             bg-slate-500">View All</button>
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
            
          <div className="pl-5 pt-6 font-sans md:font-serif">
            <b>Current Meetings</b>       <button className=" text-zinc-50 rounded
             bg-slate-500">View All</button>
            <p className="pt-5 pl-14">No Job Openings</p>
          </div>
          
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
// h-screen bg-gradient-to-r from-cyan-500 to-blue-500
