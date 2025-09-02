import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
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
              href="mailto:syedhamzaaleem@gmail.com"
              className="hover:underline text-blue-500 break-all"
            >
              syedhamzaaleem@gmail.com
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
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-[40px] w-full pl-4 bg-transparent border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[40px] w-full pl-4 bg-transparent border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <label htmlFor="msg" className="font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              className="bg-transparent w-full pl-4 pt-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
              id="msg"
              rows={6}
            ></textarea>
          </div>
          <form className="pb-10">
            <button
              className="bg-accent p-3 px-8 rounded-xl text-gray-900 text-base font-semibold hover:bg-accent/80 transition duration-300"
              data-aos="fade-left"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
