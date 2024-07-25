import React from "react";
import {
  IconBell,
  IconLogout,
  IconHelpOctagon,
  IconMoon,
} from "@tabler/icons-react";
export default function Nav() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="  flex justify-start  ">
          <button>
            <IconMoon className="bg-#FBFBFC size-8   rounded-lg shadow-md " />
          </button>
        </div>
        <div className="  gap-2 ">
          <button>
            <IconBell className="bg-#FBFBFC size-8  rounded-lg shadow-md" />
          </button>
          <button>
            <IconHelpOctagon className="bg-#FBFBFC size-8  rounded-lg shadow-md " />
          </button>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className=" flex   ">
          <div className="rounded-2xl  bg-slate-200 pl-1 flex-col shadow-md">
            <div className="flex items-center">
              <img
                className="rounded-full "
                width={30}
                height={30}
                src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
                alt=""
              />
              <div className="pl-3">
                <p className="font-medium">Hassan Sardar</p>
                <p className="text-black-light">hassansrdar626@gmail.com</p>
              </div>{" "}
              &nbsp;&nbsp;&nbsp;
              <div>
                <p>│</p>
              </div>
              &nbsp;&nbsp;
              <div className="items-end ">
                <p>
                  <IconLogout className="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
