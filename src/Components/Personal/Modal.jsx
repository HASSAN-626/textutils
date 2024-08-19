import React from "react";
import { IconUserCircle } from "@tabler/icons-react";
import {IconFileDescription} from "@tabler/icons-react";
import {IconId} from "@tabler/icons-react";
import {IconKey} from "@tabler/icons-react";
const Modal = ({ isVisible, onClose,children }) => {
  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-md
    flex justify-center items-center"
      >
      <div className="flex-col mb-80 bg-slate-200 p-1 rounded-md">
      <button className="pt-2 pb-5 hover:text-primary "><IconUserCircle/></button> <br />
      <button className="pb-5 hover:text-primary"><IconId/></button> <br />
      <button className="pb-5 hover:text-primary"><IconFileDescription/></button> <br />
      <button className="pb-5 hover:text-primary"><IconKey /></button> 
      </div>
        <div className="w-2/4 flex flex-col">
          <button
            className="place-self-end text-white text-lg "
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="p-2 bg-white rounded-xl font-semibold">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
