import React from "react";
import { IconUser } from "@tabler/icons-react";
import {IconHelpHexagon} from "@tabler/icons-react";
export default function Credentials() {
  return (
    <form action="">
      <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
        <IconUser width={"20"} height={"20"} />
        &nbsp; EDIT HASSAN SARDAR - CREDENTIALS &nbsp; <IconHelpHexagon width={"20"} height={"20"}/>
      </p>
      <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
      <div
        className="p-2 h-60vh overflow-auto  justify-between"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <p className="text-black-light pb-1">Change's Pin</p>


      </div>
    </form>
  );
}
