import MenuItem from "@/components/modules/MenuItem/MenuItem";
import { useParams } from "next/navigation";
import React from "react";

function Result({ data }) {
  const router = useParams();
  console.log(router);
  return (
    <div className="py-10">
      <div className="grid grid-cols-12 px-28 py-10 gap-x-5">
        <div className="col-span-6 flex flex-col gap-5">
          <p className="text-2xl font-bold">Hot Coffee</p>
          {data.find((item) => item.type == "hot") ? "" : <p className="bg-gray-200 p-2 rounded-lg">not any hot food</p>}
          {data
            .filter((item) => item.type == "hot")
            .map((data) => (
              <MenuItem data={data} key={data.id} />
            ))}
        </div>
        <div className="col-span-6 flex flex-col gap-5">
          <p className="text-2xl font-bold">Cold Coffee</p>
          {data.find((item) => item.type == "cold") ? "" : <p className="bg-gray-200 p-2 rounded-lg">not any cold food</p>}
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

export default Result;
