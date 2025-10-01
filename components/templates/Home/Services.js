import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ data }) {
  
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">Our SERVICES</p>
        <h1 className="text-4xl font-bold">Fresh & Organic Beans</h1>
      </div>
      <div className="px-28 grid grid-cols-12 py-10 gap-10">
        {data.map((item) => (
          <ServiceItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Services;
