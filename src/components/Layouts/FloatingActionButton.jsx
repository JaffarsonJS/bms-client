import { Plus, X } from "lucide-react";
import React, { useState } from "react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Track which button is clicked

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Update active button state
  };

  return (
    <div className="">
      <div className="fixed bottom-24 right-12 ">
        {isOpen && (
          <div className="flex flex-col items-end mb-4 space-y-2">
            <button
              className={`${
                activeButton === "Reminder"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } rounded-md p-2 shadow-lg hover:bg-blue-500 hover:text-white`}
              onClick={() => handleButtonClick("Reminder")}
            >
              Reminder
            </button>
            <button
              className={`${
                activeButton === "New Booking"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } rounded-md p-2 shadow-lg hover:bg-blue-500 hover:text-white`}
              onClick={() => handleButtonClick("New Booking")}
            >
              New Booking
            </button>
            <button
              className={`${
                activeButton === "New Maintenance"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } rounded-md p-2 shadow-lg hover:bg-blue-500 hover:text-white`}
              onClick={() => handleButtonClick("New Maintenance")}
            >
              New Maintenance
            </button>
          </div>
        )}
      </div>
      <div
        className="bg-yellow-500 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-yellow-600 fixed bottom-10 right-10"
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Plus />}
      </div>
    </div>
  );
};

export default FloatingActionButton;
