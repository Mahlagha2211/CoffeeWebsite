import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
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
    <div className="grid grid-cols-12 bg-[url('/img/bg.jpg')] bg-cover bg-center bg-[#251203] bg-blend-multiply px-28 py-10 text-white">
      <div className="col-span-3 space-y-2">
        <h1 className="text-xl font-bold">GET IN TOUCH</h1>
        <p className="text-[14px]">123 street, New york,USA</p>
        <p className="text-[14px]">+012 345 67890</p>
        <p className="text-[14px]">info@example.com</p>
      </div>
      <div className="col-span-3 pr-3  space-y-2">
        <h1 className="text-xl font-bold">FOLLOW US</h1>
        <p className="text-[14px]">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
        <div className="flex gap-x-2">
          <div className="border border-white p-2">
            <FaFacebookF />
          </div>
          <div className="border border-white p-2">
            <FaInstagram />
          </div>
          <div className="border border-white p-2">
            <FaLinkedin/>
          </div>
          <div className="border border-white p-2">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="col-span-3  ">
        <h1 className="text-xl font-bold">OPEN HOURS</h1>
        <p className="text-[14px] mt-2">MONDAY-FRIDAY</p>
        <p className="text-[14px]">8:00 AM - 8:00 PM</p>
        <p className="text-[14px]">SATURDAT-SUNDAY</p>
        <p className="text-[14px]">2:00 AM - 8:00 PM</p>
      </div>
      <div className="col-span-3  space-y-2">
        <h1 className="text-xl font-bold">NEWLETTER</h1>
        <p className="text-[14px]">Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
        <form className="my-3" onSubmit={(e) => postEmail(e)}>
          <input
            placeholder="Your Email"
            value={email}
            className="bg-white text-black p-2 focus:outline-0  "
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
    </div>
  );
}

export default Footer;
