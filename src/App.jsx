import "./App.css";
import Separate from "./Dashboard/Separate";
import CurrentMeetings from "./Dashboard/CurrentMeetings";
import UpcomingMeetings from "./Dashboard/UpcomingMeetings";
import BackgroundVideo from "./Dashboard/BackgroundVideo";
import Nav from "./Navigation/Nav";
import Body from "./Dashboard/Body";
import Aside from "./Dashboard/Aside";
function App() {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="flex flex-row">
          <Aside />
          <div className="flex flex-col w-full ml-48">
            <Nav />
            <div className=" w-full ">
              <div className="  pt-6 w-full  flex items-center ">
                <Separate />
                <div className="bg-white p-5 h-28 flex items-center justify-center ml-2 w-1/4 rounded-lg mr-12 pl-4 shadow-lg">
                  <b>No Shifts Today</b>
                </div>
              </div>
            </div>
            <div className="pl-10 pt-8 text-black-light">
              <b className="">Recent Events</b>
            </div>
            <BackgroundVideo />
            <Body />
            <UpcomingMeetings />
            <CurrentMeetings />
            <div className="pl-10 pt-11">
              <b>Suggested CSRs of the Month(Coming Soon)</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
