import React from "react";
import { IconUser } from "@tabler/icons-react";
export default function Documents() {
  return (
    <form action="">
      <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
        <IconUser width={"20"} height={"20"} />
        &nbsp; EDIT HASSAN SARDAR - DOCUMENTS
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
            <div className=" hover:bg-slate-300 rounded-sm text-red-600">X</div>
          </p>
        </div>
        <div className="mt-2 flex justify-between  w-96 m-1 p-2 rounded-lg bg-gray-100  hover:bg-gray-200 ">
          <p className="pl-2 text-m text-black-light font-thin">CNIC back</p>
          <p className="pr-2 text-m text-black-light">
            <div className=" hover:bg-slate-300 rounded-sm text-red-600">X</div>
          </p>
        </div>
      </div>
    </form>
  );
}
