import React from "react";
import { IconUser } from "@tabler/icons-react";
export default function Credentials() {
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


      </div>
    </form>
  );
}
