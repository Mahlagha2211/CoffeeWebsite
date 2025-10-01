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
    <div className="grid grid-cols-12 gap-y-10 bg-[url('/img/bg.jpg')] bg-cover bg-center bg-[#251203] bg-blend-multiply min-[1100px]:px-28  sm:max-[1100px]:px-10 px-5 py-10 text-white">
      <div className="sm:col-span-6 col-span-12 space-y-2 max-sm:text-center">
        <h1 className="md:text-xl text-md font-bold">GET IN TOUCH</h1>
        <p className="text-[14px]">123 street, New york,USA</p>
        <p className="text-[14px]">+012 345 67890</p>
        <p className="text-[14px]">info@example.com</p>
      </div>
      <div className="sm:col-span-6 col-span-12 pr-3  space-y-2  max-sm:text-center">
        <h1 className="md:text-xl text-md font-bold">FOLLOW US</h1>
        <p className="text-[14px]">
          Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
        </p>
        <div className="flex gap-x-2 max-sm:justify-center max-sm:items-center  ">
          <div className="border border-white p-2">
            <FaFacebookF />
          </div>
          <div className="border border-white p-2">
            <FaInstagram />
          </div>
          <div className="border border-white p-2">
            <FaLinkedin />
          </div>
          <div className="border border-white p-2">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="sm:col-span-6 col-span-12  max-sm:text-center ">
        <h1 className="md:text-xl text-md font-bold">OPEN HOURS</h1>
        <p className="text-[14px] mt-2">MONDAY-FRIDAY</p>
        <p className="text-[14px]">8:00 AM - 8:00 PM</p>
        <p className="text-[14px]">SATURDAT-SUNDAY</p>
        <p className="text-[14px]">2:00 AM - 8:00 PM</p>
      </div>
      <div className="sm:col-span-6 col-span-12  space-y-2  max-sm:text-center">
        <h1 className="md:text-xl text-md font-bold">NEWLETTER</h1>
        <p className="text-[14px]">
          Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
        </p>
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
