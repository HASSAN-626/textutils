import React, { useState, useEffect } from "react";
import { IconDownload, IconUser, IconHelpHexagon } from "@tabler/icons-react";

import Modal from "./Modal";

export default function Personal() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    employeeId: "c2o-626",
    title: "Mr",
    firstName: "Hassan",
    middleName: "Sardar",
    lastName: "Satti",
    dateOfBirth: "05/09/2004",
    email: "hassanjaveed626@gmail.com",
    phoneNumber: "03165105988",
    cnicNumber: "3740545634941",
    gender: "Male",
    bloodGroup: "O+",
    parentguardianName: "Riffat Samina",
    parentguardianPhoneNumber: "03325146837",
    parentguardianCNIC: "3740539969964",
    presentAddress: "House No 5 , Street No 5 , Kurri road , Rawalpindi",
    street: "5",
    city: "Rawalpindi",
    country: "Pakistan",
    postalCode: "46000",
    permanentAddress: "House No 5,Kurri road,Rawalpindi",
    emergencyContactName: "Wahab Javed",
    relationToEmployee: "Brother",
    emergencyPhoneNumber: "03355599885",
  });

  const [fetchedData, setFetchedData] = useState(null);

  function handleIdChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setData((d) => {
      d[name] = value;
      return { ...d };
    });
  }


  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/data/66dfea22a8d1cef92a44906e"); // Adjust the URL if necessary
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFetchedData(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchedData("Error fetching data"); // Handle errors by setting a message
    }
  }

  // Optionally, fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  console.log(fetchedData);

    const handleClick = async () => {
    async function postProfile() {
      try {
        // Create a Request object for the POST request
        const request = new Request("http://localhost:3001/data/66e17979332522c088b907be", {
          method: "PUT", // Use POST method
          body: JSON.stringify(data), // Add request body
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
        });

        // Fetch data using the Request object
        const response = await fetch(request);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON from the response
        const responseData = await response.json();

        // Log the data
        console.log(responseData);
      } catch (error) {
        // Handle any errors
        console.error("Fetch error:", error);
      }
    }

    // Call the async function
    postProfile();
  };

  console.log(data); 

  return (
    <>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <p className="pl-3 pb-5 text-black font-semibold flex h-4  ">
            <IconUser width={"20"} height={"20"} />
            &nbsp; EDIT HASSAN SARDAR - PROFILE &nbsp;{" "}
            <IconHelpHexagon width={"20"} height={"20"} />
          </p>
          <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
          <div
            className="p-2 h-60vh overflow-auto  "
            style={{
              scrollbarWidth: "thin",
            }}
          >
            <div className="flex">
              <form action="">
                <label htmlFor="file">
                  <img
                    src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
                    className="h-38 w-28 object-cover rounded-2xl p-2"
                    alt=""
                  />
                </label>
                <input type="file" className="hidden" id="file" name="file" />
              </form>
              <div className="flex-col pt-10">
                <p>HASSAN SARDAR</p>
                <p className="text-black-light text-sm">IT - Web Dept</p>
              </div>
            </div>

            <p className="text-black-light">BASIC INFORMATION</p>
            <div className="grid grid-rows-1 grid-flow-col mt-2 gap-3">
              <div>
                <label
                  htmlFor="employeeid"
                  className="text-sm text-black-light"
                >
                  Employee ID *
                </label>
                <br />
                <input
                  type="text"
                  name="employeeId"
                  placeholder="c2o-"
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-44 border hover:border-black"
                  value={data.employeeId}
                  onChange={handleIdChange}
                />
              </div>

              <div>
                <label htmlFor="title" className="text-sm text-black-light">
                  Title *
                </label>
                <br />
                <select
                  name="title"
                  id=""
                  className="p-1 bg-slate-200 rounded-lg pl-1  w-24 border hover:border-black"
                >
                  <option
                    value="text"
                    className="bg-white hover:bg-black-light"
                  >
                    Mr
                  </option>
                  <option
                    name="title"
                    value={data.title}
                    onChange={handleIdChange}
                    className="bg-white"
                  >
                    Mrs
                  </option>
                  <option value="text" className="bg-white">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="firstname" className="text-sm text-black-light">
                  First Name *
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-1 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="middlename"
                  className="text-sm text-black-light"
                >
                  Middle Name
                </label>
                <br />
                <input
                  name="middleName"
                  type="text"
                  value={data.middleName}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-1 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="text-sm text-black-light">
                  Last Name *
                </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-1 w-48 border hover:border-black"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col mt-4 gap-3 ">
              <div>
                <label
                  htmlFor="dateofbirth"
                  className="text-sm text-black-light"
                >
                  Date Of Birth *
                </label>
                <br />
                <input
                  type="date"
                  name="dateOfBirth"
                  value={data.dateOfBirth}
                  onChange={handleIdChange}
                  className="p-1 pl-3 bg-slate-200 rounded-lg mr-2 w-72 text-black-lighter border hover:border-black"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-black-light">
                  Email *
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleIdChange}
                  placeholder="c2o@gmail.com"
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="phonnumber"
                  className="text-sm text-black-light"
                >
                  Phone Number *
                </label>
                <br />
                <input
                  type="number"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleIdChange}
                  placeholder="0333-3333333"
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="cnicNumber"
                  className="text-sm text-black-light"
                >
                  CNIC Number *
                </label>
                <br />
                <input
                  type="number"
                  name="cnicNumber"
                  value={data.cnicNumber}
                  onChange={handleIdChange}
                  placeholder="33333-3333333-3"
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col mt-4 gap-3 ">
              <div>
                <label htmlFor="title" className="text-sm text-black-light">
                  Gender *
                </label>
                <br />
                <select
                  id=""
                  className="p-1 bg-slate-200 rounded-lg pl-1  w-36 border hover:border-black"
                >
                  <option
                    name="gender"
                    value={data.gender}
                    onChange={handleIdChange}
                    className="bg-white hover:bg-black-light"
                  >
                    Male
                  </option>
                  <option value="text" className="bg-white">
                    Female
                  </option>
                  <option value="text" className="bg-white">
                    None
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="title" className="text-sm text-black-light">
                  Blood Group *
                </label>
                <br />
                <select
                  name="select"
                  id=""
                  className="p-1 bg-slate-200 rounded-lg pl-1  w-32 border hover:border-black"
                >
                  <option
                    value="text"
                    className="bg-white hover:bg-black-light"
                  >
                    A+
                  </option>
                  <option value="text" className="bg-white">
                    A-
                  </option>
                  <option value="text" className="bg-white">
                    B+
                  </option>
                  <option value="text" className="bg-white">
                    AB+
                  </option>
                  <option value="text" className="bg-white">
                    AB-
                  </option>
                  <option
                    className="bg-white "
                    name="gender"
                    value={data.gender}
                    onChange={handleIdChange}
                  >
                    O+
                  </option>
                  <option value="text" className="bg-white">
                    O-
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="parent/guardianname"
                  className="text-sm text-black-light"
                >
                  Parent / Guardian Name
                </label>
                <br />
                <input
                  type="text"
                  name="parentguardianName"
                  value={data.parentguardianName}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="parent/guardianphoneno"
                  className="text-sm text-black-light"
                >
                  Parent / Guardian Phone No
                </label>
                <br />
                <input
                  type="number"
                  name="parentguardianPhoneNumber"
                  value={data.parentguardianPhoneNumber}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="parent/guardiancnic"
                  className="text-sm text-black-light"
                >
                  Parent / Guardian CNIC
                </label>
                <br />
                <input
                  type="number"
                  name="parentguardianCNIC"
                  value={data.parentguardianCNIC}
                  onChange={handleIdChange}
                  placeholder="33333-3333333-3"
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col mt-4 gap-3 ">
              <div>
                <label
                  htmlFor="presentaddress"
                  className="text-sm text-black-light"
                >
                  Present Address
                </label>
                <br />
                <input
                  type="text"
                  name="presentAddress"
                  value={data.presentAddress}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="street" className="text-sm text-black-light">
                  Street
                </label>
                <br />
                <input
                  type="text"
                  name="street"
                  value={data.street}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="city" className="text-sm text-black-light">
                  City
                </label>
                <br />
                <input
                  type="text"
                  name="city"
                  value={data.city}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-44 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="country" className="text-sm text-black-light">
                  Country
                </label>
                <br />
                <input
                  type="text"
                  name="country"
                  value={data.country}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="postalcode"
                  className="text-sm text-black-light"
                >
                  Postal Code
                </label>
                <br />
                <input
                  type="text"
                  name="postalCode"
                  value={data.postalCode}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>
            </div>
            <div className="text-sm font-light">
              <label htmlFor="matchAbove">
                <input
                  type="checkbox"
                  id="matchAbove"
                  className="checked:bg-blue-500 mt-4 rounded text-sm"
                />
                &nbsp;Match Above
              </label>
            </div>
            <div className="grid grid-rows-1 grid-flow-col mt-2 gap-3 ">
              <div>
                <label
                  htmlFor="permanentaddress"
                  className="text-sm text-black-light"
                >
                  Permanent Address
                </label>
                <br />
                <input
                  type="text"
                  name="permanentAddress"
                  value={data.permanentAddress}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-48 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="street" className="text-sm text-black-light">
                  Street
                </label>
                <br />
                <input
                  name="street"
                  value={data.street}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="city" className="text-sm text-black-light">
                  City
                </label>
                <br />
                <input
                  name="city"
                  value={data.city}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-44 border hover:border-black"
                />
              </div>

              <div>
                <label htmlFor="country" className="text-sm text-black-light">
                  Country
                </label>
                <br />
                <input
                  name="country"
                  value={data.country}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="postalcode"
                  className="text-sm text-black-light"
                >
                  Postal Code
                </label>
                <br />
                <input
                  name="postalCode"
                  value={data.postalCode}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-40 border hover:border-black"
                />
              </div>
            </div>
            <div className="mt-4 mb-3 pr-2 w-full border border- "></div>
            <p className="text-black-light">EMERGENCY CONTACT</p>

            <div className="grid grid-rows-1 grid-flow-col mt-2  gap-3 ">
              <div>
                <label
                  htmlFor="emergencycontactname"
                  className="text-sm text-black-light"
                >
                  Emergency Contact Name
                </label>
                <br />
                <input
                  name="emergencyContactName"
                  value={data.emergencyContactName}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-72 border hover:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="relationttoemployee"
                  className="text-sm text-black-light"
                >
                  Relation To Employee
                </label>
                <br />
                <input
                  name="relationToEmployee"
                  value={data.relationToEmployee}
                  onChange={handleIdChange}
                  type="text"
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-72 border hover:border-black"
                />
              </div>
              <div>
                <label
                  htmlFor="emergencyphonenumber"
                  className="text-sm text-black-light"
                >
                  Emergency Phone Number
                </label>
                <br />
                <input
                  type="number"
                  name="emergencyPhoneNumber"
                  value={data.emergencyPhoneNumber}
                  onChange={handleIdChange}
                  placeholder=""
                  className="p-1 bg-slate-200 rounded-lg pl-3 w-72 border hover:border-black"
                />
              </div>
            </div>
            <div className="mt-4 mb-3 pr-2 w-full border border-x-black-lighter "></div>
            <div className="mt-4 flex items-end justify-end gap-6">
              <button className="bg-blue-100 p-2 rounded-md text-blue-700 pl-10 pr-10 font-medium hover:opacity-55">
                SAVE & NEXT
              </button>
              <button className="bg-purple-100 p-2 rounded-md text-purple-700 pl-10 pr-10 font-medium hover:opacity-55">
                NEXT
              </button>
              <button
                className="bg-green-100 p-2 rounded-md text-green-700 pl-10 pr-10 font-medium hover:opacity-55"
                onClick={handleClick}
              >
                SAVE & EXIT
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <div className="pt-4 ml-4 mb-10">
        <div className=" ml-5 bg-white p-4  w-full border-2 rounded-lg shadow-md ">
          <p className="pl-3 text-black font-semibold flex h-4 ">
            <IconUser width={"20"} height={"20"} />
            Profile
          </p>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="pl-2 text-black font-semibold">PERSONAL INFORMATION</p>
          <div className="pl-2 flex items-center gap-48">
            <div className="pt-2 grid grid-rows-4 grid-flow-col gap-x-64">
              <div>
                <p className="text-black-light font-semibold text-sm">
                  Joining Date
                </p>
                <p className="text-sm">2024-06-24</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">Email</p>
                <p className="text-sm">{fetchedData?.email}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">Gender</p>
                <p className="text-sm">{fetchedData?.gender}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian Phone No
                </p>
                <p className="text-sm">{fetchedData?.parentguardianPhoneNumber}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Date Of Birth
                </p>
                <p className="text-sm">{fetchedData?.dateOfBirth}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Phone Number
                </p>
                <p className="text-sm">{fetchedData?.phoneNumber}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Blood Group
                </p>
                <p className="text-sm">{fetchedData?.bloodGroup}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian
                </p>
                <p className="text-sm">{fetchedData?.parentguardianCNIC}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Martial Status
                </p>
                <p className="text-sm">{fetchedData?.martialStatus}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  CNIC Number
                </p>
                <p className="text-sm">{fetchedData?.cnicNumber}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian Name
                </p>
                <p className="text-sm">{fetchedData?.parentguardianName}</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Address
                </p>
                <p className="text-sm">
                {fetchedData?.presentAddress}
                </p>
              </div>
            </div>
            <div>
              <div>
                <button
                  className="pl-44 p-4 "
                  onClick={() => setShowModal(true)}
                >
                  <p className=" bg-blue-100 pl-4 pr-4 pt-1 pb-1 text-blue-600 text-m font-semibold hover:bg-blue-200 rounded">
                    Edit
                  </p>
                </button>
              </div>

              <img
                src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
                className="h-38 w-28 object-cover rounded-xl"
                alt=""
              />

              <p className="text-black-light font-semibold">Hassan Sardar</p>
              <p className="text-black-lighter font-semibold text-sm pl-0">
                <div className="flex">
                  <div className=" box-border h-1 w-2 border-4 mt-1.5 mr-1  border-cyan-400 rounded "></div>
                  <p>IT - Web Dept</p>
                </div>
              </p>

              <p className="text-black-lighter  text-sm pl-6 ">(Active)</p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="pl-2 text-black font-semibold pt-4">BANK DETAILS</p>
          <div className="pl-2 pt-2 grid grid-rows-1 grid-flow-col gap-x-48">
            <div>
              <p className="text-black-light font-semibold text-sm">
                Bank Name
              </p>
              <p className="text-sm">{fetchedData?.bankName}</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm">
                Branch Name
              </p>
              <p className="text-sm">{fetchedData?.branchName}</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm ">
                Account Title
              </p>
              <p className="text-sm">{fetchedData?.accountTitle}</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm">
                Account Number
              </p>
              <p className="text-sm">{fetchedData?.accountNumberIBAN}</p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="pl-2 text-black font-semibold pt-4">
            EMERGENCY DETAILS
          </p>
          <div className="pl-2 pt-2 grid grid-rows-1 grid-flow-col gap-x-24">
            <div>
              <p className="text-black-light font-semibold text-sm ">Name</p>
              <p className="text-sm">{fetchedData?.emergencyContactName}</p>
            </div>
            <div className="pr-12">
              <p className="text-black-light font-semibold text-sm">Relation</p>
              <p className="text-sm">{fetchedData?.relationToEmployee}</p>
            </div>

            <div className="pr-11">
              <p className="text-black-light font-semibold text-sm ">Number</p>
              <p className="text-sm">{fetchedData?.emergencyPhoneNumber}</p>
            </div>
            <div>
              <p className="text-black-light font-semibold text-sm "></p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="pl-2 text-black font-semibold pt-4">COMPANIES</p>
          <div className="pl-2 pt-1 flex justify-between">
            <div className="flex h-12 p-3 pr-36  bg-white rounded-2xl shadow-md text-lg text-black-lighter ">
              <img
                src="./79cd3aed-63d8-4c5f-87fe-bb360eb094d8.jpeg"
                width={"32"}
                height={"auto"}
                alt=""
              />
              <p className="pl-4 font-semibold ">3. c2o Management</p>
            </div>
            <div className="pr-28">
              <p className="text-black font-semibold">COMPANY DETAILS</p>
              <p className="text-sm text-black-light">
                Department &nbsp;&nbsp;Web Department
              </p>
              <p className="text-sm text-black-light">
                Wage/Salary &nbsp;&nbsp;---
              </p>
              <p className="text-sm text-black-light">
                Job Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trainee
              </p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="pl-2 text-black font-semibold pt-4">DOCUMENTS</p>
          <div className="pl-2 flex-col">
            <div className="flex justify-between w-full m-2 p-2 rounded-lg bg-gray-200 ">
              <p className="text-m text-black-light">Name</p>
              <p className="pr-52 text-m text-black-light">Download</p>
            </div>
            <div className="flex justify-between w-full m-2 p-3 rounded-lg bg-gray-100  hover:bg-gray-200 ">
              <p className="text-m text-black-light">CNIC front</p>
              <p className="pr-56 text-m text-black-light">
                <IconDownload className="text-primary hover:bg-slate-300 rounded-sm" />
              </p>
            </div>
            <div className="flex justify-between w-full m-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 ">
              <p className="text-m text-black-light">CNIC back</p>
              <p className="pr-56 text-m text-black-light">
                <IconDownload
                  className="text-primary hover:bg-slate-300 rounded-sm"
                  width={"24"}
                  height={"24"}
                />
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="p-2 pl-8 pr-8 bg-teal-200 hover:opacity-60 rounded-md ">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
