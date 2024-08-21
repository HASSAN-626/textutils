import React, { useState } from "react";
import { IconUser, IconHelpHexagon, IconEye, IconEyeOff } from "@tabler/icons-react";

export default function Credentials() {
  // State to manage visibility for each password field
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmNewPin, setShowConfirmNewPin] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = (setter) => () => setter(prev => !prev);

  return (
    <form action="">
      <p className="pl-3 pb-5 text-black font-semibold flex h-4 items-center">
        <IconUser width={"20"} height={"20"} />
        &nbsp; EDIT HASSAN SARDAR - CREDENTIALS &nbsp;{" "}
        <IconHelpHexagon width={"20"} height={"20"} />
      </p>
      <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter"></div>
      <div
        className="p-2 h-60vh overflow-auto"
        style={{ scrollbarWidth: "thin" }}
      >
        <p className="text-black-light pb-1">CHANGE PIN</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="relative w-full">
            <label htmlFor="newpin" className="text-sm text-black-light">
              New Pin
            </label>
            <br />
            <div className="relative">
              <input
                type={showNewPin ? "text" : "password"}
                name="newpin"
                placeholder=""
                className="mt-1 p-2 bg-slate-200 rounded-lg border w-full pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility(setShowNewPin)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showNewPin ? <IconEyeOff width="20" height="20" /> : <IconEye width="20" height="20" />}
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <label htmlFor="confirmnewpin" className="text-sm text-black-light">
              Confirm New Pin
            </label>
            <br />
            <div className="relative">
              <input
                type={showConfirmNewPin ? "text" : "password"}
                name="confirmnewpin"
                placeholder=""
                className="mt-1 p-2 bg-slate-200 rounded-lg border w-full pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility(setShowConfirmNewPin)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showConfirmNewPin ? <IconEyeOff width="20" height="20" /> : <IconEye width="20" height="20" />}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-3 pr-2 w-full border border-x-black"></div>
        <p className="text-black-light pb-1">CHANGE PASSWORD</p>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="relative w-full">
            <label htmlFor="currentpassword" className="text-sm text-black-light">
              Current Password
            </label>
            <br />
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentpassword"
                placeholder=""
                className="mt-1 p-2 bg-slate-200 rounded-lg border w-full pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility(setShowCurrentPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showCurrentPassword ? <IconEyeOff width="20" height="20" /> : <IconEye width="20" height="20" />}
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <label htmlFor="newpassword" className="text-sm text-black-light">
              New Password
            </label>
            <br />
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newpassword"
                placeholder=""
                className="mt-1 p-2 bg-slate-200 rounded-lg border w-full pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility(setShowNewPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showNewPassword ? <IconEyeOff width="20" height="20" /> : <IconEye width="20" height="20" />}
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <label htmlFor="confirmnewpassword" className="text-sm text-black-light">
              Confirm New Password
            </label>
            <br />
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                name="confirmnewpassword"
                placeholder=""
                className="mt-1 p-2 bg-slate-200 rounded-lg border w-full pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility(setShowNewPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showNewPassword ? <IconEyeOff width="20" height="20" /> : <IconEye width="20" height="20" />}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-end justify-end gap-6">
          <button className="bg-blue-100 p-2 rounded-md text-blue-700 pl-10 pr-10 font-medium hover:opacity-55">
            SAVE
          </button>
          <button className="bg-purple-100 p-2 rounded-md text-purple-700 pl-10 pr-10 font-medium hover:opacity-55">
            BACK
          </button>
          <button className="bg-green-100 p-2 rounded-md text-green-700 pl-10 pr-10 font-medium hover:opacity-55">
            SAVE & EXIT
          </button>
        </div>
      </div>
    </form>
  );
}
