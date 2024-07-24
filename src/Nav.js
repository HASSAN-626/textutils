import React from "react";
import { IconLogout } from "@tabler/icons-react";
import { IconHelpOctagon } from "@tabler/icons-react";
export default function Nav() {
  return (
    <>
    <div className="w-25 ">
      <button><IconHelpOctagon /></button>
    </div>
      <div className="w-75 pl-136   ">
        <div className="pr-12  ml-80 mr-8 -mb-11 rounded-2xl mt-4 bg-slate-200 pl-6 flex-col">
          <div className="flex items-center">
            <img  className="rounded-full " width={30} height={30} src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg" alt="" />
            <div className="pl-3">
              <p className="font-medium">Hassan Sardar</p>
              <p className="text-black-light">hassansrdar626@gmail.com</p>
            </div> &nbsp;&nbsp;&nbsp;
            <div>
              <p>│</p>
            </div>&nbsp;&nbsp;
            <div className="items-end ">
              <p>
                <IconLogout className=""/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
