import React from "react";
import {
  IconBell,
  IconLogout,
  IconHelpOctagon,
  IconMoon,
  IconPinned,
} from "@tabler/icons-react";
export default function Nav() {
  return (
    <>
      <div className="flex justify-between m-3 gap-2 items-center ">
        <div className=" ml-10  ">
          <button>
            <IconPinned className="bg-#FBFBFC size-8 p-2 rounded-lg shadow-md  hover:opacity-65" />
          </button>
          <button>
            <IconMoon className="bg-#FBFBFC size-8 p-2 ml-4  rounded-lg shadow-md  hover:opacity-65" />
          </button>
        </div>
        <div className=" flex items-center relative">
          <button className="relative">
            <IconBell className=" bg-#FBFBFC size-8 p-2 m-2 rounded-lg shadow-md hover:opacity-65" />
            <p className="bg-red-600 text-sm absolute top-0 -right-2 text-white rounded-full">
              80
            </p>
          </button>
          <button>
            <IconHelpOctagon className="bg-#FBFBFC size-8 p-2 m-2 mr-5  rounded-lg shadow-md hover:opacity-65" />
          </button>
          <div className="rounded-2xl flex items-center bg-slate-200 px-3 py-2 shadow-md">
            <div className=" h-full w-12 ">
              <img
                className="rounded-full h-10 w-10 mr-1"
                // width={25}
                // height={30}
                src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
                alt=""
              />
            </div>
            <div className=" text-sm">
              <p className="font-medium">Hassan Sardar</p>
              <p className="text-black-light">hassansrdar626@gmail.com</p>
            </div>{" "}
            <div className="h-6 w-0.5 border border-black mx-2 "></div>
            <div className="items-end ">
              <IconLogout className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
