import React from "react";
import { IconBell, IconLogout, IconHelpOctagon  } from "@tabler/icons-react";
export default function Nav() {
  return (
    <>
    <div className=" w-52 pl-24 flex text-center m-8 mr-44   gap-4 ml-148  -mb-11 ">
      <button><IconBell className="bg-#FBFBFC size-10 pl-1 pr-1 rounded-2xl shadow-md" /></button>
      <button><IconHelpOctagon className="bg-#FBFBFC size-10 pl-1 pr-1 rounded-2xl shadow-md hover:bg-black-light" /></button>
    </div>
      <div className="w-75 pl-136   ">
        <div className="pr-12  ml-80 mr-8 -mb-11 rounded-2xl  bg-slate-200 pl-6 flex-col shadow-md">
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
