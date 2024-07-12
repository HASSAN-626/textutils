import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="px-10 py-20  h-screen border border-gray-900 fixed left-0 font-sans md:font-serif">
          <a href="" className="p-3">
            <li>Dashboard</li>
          </a>
          <a href="" className="p-3">
            <li>Personal</li>
          </a>
          <a href="" className="p-3">
            <li>My Rota</li>
          </a>
          <a href="" className="p-3">
            <li>Inbox</li>
          </a>
          <a href="" className="p-3">
            <li>c2o Profile</li>
          </a>
          <a href="" className="p-3">
            <li>Chats</li>
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
                <p>
                  Remember every good conversation starts with listening..
                </p>
              </div>

              <div className="bg-gray-100 p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-md ">
                <b>No Shifts Today</b>
              </div>
            </div>
          </div>
          <div className="pl-5 pt-10 font-sans md:font-serif">
            <p>Recent Events</p>
          </div>
          <video muted loop autoPlay className="rounded-lg  m-10 ">
          <source src="./WhatsApp Video 2024-07-12 at 12.33.28 PM.mp4" className="" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
// h-screen bg-gradient-to-r from-cyan-500 to-blue-500
