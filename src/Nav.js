import React from "react";
import { IconLogout } from "@tabler/icons-react";
export default function Nav() {
  return (
    <>
      <div className="w-75 pl-148   ">
        <div className="pr-8  ml-72 mr-10 -mb-11 rounded-xl mt-4 bg-slate-200 pl-6 flex-col">
          <div className="flex items-center">
            <div>
              <p className="font-medium">Hassan Sardar</p>
              <p className="text-black-light">hassansrdar626@gmail.com</p>
            </div> &nbsp;&nbsp;&nbsp;
            <div>
              <p>│</p>
            </div>&nbsp;&nbsp;
            <div className="items-end">
              <p>
                <IconLogout/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
