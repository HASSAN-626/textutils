import About from "./about";
import Table from "./Table";
import "./App.css";
import ChangeColour from "./ChangeColour";
import { useState } from "react";
let name = "Hassan";
function App() {
  const [backgroundColor, setBackgroundColor] = useState("White");
  const [backgroundColor1, setBackgroundColor1] = useState("Orange");
  const Changecolour = () => {
    setBackgroundColor("orange");
  };
  const Changecolours1 = () => {
    setBackgroundColor("White");
  };
  console.log(
    backgroundColor === "orange"
      ? "bg-orange-800"
      : backgroundColor1 === "White"
      ? " bg-white "
      : "border border-red-600"
  );
  return (
    <>
    <div
      className={` ${
        backgroundColor === "orange"
          ? "bg-orange-800"
          : backgroundColor1 === "White"
          ? " bg-black "
          : "border border-red-600"
      } h-screen `}
    >
      <div className="blank">lovely</div>
      <nav>
        <li>home</li>
        <li>About Us</li>
        <li className="hassan">Contact</li>
        <li>Blogs</li>
      </nav>
      <h1>Hello {name}</h1>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit vel
          dignissimos perferendis unde excepturi placeat ullam delectus minus
          libero? Cupiditate veniam tempore beatae exercitationem ipsum enim
          tenetur excepturi obcaecati.
        </p>
        {/* <ChangeColour /> */}
      </div>
      <button onClick={Changecolour} className=" px-2 py-2 bg-gradient-to-r from-cyan-500 to-blue-500">Button</button>
      <button onClick={Changecolours1} className=" px-2 py-2 bg-red-400 ">
      </button>
      <textarea name="from-control" id="mybox" rows={10} value={onclick}></textarea>
     <About/>
     <Table  text="Home" About="About Us" Contact="Contact Us"  /> 
    </div>
    </>
  );
}

export default App;
// h-screen bg-gradient-to-r from-cyan-500 to-blue-500
