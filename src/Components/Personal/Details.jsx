import React, { useState } from "react";
import { IconUser, IconHelpHexagon } from "@tabler/icons-react";
export default function Details() {
  const [data, setData] = useState({
  martialStatus:"Single",
  bankName:"Nayapay",
  branchName:"Online",
  accountTitle:"Savings",
  accountNumberIBAN:"03165105988",
  });
  function handleIdChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setData((d) => {
      d[name] = value;
      return { ...d };
    });
  }

  console.log(data); 
  return (
    <>
      <form action="">
        <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
          <IconUser width={"20"} height={"20"} />
          &nbsp;EDIT HASSAN SARDAR - DETAILS &nbsp;{" "}
          <IconHelpHexagon width={"20"} height={"20"} />
        </p>
        <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
        <div
          className="p-2 h-60vh overflow-auto  "
          style={{
            scrollbarWidth: "thin",
          }}
        >
          <p className="text-black-light pb-2">EMPLOYEE DETAILS</p>
          <label htmlFor="employeeid" className="text-sm text-black-light ">
            Martial Status *
          </label>
          <br />
          <select
            name="martialstatus"
            value={data.martialstatus}
            onChange={handleIdChange}
            id=""
            className="p-1  bg-slate-200 rounded-lg pl-1 w-60 font-medium  border hover:border-black"
          >
            <option value="text" className="bg-slate-20 ">
              Single
            </option>
            <option className="bg-slate-200">Married</option>
          </select>
          <div className=" mt-6 pr-2 w-full border border-x-black-lighter "></div>
          <p className="text-black-light pt-3 pb-2">BANK DETAILS</p>
          <div className="grid grid-rows-1 grid-flow-col mt-2  ">
            <div>
              <label htmlFor="bankname" className="text-sm text-black-light">
                Bank Name *
              </label>
              <br />
              <input
                type="text"
                name="bankName"
                value={data.bankName}
                onChange={handleIdChange}
                placeholder=""
                className="p-1 bg-slate-200 rounded-lg pl-3 w-56 border hover:border-black"
              />
            </div>
            <div>
              <label htmlFor="branchname" className="text-sm text-black-light">
                Branch Name *
              </label>
              <br />
              <input
                type="text"
                name="branchName"
                value={data.branchName}
                onChange={handleIdChange}
                placeholder=""
                className="p-1 bg-slate-200 rounded-lg pl-3 w-56 border hover:border-black"
              />
            </div>
            <div>
              <label htmlFor="accountitle" className="text-sm text-black-light">
                Account Title *
              </label>
              <br />
              <input
                type="text"
                name="accountTitle"
                value={data.accountTitle}
                onChange={handleIdChange}
                className="p-1 bg-slate-200 rounded-lg pl-3 w-56 border hover:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="accountnumber"
                className="text-sm text-black-light"
              >
                Account Number / IBAN *
              </label>
              <br />
              <input
                type="text"
                name="accountNumberIBAN"
                value={data.accountNumberIBAN}
                onChange={handleIdChange}
                className="p-1 bg-slate-200 rounded-lg pl-3 w-56 border hover:border-black"
              />
            </div>
          </div>
          <div className="mt-5 flex items-end justify-end gap-5">
            <button className="bg-blue-100 p-2 rounded-md text-blue-700 pl-10 pr-10 font-medium hover:opacity-55">
              SAVE & NEXT
            </button>
            <button className="bg-purple-100 p-2 rounded-md text-purple-700 pl-10 pr-10 font-medium hover:opacity-55">
              NEXT
            </button>
            <button className="bg-green-100 p-2 rounded-md text-green-700 pl-10 pr-10 font-medium hover:opacity-55">
              SAVE & EXIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
