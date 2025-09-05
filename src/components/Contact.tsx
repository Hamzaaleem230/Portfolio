"use client";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Send request
    fetch("https://formsubmit.co/ajax/hamzaaleem909@gmail.com", {
      method: "POST",
      body: formData,
    });

    setShowPopup(true);

    // Reset form
    setTimeout(() => {
      setShowPopup(false);
      form.reset();
    }, 2000);
  };

  return (
    <div
      id="contact"
      className="pt-20 mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Info */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-left">
            Get in touch
          </h2>
          <p
            className="text-gray-600 text-base md:text-lg pt-2 leading-relaxed"
            data-aos="fade-left"
          >
            Feel free to reach out if you have any questions, need help with a
            project, or just want to say hi.
          </p>

          <div className="flex gap-3 items-center" data-aos="fade-left">
            <MdOutlineMailOutline size={28} />
            <a
              href="mailto:hamzaaleem909@gmail.com"
              className="hover:underline text-blue-500 break-all"
            >
              hamzaaleem909@gmail.com
            </a>
          </div>

          <div className="flex gap-3 items-center" data-aos="fade-left">
            <BsTelephone size={28} />
            <a
              href="https://wa.me/923355475036"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-green-500"
            >
              +92-335-5475036
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6 pb-10">
            {/* Name */}
            <div className="flex flex-col gap-1" data-aos="fade-left">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="h-[40px] w-full pl-4 bg-transparent border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                id="name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1" data-aos="fade-left">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-[40px] w-full pl-4 bg-transparent border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                id="email"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1" data-aos="fade-left">
              <label htmlFor="msg" className="font-medium">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                className="bg-transparent w-full pl-4 pt-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                id="msg"
                rows={6}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-accent px-5 py-2 rounded-md text-sm w-full sm:w-auto font-semibold text-gray-900 hover:bg-accent/80 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      <div
        className={`fixed top-[11%] left-1/2 -translate-x-1/2 
        text-gray-900 text-sm sm:text-base bg-green-500 font-medium
        rounded-lg shadow-lg px-6 py-3 
        transition-all duration-500 ease-in-out
        ${
          showPopup ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
        }`}
      >
        ✅ Message sent
      </div>
    </div>
  );
};

export default Contact;
