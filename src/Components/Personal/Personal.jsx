import React from "react";
export default function Personal() {
  return (
    <>
    <div className="  pt-2 ml-4 w-full  flex ">
      <div className="pt-10 ml-4 bg-white p-5  w-3/4 border-2 rounded-lg shadow-md">
        <b>Testing Company</b>
        <div className="flex">
          <div className="flex-col">
            <p className="pt-2">Status:Meeting</p>
            <p>Joining Date:&nbsp;5/28/2024</p>
          </div>

          <div className=" pl-56 flex-col font-normal text-black">
            <p className="pt-2">Asif Wani</p>
            <p>testingcompany@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
