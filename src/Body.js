import React from "react";
import { IconBuildingSkyscraper} from "@tabler/icons-react";
import { IconUsers} from "@tabler/icons-react";
import {IconDeviceLaptop} from "@tabler/icons-react";
export default function Body() {
  return (
    <div>
      <div className=" w-full ">
        <div className="  pb-7 w-full p-8 flex items-center ">
          <div className="bg-gray-100 pl-4 p-2 flex  w-full h-18 font-semibold rounded-3xl"> 
              <p className="flex items-center">
                <IconBuildingSkyscraper/>
                <div className="flex-col pl-6">
                29
                <p>Total Companies</p>
                </div>
              </p>
          </div>
          <div className="bg-gray-100  p-4 m-4  w-full h-16 flex items-center font-semibold rounded-3xl ">
            <p className="flex items-center">
            <IconUsers/>
            <div className="flex-col pl-6">
              183
              <p>Employees</p>
              </div>
            </p>
          </div>
          <div className="bg-gray-100  p-4 m-2 flex items-center  w-full h-16 font-semibold rounded-3xl ">
            <p className="flex items-center">
            <IconDeviceLaptop/>
            <div className="flex-col pl-6">
              1325
              <p>Total Hardware</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
