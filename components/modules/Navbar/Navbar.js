import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    if (search) {
      route.push(`/search?q=${search}`);
    }
  };
  useEffect(() => {
    setSearch(route.query.q || "");
  }, []);

  return (
    <div className="flex justify-between p-10 absolute z-20 w-full text-white">
      <div className="flex space-x-10 relative ">
        <h1 className="text-4xl font-bold">NEXT-COFFEE</h1>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-b w-[500px]  outline-0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchHandler();
            }
          }}
        />
        <FaSearch
          className="absolute right-12 top-3 cursor-pointer"
          onClick={searchHandler}
        />
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/menu">Menu</Link>
        <select
          defaultValue=""
          className=""
          onChange={(e) => route.push(e.target.value)}
        >
          <option value="" hidden>
            Pages
          </option>
          <option value="/testimonial">testimonial</option>
          <option value="/reservation">reservation</option>
        </select>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
