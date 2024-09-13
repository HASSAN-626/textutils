import React, { useState } from "react";
import {
  IconBell,
  IconLogout,
  IconHelpOctagon,
  IconMoon,
  IconSun,
  IconPinned,
  IconX, // Import the cross mark icon
} from "@tabler/icons-react";

export default function Nav({ toggleTheme, theme }) {
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const [showHelpBox, setShowHelpBox] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: "New", title: "System Update", message: "Your application has been updated. Check out the new features!" },
    { id: 2, type: "Info", title: "Upcoming Maintenance", message: "Maintenance is scheduled for tomorrow from 2 AM to 4 AM." },
    { id: 3, type: "Alert", title: "Security Alert", message: "Suspicious login attempt detected on your account." },
  ]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
    toggleTheme();
  };

  const handleHelpClick = () => {
    setShowHelpBox((prev) => !prev);
  };

  const handleBellClick = () => {
    setShowNotificationPanel((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Adjust this as needed
    window.location.href = '/login'; // Adjust this route as needed
  };

  const handleDismissNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
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
        <button className="relative" onClick={handleBellClick}>
          <IconBell
            className={`size-8 p-2 m-2 rounded-lg shadow-md ${iconColorClass} ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            } hover:opacity-65`}
          />
          {notifications.length > 0 && (
            <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-600 text-white text-xs rounded-full">
              {notifications.length}
            </div>
          )}
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
              alt="User"
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
            <button onClick={handleLogout}>
              <IconLogout className={`h-4 w-4 ${iconColorClass}`} />
            </button>
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
          <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
          <ul className="mt-2 list-disc list-inside pl-5">
            <li><strong>Question 1:</strong> How do you want to ask?</li>
            <li><strong>Question 2:</strong> Where can I find more information?</li>
            <li><strong>Question 3:</strong> Who should I contact for support?</li>
          </ul>
        </div>
      )}
      {showNotificationPanel && (
        <div
          className={`fixed top-0 right-0 w-80 h-full bg-${theme === "dark" ? "gray-800" : "white"} text-${theme === "dark" ? "white" : "black"} shadow-lg transform transition-transform duration-300 ${
            showNotificationPanel ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-300">
            <h3 className="font-semibold text-lg">Notifications</h3>
          </div>
          <div className="p-4 overflow-y-auto">
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-start space-x-2">
                  <div className={`bg-${notification.type === "New" ? "blue" : notification.type === "Info" ? "green" : "red"}-500 text-white p-2 rounded-full`}>
                    <strong>{notification.type}</strong>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-gray-500">{notification.message}</p>
                  </div>
                  <button onClick={() => handleDismissNotification(notification.id)} className="text-gray-500 hover:text-gray-700">
                    <IconX className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
