import React from "react";

export default function Dashboard(props) {
  let arr = [
    "Dashboard",
    "Personal",
    "My Rota",
    "Inbox",
    "c2o Profile",
    "Chats",
    "ATS",
    "CMS",
    "OSCS",
    "Preference",
  ];
  let showArray = [];
  for (let i = 0; i <= arr.length; i++) {
    let border = false;
    if (arr[i] == "Dashboard") {
      border = true;
  
    }
    showArray.push(<AsideButton text={arr[i]} border={border} />);
  }
  return (
    <>
      <div
        className="w-48 py-8 h-screen border border-gray-900 fixed left-0 font-sans md:font-serif
       flex flex-col items-center"
      >
        <img src="./download.jpg" alt="" width={85} height={85} />
        {showArray}
      </div>
    </>
  );
}
function AsideButton({ text, border = false }) {
  return (
    <a
      href=""
      className={`p-4 font-semibold flex justify-center w-full ${
        border ? "border-red-900 border" : ""
      } `}
    >
      <p>{text}</p>
    </a>
  );
}
