import React from "react";
import { IconUser } from "@tabler/icons-react";
import { IconHelpHexagon } from "@tabler/icons-react";
export default function Credentials() {
  return (
    <form action="">
      <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
        <IconUser width={"20"} height={"20"} />
        &nbsp; EDIT HASSAN SARDAR - CREDENTIALS &nbsp;{" "}
        <IconHelpHexagon width={"20"} height={"20"} />
      </p>
      <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
      <div
        className="p-2 h-60vh overflow-auto  justify-between"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <p className="text-black-light pb-1">CHANGE PIN</p>
        <div className="grid grid-rows-1 grid-flow-col mt-2 ">
          <div className="w-20 ">
            <label htmlFor="employeeid" className=" text-sm text-black-light ">
              New Pin
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder=""
              className="mt-1 p-1 bg-slate-200 rounded-lg w-64 border hover:border-black"
            />
          </div>
          <div className="w-112">
            <label htmlFor="employeeid" className=" text-sm text-black-light ">
              Confirm New Pin
            </label>
            <br />
            <input
              type="password"
              name="confirmnewpin"
              placeholder=""
              className="mt-1 p-1 bg-slate-200 rounded-lg  w-64 border hover:border-black"
            />
          </div>
        </div>
        <div className="mt-6 mb-3 pr-2 w-full border border-x-black "></div>
        <p className="text-black-light pb-1">CHANGE PASSWORD</p>
        <div className="grid grid-rows-1 grid-flow-col mt-2  ">
          <div className="w-28">
            <label htmlFor="employeeid" className=" text-sm text-black-light ">
              Current Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder=""
              className="mt-1 p-1 bg-slate-200 rounded-lg w-64 border hover:border-black"
            />
          </div>
          <div className="w-28">
            <label htmlFor="employeeid" className=" text-sm text-black-light ">
              Current Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder=""
              className="mt-1 p-1 bg-slate-200 rounded-lg w-64 border hover:border-black"
            />
          </div>
          <div className="w-48">
            <label htmlFor="employeeid" className=" text-sm text-black-light ">
              Confirm New Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder=""
              className="mt-1 p-1 bg-slate-200 rounded-lg w-64 border hover:border-black"
            />
          </div>
        </div>
        <div className="mt-8 flex items-end justify-end gap-6">
              <button className="bg-blue-100 p-2 rounded-md text-blue-700 pl-10 pr-10 font-medium hover:opacity-55">
                SAVE
              </button>
              <button className="bg-purple-100 p-2 rounded-md text-purple-700 pl-10 pr-10 font-medium hover:opacity-55">
                BACK
              </button>
              <button className="bg-green-100 p-2 rounded-md text-green-700 pl-10 pr-10 font-medium hover:opacity-55">
                SAVE & EXIT
              </button>
            </div>
      </div>
    </form>
  );
}
