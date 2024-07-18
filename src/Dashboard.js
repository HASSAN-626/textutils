import React from "react";

export default function Dashboard(props) {
  return (
    <>
      <div className="w-48 py-8 h-screen border border-gray-900 fixed left-0 font-sans md:font-serif flex flex-col items-center ">
        <img src="./download.jpg" alt="" width={85} height={85} />
        <AsideButton text={"Dashboard"}/>
        <AsideButton text={"Personal"} />
        <AsideButton text={"My Rota"} />
        <AsideButton text={"Inbox"} />
        <AsideButton text={"c2o Profile"} />
        <AsideButton text={"Chats"} />
        <AsideButton text={"ATS"} />
        <AsideButton text={"CMS"}/>
        <AsideButton text={"OSCS"} />
        <AsideButton text={"Preference"} />
      </div>
    </>
  );
}
function AsideButton({ text }) {
  return (
    <a
      href=""
      className={`p-4 font-semibold flex justify-center w-full ${
        text == "Dashboard"
          ? " border-2 "
          : text == "CMS"
          ? "border-2"
          : ""
      } `}
    >
      <p>{text}</p>
    </a>
  );
}
