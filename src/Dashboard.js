import React from "react";

export default function Dashboard(props) {
  return (
    <>
      <div className="px-10 py-20  h-screen border border-gray-900 fixed left-0 font-sans md:font-serif">
        <img src="./download.jpg" alt="" width={85} height={85}/>
        <AsideButton text={"Dashboard"}/>
        <AsideButton text={"Personal"}/>
        <AsideButton text={"My Rota"}/>
        <AsideButton text={"Inbox"}/>
        <AsideButton text={"c2o Profile"}/>
        <AsideButton text={"Chats"}/>
        <AsideButton text={"ATS"}/>
        <AsideButton text={"CMS"}/>
        <AsideButton text={"OSCS"}/>
        <AsideButton text={"Preference"}/>
      </div>
    </>
  );
}
function AsideButton({ text }) {
  return (
    <a href="" className="p-4 font-semibold">
      <p>props.text</p>
    </a>
  );
}
