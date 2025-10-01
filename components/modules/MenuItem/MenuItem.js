import { useRouter } from "next/router";
import React from "react";

function MenuItem({ data }) {
  const route = useRouter();
  return (
    <div
      className=" flex  gap-x-5"
      onClick={() => route.push(`/menu/${data.id}`)}
    >
      <div className="relative ">
        <img src={data.img} className="rounded-full w-32" />
        <div className="rounded-full bg-amber-700 absolute z-10 min-[1000px]:w-10 min-[1000px]:h-10 w-7 h-7 flex justify-center items-center top-0 right-0">
          ${data.price}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold md:text-[18px] text-[15px]">{data.title}</p>
        <p className="md:text-[15px] text-[12px]">{data.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
