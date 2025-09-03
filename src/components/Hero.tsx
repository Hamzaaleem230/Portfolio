"use client";
import React from "react";
import Navbar from "./Navbar";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="bg-no-repeat text-white">
      <Navbar />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-80px)] items-center px-6">
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end items-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-[#08e95e] flex justify-center items-center bg-gray-900 shadow-xl">
            <Image
              src="/logo.png"
              alt="Syed Hamza"
              width={256}
              height={256}
              className="object-cover shadow-md"
              data-aos="fade-right"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold" data-aos="fade-left">
            Hi!
          </p>
          <p
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold"
            data-aos="fade-left"
          >
            I&apos;m{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#08e95e] drop-shadow-lg">
              Syed Hamza
            </span>
          </p>
          <h1
            className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium text-[#08e95e]"
            data-aos="fade-up"
          >
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Agentic AI Developer",
                "UI/UX Designer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4" data-aos="fade-up">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-[#08e95e] text-gray-900 font-semibold hover:bg-[#06c24b] transition-all text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-[#08e95e] text-[#08e95e] font-semibold hover:bg-[#08e95e] hover:text-gray-900 transition-all text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
