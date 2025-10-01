import MenuItem from "@/components/modules/MenuItem/MenuItem";
import React from "react";

function Price({ data }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">MENU & PRICING</p>
        <h1 className="text-4xl font-bold">Competitive Pricing</h1>
      </div>
      <div className="grid grid-cols-12 px-28 py-10 gap-x-5">
        <div className="col-span-6 flex flex-col gap-5">
          <p className="text-2xl font-bold">Hot Coffee</p>
          {data
            .filter((item) => item.type == "hot")
            .map((data) => (
              <MenuItem data={data} key={data.id} />
            ))}
        </div>
        <div className="col-span-6 flex flex-col gap-5">
          <p className="text-2xl font-bold">Cold Coffee</p>
          {data
            .filter((item) => item.type == "cold")
            .map((data) => (
              <MenuItem data={data} key={data.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Price;
