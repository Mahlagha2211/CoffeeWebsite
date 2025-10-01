import React, { useState } from "react";

function Offer() {
  const [email, setEmail] = useState("");
  const postEmail = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/newsLetter", {
      method: "POST",
      headers: {
        "Content-Type": "application / json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    setEmail("");
  };
  return (
    <div className="text-white flex justify-center items-center gap-y-2 flex-col h-96 bg-[url('/img/bg.jpg')] bg-cover bg-center bg-[#251203] bg-blend-multiply">
      <p className="text-4xl text-amber-700 font-bold">50% OFF</p>
      <p className="text-2xl font-bold">Sunday special Offer</p>
      <p>Only for sunday from 1st Jan to 30th jan 2045 </p>
      <form className="my-3" onSubmit={(e) => postEmail(e)}>
        <input
          placeholder="Your Email"
          value={email}
          className="bg-white text-black p-2 focus:out  "
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-700 py-2 px-4 text-black cursor-pointer"
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default Offer;
