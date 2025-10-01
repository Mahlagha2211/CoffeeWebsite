import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ data }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">Our SERVICES</p>
        <h1 className=" font-bold md:text-4xl text-2xl">
          Fresh & Organic Beans
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-5 py-10 max-w-full mx-auto px-5 sm:px-10 lg:px-28">
        {data.map((item) => (
          <ServiceItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Services;
