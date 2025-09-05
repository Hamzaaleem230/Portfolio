import React from "react";

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center pb-8">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary transition duration-300 hover:scale-105">
        {title}
      </p>
    </div>
  );
};

export default Heading;
