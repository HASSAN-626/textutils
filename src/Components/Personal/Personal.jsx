import React from "react";
export default function Personal() {
  return (
    <>
      <div className="pt-4 ml-4">
        <div className=" ml-5 bg-white p-4  w-full border-2 rounded-lg shadow-md ">
          <p className="text-black font-semibold">PERSONAL INFORMATION</p>
          <div className="flex items-center gap-48">
            <div className="pt-2 grid grid-rows-4 grid-flow-col gap-x-64">
              <div>
                <p className="text-black-light font-semibold text-sm">
                  Joining Date
                </p>
                <p>2024-06-24</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">Email</p>
                <p>hassansrdar626@gmail.com</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">Gender</p>
                <p>Male</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian Phone No
                </p>
                <p>03325146837</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Date Of Birth
                </p>
                <p>2004-05-09</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Phone Number
                </p>
                <p>03165105988</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Blood Group
                </p>
                <p>O+</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian
                </p>
                <p>37405-39969996-4</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Martial Status
                </p>
                <p>Single</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  CNIC Number
                </p>
                <p>37405-4563494-1</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Parent/Guardian Name
                </p>
                <p>Riffat Samina</p>
              </div>

              <div>
                <p className="text-black-light font-semibold text-sm">
                  Address
                </p>
                <p>
                  Haroown chowk , Kurri Road , Near Hasnain Shopping Mall,
                  <p>Rawalpindi</p>
                </p>
              </div>
            </div>
            <div>
              <img
                src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
                className="h-38 w-28 object-cover rounded-xl"
                alt=""
              />
              <p className="text-black-light font-semibold">Hassan Sardar</p>
              <p className="text-black-lighter font-semibold text-sm pl-2">
                IT - Web Dept
              </p>
              <p className="text-black-lighter  text-sm pl-5">
                <div className="bg-cyan-400  rounded-full"></div>(Active){" "}
              </p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="text-black font-semibold pt-4">BANK DETAILS</p>
          <div className="pt-2 grid grid-rows-1 grid-flow-col gap-x-48">
            <div>
              <p className="text-black-light font-semibold text-sm">
                Bank Name
              </p>
              <p>Nayapay</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm">
                Branch Name
              </p>
              <p>Online</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm ">
                Account Title
              </p>
              <p>Savings</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm">
                Account Number
              </p>
              <p>03165105988</p>
            </div>
          </div>
          <div className="mt-3 w-full border border- mx-2 "></div>
          <p className="text-black font-semibold pt-4">EMERGENCY DETAILS</p>
          <div className="pt-2 grid grid-rows-1 grid-flow-col gap-x-24">
            <div>
              <p className="text-black-light font-semibold text-sm ">Name</p>
              <p>Wahab Javed</p>
            </div>
            <div className="pr-12">
              <p className="text-black-light font-semibold text-sm">Relation</p>
              <p>Brother</p>
            </div>

            <div className="pr-11">
              <p className="text-black-light font-semibold text-sm ">Number</p>
              <p>03355599885</p>
            </div>

            <div>
              <p className="text-black-light font-semibold text-sm "></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// className="h-64 w-32 object-cover rounded"
