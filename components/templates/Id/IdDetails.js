import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function IdDetails({ data }) {
  return (
    <div className="flex gap-x-4 ">
      <img src={data.img} className="rounded-lg"></img>
      <div className="flex flex-col justify-between">
        <p className="border-b text-[17px] font bold text-white">
          {data.title}
        </p>
        <div className="flex gap-1">
          {new Array(Math.floor(data.score)).fill(0).map((item) => (
            <FaStar className="text-yellow-500" />
          ))}
          {new Array(5 - Math.floor(data.score)).fill(0).map((item) => (
            <FaRegStar className="text-yellow-500" />
          ))}
        </div>

        <p className="text-white">${data.price}</p>
        <p className="text-white">{data.desc}</p>
        <button className="border text-center bg-gray-500">Buy now</button>
      </div>
    </div>
  );
}

export default IdDetails;
