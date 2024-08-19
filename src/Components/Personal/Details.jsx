import React from "react";
import { IconUser } from "@tabler/icons-react";
export default function Details() {
  return (
    <>
      <form action="">
        <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
          <IconUser width={"20"} height={"20"} />
          &nbsp; EDIT HASSAN SARDAR - DETAILS
        </p>
        <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
        <div
          className="p-2 h-60vh overflow-auto  "
          style={{
            scrollbarWidth: "thin",
          }}
        >
          <p className="text-black-light pb-2">EMPLOYEE DETAILS</p>
          <label htmlFor="employeeid" className="text-sm text-black-light ">
            Martial Status *
          </label>
          <br />
          <select
            name="title"
            id=""
            className="p-1  bg-slate-200 rounded-lg pl-1 w-60 font-medium  border hover:border-black"
          >
            <option value="text" className="bg-slate-20 ">
              Single
            </option>
            <option className="bg-slate-200">Married</option>
          </select>
          <div className=" mt-6 pr-2 w-full border border-x-black-lighter "></div>
          <p className="text-black-light pt-3 pb-2">BANK DETAILS</p>

        </div>
      </form>
    </>
  );
}
