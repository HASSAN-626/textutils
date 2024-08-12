import React from "react";

const Modal = ({ isVisible, onClose,children }) => {
  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-55 backdrop-blur-md
    flex justify-center items-center"
      >
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
