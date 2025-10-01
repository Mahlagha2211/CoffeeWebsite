import React, { useState } from "react";

function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [time, seTime] = useState("");

  const sendBook = async (e) => {
    e.preventDefault();
    const res = fetch("http://localhost:4000/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        date,
        number: Number(number),
        time: Number(time),
      }),
    });
    if (res.status == 200 || 201) {
      setDate("");
      setName("");
      seTime("");
      setNumber("");
      setEmail("");
    }
  };

  return (
    <div
      className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 p-5 sm:p-10 my-10 
  bg-[url('/img/bg.jpg')] bg-center bg-cover bg-blend-multiply bg-[#251203]"
    >
      <div className="sm:col-span-6 col-span-12 flex flex-col justify-center gap-y-5 text-center sm:text-left">
        <p className="text-amber-700 font-bold text-2xl md:text-4xl">30% OFF</p>
        <p className="text-white font-bold text-lg md:text-2xl">
          For Online Reservation
        </p>
        <p className="text-white text-[12px] md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="sm:col-span-6 col-span-12 flex flex-col gap-5">
        <p className="text-white font-bold text-2xl md:text-4xl text-center sm:text-left">
          Book your table
        </p>
        <form
          className="w-full max-w-md mx-auto sm:mx-0 space-y-3"
          onSubmit={(e) => sendBook(e)}
        >
          <input
            type="text"
            placeholder="Name"
            className="block w-full p-2 border border-amber-800 text-white focus:outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="block w-full p-2 border border-amber-800 text-white focus:outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Date"
            className="block w-full p-2 border border-amber-800 text-white focus:outline-0"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            className="block w-full p-2 border border-amber-800 text-white focus:outline-0"
            value={time}
            onChange={(e) => seTime(e.target.value)}
          />
          <select
            defaultValue={number}
            onChange={(e) => setNumber(e.target.value)}
            className="block w-full p-2 border border-amber-800 text-gray-400"
          >
            <option value={1}>Person1</option>
            <option value={2}>Person2</option>
            <option value={3}>Person3</option>
            <option value={4}>Person4</option>
          </select>
          <button
            type="submit"
            className="w-full bg-amber-800 text-white p-2 cursor-pointer"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
