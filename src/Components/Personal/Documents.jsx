import React from "react";
import { IconUser } from "@tabler/icons-react";
import { IconHelpHexagon } from "@tabler/icons-react";
export default function Documents() {
  return (
    <form action="">
      <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
        <IconUser width={"20"} height={"20"} />
        &nbsp; EDIT HASSAN SARDAR - DOCUMENTS&nbsp;<IconHelpHexagon width={"20"} height={"20"}/>
      </p>
      <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
      <div
        className="p-2 h-60vh overflow-auto  justify-between"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <p className="text-black-light pb-1">EMPLOYEE DOCUMENTS</p>
        <div className=" flex items-end justify-end gap-5">
          <button className="bg-blue-100 p-2 rounded-md text-blue-700 pl-9 pr-9 font-medium hover:opacity-55">
            SAVE & NEXT
          </button>
          <button className="bg-purple-100 p-2 rounded-md text-purple-700 pl-9 pr-9 font-medium hover:opacity-55">
            NEXT
          </button>
          <button className="bg-green-100 p-2 rounded-md text-green-700 pl-9 pr-9 font-medium hover:opacity-55">
            SAVE & EXIT
          </button>
        </div>
        <div className="flex justify-between  w-96 m-1 p-2 rounded-lg bg-gray-200  hover:bg-gray-200 ">
          <p className="pl-2 text-m text-black-lighter">Name</p>
          <p className="pr-2 text-m text-black-light">
            <div className=" hover:bg-slate-300 rounded-sm ">Actions</div>
          </p>
        </div>
        <div className="mt-2 flex justify-between  w-96 m-1 p-2 rounded-lg bg-gray-100  hover:bg-gray-200 ">
          <p className="pl-2 text-m text-black-light font-thin">CNIC Front</p>
          <p className="pr-2 text-m text-black-light">
            <div className=" hover:bg-slate-300 rounded-sm text-red-600 pl-1 pr-1">X</div>
          </p>
        </div>
        <div className="mt-2 flex justify-between  w-96 m-1 p-2 rounded-lg bg-gray-100  hover:bg-gray-200 ">
          <p className="pl-2 text-m text-black-light font-thin">CNIC back</p>
          <p className="pr-2 text-m text-black-light">
            <div className=" hover:bg-slate-300 rounded-sm text-red-600 pl-1 pr-1">X</div>
          </p>
        </div>
        
        <div className="mt-2 flex justify-between  w-96 m-1 p-2 rounded-lg bg-gray-300  ">
          <p className="pl-2 text-m text-black-light text-sm">Document Type <br />
          
          
          <select
            name="title"
            id=""
            className="p-1 mt-1  bg-gray-200 rounded-lg pl-1 w-48 font-medium  border hover:border-black"
          >
            <option value="text" className="bg-slate-20 ">
              Phd
            </option>
            <option className="bg-slate-200">Master</option>
            <option className="bg-slate-200">Bachelors</option>
            <option className="bg-slate-200">Metric</option>
            <option className="bg-slate-200">Inter</option>
            <option className="bg-slate-200">Portfolio</option>
            <option className="bg-slate-200">Resume</option>
            <option className="bg-slate-200">CNIC Front</option>
            <option className="bg-slate-200">CNIC Back</option>
            <option className="bg-slate-200">License</option>
          </select>
          
          </p>
          <p className="pr-2 text-m text-black-light">
            <button className="hover:opacity-80 rounded-md p-1 mt-3 pl-3 pr-3 bg-primary text-slate-200 font-thin">Upload</button>
          </p>
        </div>

      </div>
    </form>
  );
}
