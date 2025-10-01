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
    <div className="col-span-6 flex gap-x-3 ">
      <img src={data.img} className="w-40" />
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-3 items-center">
          {Icon && (
            <div className="bg-amber-700 p-2 rounded-full">
              <Icon size={20} className="text-black" />
            </div>
          )}
          <p className="text-[20px] font-bold">{data.title}</p>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;
