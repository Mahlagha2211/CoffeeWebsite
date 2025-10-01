import MenuItem from "@/components/modules/MenuItem/MenuItem";
import React from "react";

function Menu({ data }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">MENU & PRICING</p>
        <h1 className="md:text-4xl text-2xl font-bold">Competitive Pricing</h1>
      </div>
      <div className="grid grid-cols-12 min-[1100px]:px-28  sm:max-[1100px]:px-10 px-5 py-10 gap-x-5 gap-y-10">
        <div className="sm:col-span-6 col-span-12 flex flex-col gap-5">
          <p className="md:text-2xl text-lg font-bold">Hot Coffee</p>
          {data
            .filter((item) => item.type == "hot")
            .slice(0, 3)
            .map((data1) => (
              <MenuItem data={data1} key={data.id} />
            ))}
        </div>
        <div className="sm:col-span-6 col-span-12 flex flex-col gap-5">
          <p className="md:text-2xl text-lg font-bold">Cold Coffee</p>
          {data
            .filter((item) => item.type == "cold")
            .slice(0, 3)
            .map((data1) => (
              <MenuItem data={data1} key={data.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
