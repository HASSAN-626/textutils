import "./App.css";
import Nav from "./Components/Navigation/Nav";
import Aside from "./Components/Dashboard/Aside";
import Dashbord from "./Dashbord";
import Personal from "./Components/Personal/Personal";
import { useState } from "react";
import MyRota from "./MyRota";
function App() {
  const [ActiveComponent, setActiveComponent] = useState("dashboard");
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const Condition = () => {
    if (ActiveComponent === "dashboard") {
      return <Dashbord />;
    } else if (ActiveComponent === "personal") {
      return <Personal />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else if (ActiveComponent === "myRota") {
      return <MyRota />;
    } else {
      return <Dashbord />;
    }
  };

  return (
    <div className={`bg-gray-100 ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex flex-row">
        <Aside setActiveComponent={setActiveComponent} theme={theme} />
        <div className="flex flex-col w-full ml-48 pr-8 h-screen overflow-x-hidden">
          <Nav toggleTheme={toggleTheme} theme={theme} />
          <div>{Condition()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

// {/* <div className="bg-gray-100 ">
//         <div className="flex flex-row">
//           <Aside />
//           <div className="flex flex-col w-full ml-48">
//             <Nav />

//             {/* <div className=" w-full ">
//               <div className="  pt-6 w-full  flex items-center ">
//                 <Separate />
//                 <div className="bg-white p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-lg mr-12 pl-4 shadow-lg">
//                   <b>No Shifts Today</b>
//                 </div>
//               </div>
//             </div> */}
//             {/* <div className="pl-10 pt-8 text-black-light">
//               <b className="">Recent Events</b>
//             </div> */}
//             {/* <BackgroundVideo />
//             <Main />
//             <UpcomingMeetings />
//             <CurrentMeetings />
//             <div className="pl-10 pt-11">
//               <b>Suggested CSRs of the Month(Coming Soon)</b>
//             </div> */}
//           </div>
//         </div>
//       </div> */}
