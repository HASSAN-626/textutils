import React, { useState } from "react";
import {
  IconUserCircle,
  IconFileDescription,
  IconId,
  IconKey,
  IconHelpHexagon,
} from "@tabler/icons-react";
import Details from "./Details";
import Documents from "./Documents";
import Credentials from "./Credentials";
const Modal = ({ isVisible, onClose, children }) => {
  const [activeTab, setActiveTab] = useState("profile");

  if (!isVisible) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <div>{children}</div>;
      case "details":
        return (
          <div>
            <Details />
          </div>
        );
      case "documents":
        return (
          
            <Documents />
          </div>
        );
      case "credentials":
        return (
          <div>
            <Credentials />
          </div>
        );
      default:
        return <div>Select an option.</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-md flex justify-center items-center">
      <div className=" mb-80 bg-slate-200  rounded-md">
        <button
          className={`pr-1 pl-1 pb-6 pt-2  hover:text-primary ${
            activeTab === "profile"
              ? "text-primary border-4 border-r-primary my-1 "
              : ""
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <IconUserCircle />
        </button>
        <br />
        <button
          className={`pr-1 pl-1 pb-6 hover:text-primary ${
            activeTab === "details"
              ? "text-primary border-4 border-r-primary my-1"
              : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          <IconId />
        </button>
        <br />
        <button
          className={`pr-1 pl-1 pb-6 hover:text-primary ${
            activeTab === "documents"
              ? "text-primary border-4 border-r-primary my-1"
              : ""
          }`}
          onClick={() => setActiveTab("documents")}
        >
          <IconFileDescription />
        </button>
        <br />
        <button
          className={`pr-1 pl-1 pb-4 hover:text-primary ${
            activeTab === "credentials"
              ? "text-primary border-4 border-r-primary my-1"
              : ""
          }`}
          onClick={() => setActiveTab("credentials")}
        >
          <IconKey />
        </button>
      </div>
      <div className="w-2/4 flex flex-col">
        <button
          className="place-self-end text-white text-lg"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="p-2 bg-white rounded-xl font-semibold">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
