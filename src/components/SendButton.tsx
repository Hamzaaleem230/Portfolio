"use client";
import { useState } from "react";

export default function SendButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={handleClick}
        className="bg-accent 
                 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3 
                 rounded-lg 
                 text-sm sm:text-base md:text-base lg:text-lg 
                 font-semibold 
                 text-gray-900 
                 hover:bg-accent/80 
                 transition duration-300"
        data-aos="fade-left"
      >
        Send
      </button>

      {/* Popup */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 
        text-white text-sm sm:text-base bg-green-500 
        rounded-lg shadow-lg px-6 py-3 
        transition-all duration-500 ease-in-out
        ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}
      >
        ✅ Message sent
      </div>
    </div>
  );
}
