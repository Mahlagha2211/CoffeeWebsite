import React from "react";
import { FaCoffee, FaTruck, FaAward, FaTable } from "react-icons/fa";

const iconMap = {
  Truck: FaTruck,
  Coffee: FaCoffee,
  Award: FaAward,
  Table: FaTable,
};

function ServiceItem({ data }) {
  const Icon = iconMap[data.icon];
  return (
    <div className="md:col-span-6 col-span-12 flex gap-x-3 w-full">
      <img
        src={data.img}
        alt={data.title}
        className="w-28 min-[1000px]:w-40 max-w-full h-auto object-contain"
      />
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="flex gap-x-3 items-center">
          {Icon && (
            <div className="bg-amber-700 p-2 rounded-full flex-shrink-0">
              <Icon size={15} className="text-black" />
            </div>
          )}
          <p className="min-[1000px]:text-[18px] md:text-[15px] text-[13px] font-bold">
            {data.title}
          </p>
        </div>
        <p className="text-justify text-[12px] break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;
