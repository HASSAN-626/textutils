import React, { useState } from "react";
import {
  IconBell,
  IconLogout,
  IconHelpOctagon,
  IconMoon,
  IconSun,
  IconPinned,
} from "@tabler/icons-react";

export default function Nav({ toggleTheme, theme }) {
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const [showHelpBox, setShowHelpBox] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevState) => !prevState);
    toggleTheme();
  };

  const handleHelpClick = () => {
    setShowHelpBox((prevState) => !prevState);
  };

  const iconColorClass = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex justify-between m-3 gap-2 items-center relative">
      <div className="ml-10">
        <button>
          <IconPinned
            className={`size-8 p-2 rounded-lg shadow-md ${iconColorClass} ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } hover:opacity-65`}
          />
        </button>
        <button onClick={handleThemeToggle}>
          {isDarkMode ? (
            <IconSun
              className={`size-8 p-2 ml-4 rounded-lg shadow-md ${iconColorClass} ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              } hover:opacity-65`}
            />
          ) : (
            <IconMoon
              className={`size-8 p-2 ml-4 rounded-lg shadow-md ${iconColorClass} ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              } hover:opacity-65`}
            />
          )}
        </button>
      </div>
      <div className="flex items-center relative">
        <button className="relative">
          <IconBell
            className={`size-8 p-2 m-2 rounded-lg shadow-md ${iconColorClass} ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } hover:opacity-65`}
          />
          <p className="bg-red-600 text-sm absolute top-0 -right-2 text-white rounded-full">
            80
          </p>
        </button>
        <button onClick={handleHelpClick}>
          <IconHelpOctagon
            className={`size-8 p-2 m-2 mr-5 rounded-lg shadow-md ${iconColorClass} ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } hover:opacity-65`}
          />
        </button>
        <div
          className={`rounded-2xl flex items-center ${
            theme === "dark" ? "bg-gray-800" : "bg-slate-200"
          } px-3 py-2 shadow-md`}
        >
          <div className="h-full w-12">
            <img
              className="rounded-full h-10 w-10 mr-1"
              src="./58a434a3-826c-4c3a-98cc-a818b83def59.jpeg"
              alt=""
            />
          </div>
          <div className="text-sm">
            <p className="font-medium">Hassan Sardar</p>
            <p className="text-black-light">hassansrdar626@gmail.com</p>
          </div>
          <div
            className="h-6 w-0.5 border mx-2"
            style={{ borderColor: theme === "dark" ? "#ffffff" : "#000000" }}
          ></div>
          <div className="items-end">
            <IconLogout className={`h-4 w-4 ${iconColorClass}`} />
          </div>
        </div>
      </div>
      {showHelpBox && (
        <div
          className={`absolute top-12 right-0 p-4 border rounded-lg shadow-lg ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white text-black border-gray-300"
          }`}
        >
          <h3 className="font-semibold">Frequently Asked Questions</h3>
          <ul className="mt-2 list-disc list-inside">
            <li>
              <strong>Question 1:</strong> How do You want to ask?
            </li>
            <li>
              <strong>Question 2:</strong> Where can I find more information?
            </li>
            <li>
              <strong>Question 3:</strong> Who should I contact for support?
            </li>
            <li>
              <strong>Question 3:</strong> Who should I contact?
            </li>
            <li>
              <strong>Question 3:</strong> Who should I contact for Query?
            </li>
            <li>
              <strong>Question 3:</strong> Who should I suppose to tell?
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
