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
        <div className="rounded-full bg-amber-700 absolute z-10 w-10 h-10 flex justify-center items-center top-0 right-0">
          ${data.price}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-[18px]">{data.title}</p>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
