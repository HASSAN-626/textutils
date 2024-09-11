import { useState } from "react";
import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconSquareRotated } from "@tabler/icons-react";
import { IconMessages } from "@tabler/icons-react";
import { IconUserScan } from "@tabler/icons-react";
import { IconBrandHipchat } from "@tabler/icons-react";
import { IconAssembly } from "@tabler/icons-react";
import { IconAbacus } from "@tabler/icons-react";
import { IconFocus } from "@tabler/icons-react";
import { IconLayersDifference } from "@tabler/icons-react";

import React from "react";

export default function Aside({ setActiveComponent }) {
  // Maintain the state of the active component
  const [activeComponent, setActiveComponentState] = useState("dashboard");

  const arr = [
    { title: "Dashboard", Icon: IconLayoutDashboard, component: "dashboard" },
    { title: "Personal", Icon: IconUser, component: "personal" },
    { title: "My Rota", Icon: IconSquareRotated, component: "myRota" },
    { title: "Inbox", Icon: IconMessages, component: "inbox" },
    { title: "c2o Profile", Icon: IconUserScan, component: "c2oProfile" },
    { title: "Chats", Icon: IconBrandHipchat, component: "chats" },
    { title: "ATS", Icon: IconAssembly, component: "ats" },
    { title: "CMS", Icon: IconAbacus, component: "cms" },
    { title: "OSCS", Icon: IconFocus, component: "oscs" },
    { title: "Preference", Icon: IconLayersDifference, component: "preference" },
  ];

  const handleClick = (component) => {
    setActiveComponent(component);
    setActiveComponentState(component); // Update the state with the clicked component
  };

  return (
    <div
      className="w-48 py-6 h-screen fixed left-0 
      flex flex-col items-center justify bg-white rounded-lg"
    >
      <img
        src="./09261924-a421-4778-be9b-f359c690718f.jpeg"
        alt=""
        width={140}
        height={140}
        className="mt-6"
      />
      {arr.map(({ title, Icon, component }) => (
        <AsideButton 
          key={component} 
          title={title} 
          Icon={Icon} 
          isActive={activeComponent === component} // Pass active state
          onClick={() => handleClick(component)} 
        />
      ))}
    </div>
  );
}

function AsideButton({ title, Icon, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-3 pl-8 mt-1 font-semibold flex w-full cursor-pointer
        ${isActive ? 'bg-primary text-white rounded-md' : 'hover:bg-primary hover:text-white'}`}
    >
      <Icon className="mr-2 " />
      <p>{title}</p>
    </div>
  );
}
