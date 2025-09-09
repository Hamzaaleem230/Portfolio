import Image from "next/image";
import React from "react";

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-[#F3B806] rounded-xl shadow-md hover:shadow-lg transition w-[300px] sm:w-[350px] bg-white/5"
      data-aos="fade-left"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-xl">
        <Image
          className="w-full h-[200px] object-cover hover:scale-105 transition"
          src={img}
          width={350}
          height={200}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-xl font-semibold dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((el) => (
            <span
              key={el}
              className="px-3 py-1 text-xs rounded-full bg-[#F3B806]/20 text-[#F3B806] font-medium"
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
