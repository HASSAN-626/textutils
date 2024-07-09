import React, { useState } from "react";
export default function Table() {
  const [show, setshow] = useState(true);
  const ButtonPressed = () => {
    // setshow(!show);
    if (show) {
      setshow(false);
    } else {
      setshow(true);
    }
  };
  return (
    <>
      <div>
        <table className={`TableView  ${show == true ? "block" : "hidden"}`}>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>In</th>
            <th>Out</th>
          </tr>
          <tr>
            <td>Hassan Sardar</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Manan Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Mansoor Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          <tr>
            <td>Asif Bhai</td>
            <td>Morning</td>
            <td>9:15 a.m</td>
            <td>5:00 a.m</td>
          </tr>
          
        </table>

        <div className={`BoxView  ${show == true ? "hidden" : "block"}`}>
          <div className=" bg-slate-400 ">
            Personal Data: Name : Hassan Sardar Shift : Morning In : 9:15 a.m
            Out : 5:00 p.m
          </div>
          <div className=" bg-white">
            Personal Data: Name : Manan Bhai Shift : Morning In : 9:15 a.m Out :
            5:00 p.m
          </div>
          <div className=" bg-slate-400">
            Personal Data: Name : Mansoor Bhai Shift : Morning In : 9:15 a.m Out
            : 5:00 p.m
          </div>
          <div className=" bg-white">
            Personal Data: Name : Asif Bhai Shift : Morning In : 9:15 a.m Out :
            5:00 p.m
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={ButtonPressed} className="bg-gray-700">
          Table View
        </button>
      </div>
    </>
  );
}
