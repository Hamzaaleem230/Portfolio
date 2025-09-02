import React from "react";

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center pb-8">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold inline-block border-b-4 border-primary pb-2 text-gray-900 dark:text-gray-100 transition duration-300 hover:scale-105">
        {title}
      </p>
    </div>
  );
};

export default Heading;
