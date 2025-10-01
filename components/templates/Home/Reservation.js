import React from "react";

function Reservation() {
  return (
    <div className="grid p-10 grid-cols-12 gap-10 mx-28 my-10 bg-[url('/img/bg.jpg')] bg-center bg-cover bg-blend-multiply bg-[#251203] ">
      <div className="col-span-6 flex flex-col justify-center gap-y-5 ">
        <p className="text-4xl text-amber-700 font-bold">30% OFF</p>
        <p className="text-2xl text-white font-bold">For Online Reservation</p>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </p>
      </div>
      <div className="col-span-6 flex flex-col items-center gap-10">
        <p className="text-4xl text-white font-bold">Book your table</p>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="text-white border border-amber-800 w-full p-2 focus:outline-0"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-white border border-amber-800 w-full p-2 focus:outline-0"
          />
          <input
            type="text"
            placeholder="Date"
            className="text-white border border-amber-800 w-full p-2 focus:outline-0"
          />
          <input
            type="text"
            placeholder="Time"
            className="text-white border border-amber-800 w-full p-2 focus:outline-0"
          />
          <select className="w-full text-gray-400 border border-amber-800 p-2">
            <option >Person</option>
            <option>Person1</option>
            <option>Person2</option>
            <option>Person3</option>
            <option>Person4</option>
          </select>
          <button className="w-full bg-amber-800 text-white p-2 cursor-pointer">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
