import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="container px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-32"
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center md:text-left"
        data-aos="fade-left"
      >
        About Me
      </h2>

      <p
        className="text-gray-300 pt-4 sm:pt-6 leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl text-base sm:text-lg md:text-xl mx-auto md:mx-0 text-center md:text-left"
        data-aos="fade-left"
      >
        I’m{" "}
        <span className="font-semibold text-white">Syed Hamza Aleem</span>, a
        passionate
        <span className="text-green-400"> Full-Stack Developer</span>,
        <span className="text-blue-400"> Agentic AI Developer</span>,
        <span className="text-purple-400"> Web Developer</span>, and
        <span className="text-pink-400"> UI/UX Designer</span> with over{" "}
        <span className="font-semibold">4+ years of experience</span>.
        Currently, I’m pursuing advanced IT education at
        <span className="text-yellow-400"> Governor House GIAIC</span>, focusing
        on mastering
        <span className="text-cyan-400"> OpenAI Agents SDK</span> along with
        JavaScript, Python, and OOPs.
        <br />
        <br />
        My goal is to merge creativity with technology, building modern,
        intelligent, and user-friendly solutions while continuously learning and
        evolving as a developer.
      </p>
    </div>
  );
};

export default About;
