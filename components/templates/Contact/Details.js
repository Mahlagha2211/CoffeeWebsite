import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Send from "./Send";

function Details() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">Contact Us</p>
        <h1 className="text-4xl font-bold">Feel Free To Contact</h1>
      </div>
      <div className="mt-20 px-28 flex justify-around">
        <div className="flex flex-col items-center ">
          <FaMapMarkerAlt className="text-2xl text-amber-800" />
          <p className="font-bold text-[17px]">Address</p>
          <p>123 Street , New York ,Usa</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-2xl text-amber-800" />
          <p className="font-bold text-[17px]">Phone</p>
          <p>+012 345 6789</p>
        </div>
        <div className="flex flex-col items-center">
          <MdEmail className="text-2xl text-amber-800" />
          <p className="font-bold text-[17px]">Email</p>
          <p>info@example.com</p>
        </div>
      </div>
      <Send />
    </div>
  );
}

export default Details;
