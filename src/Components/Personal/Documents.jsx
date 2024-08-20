import React from "react";

export default function Documents() {
  return (
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
      </div>
    </form>
  );
}
