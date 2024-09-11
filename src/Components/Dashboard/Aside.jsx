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

  let showArray = [];
  for (let i = 0; i < arr.length; i++) {
    showArray.push(
      <AsideButton 
        key={i} 
        title={arr[i].title} 
        Icon={arr[i].Icon} 
        onClick={() => setActiveComponent(arr[i].component)} 
      />
    );
  }
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
      {showArray}
    </div>
  );
}

function AsideButton({ title, Icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-3 pl-8 mt-1 font-semibold flex w-full hover:bg-primary hover:text-white hover:rounded-md cursor-pointer"
    >
      <Icon className="mr-2 " />
      <p>{title}</p>
    </div>
  );
}


//     <><div className="bg-white">
//       <div
//         className="w-48  py-6 h-full   fixed left-0
//        flex flex-col items-center text-slate-700 rounded-lg text-lg bg-white"
//       >
//         <img src="./09261924-a421-4778-be9b-f359c690718f.jpeg" alt="" width={140} height={140} className="mt-6"/>
//         <div className="mt-8">
//         <a href="" className="p-3 font-semibold flex   hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconLayoutDashboard />&nbsp;
//           Dashboard
//         </a>
//         <a href="" className="p-4 font-semibold flex hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconUser />&nbsp;
//           Personal
//         </a>
//         <a href="" className="p-4 font-semibold flex   hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconSquareRotated />&nbsp;
//            My Rota
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconMessages />&nbsp;
//            Inbox
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconUserScan />&nbsp;
//            c2o Profile
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconBrandHipchat />&nbsp;
//            Chats
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconAssembly />&nbsp;
//           ATS
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconAbacus />&nbsp;
//            CMS
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconFocus />&nbsp;
//           OCCS
//         </a>
//         <a href="" className="p-4 font-semibold flex  hover:bg-slate-400 hover:text-white hover:rounded-lg">
//           <IconLayersDifference />&nbsp;
//           Preferences
//         </a>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// import { IconLayoutDashboard } from "@tabler/icons-react";
// import { IconUser } from "@tabler/icons-react";
// import React from "react";

// export default function Dashboard(props) {
//   let arr = [
//     "Dashboard",
//     "Personal",
//     "My Rota",
//     "Inbox",
//     "c2o Profile",
//     "Chats",
//     "ATS",
//     "CMS",
//     "OSCS",
//     "Preference",
//   ];
//   let showArray = [];
//   for (let i = 0; i <= arr.length; i++) {
//     let border = false;
//     if (arr[i] == "Dashboard") {
//       border = true;

//     }
//     showArray.push(<AsideButton text={arr[i]} border={border} />);
//   }
//   return (
//     <>
//       <div
//         className="w-48 py-8 h-screen  border border-gray-900 fixed left-0 font-sans md:font-serif
//        flex flex-col items-center"
//       >
//         <img src="./download.jpg" alt="" width={85} height={85} />
//         <IconLayoutDashboard />
//         <IconUser/>
//         {showArray}
//       </div>
//     </>
//   );
// }
// function AsideButton({ text, border = false }) {
//   return (
//     <a
//       href=""
//       className={`p-4 font-semibold flex justify-center w-full ${
//         border ? "border-red-900 border" : ""
//       } `}
//     >
//       <p>{text}</p>
//     </a>
//   );
// }
