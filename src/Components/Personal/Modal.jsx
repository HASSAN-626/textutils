import React from "react";

const Modal = ({isVisible}) => {
  if ( !isVisible ) return null;
  return (<>
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="w-2/4 flex flex-col">
      <button className="place-self-end text-white text-lg">X</button>
      <div className="p-2 bg-white rounded">
      Modal
      </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
