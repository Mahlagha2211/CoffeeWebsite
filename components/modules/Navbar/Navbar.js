import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import DropdownNavbar from "./DropdownNavbar";

function Navbar() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    setSearch(route.query.q || "");
  }, [route.query.q]);

  return (
    <div className="absolute z-20 w-full text-white bg-transparent">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl md:text-4xl font-bold">NEXT-COFFEE</h1>

        <div className="hidden min-[1190px]:flex space-x-6 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b w-[250px] md:w-[300px] outline-0 bg-transparent focus:border-white"
              onKeyDown={(e) => e.key === "Enter" && searchHandler()}
            />
            <button
              onClick={searchHandler}
              aria-label="Search"
              className="absolute right-2 top-2"
            >
              <FaSearch />
            </button>
          </div>

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/menu">Menu</Link>
          <select
            defaultValue=""
            onChange={(e) => route.push(e.target.value)}
            className="bg-transparent"
          >
            <option value="" hidden>
              Pages
            </option>
            <option value="/testimonial">Testimonial</option>
            <option value="/reservation">Reservation</option>
          </select>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex min-[1190px]:hidden space-x-7">
          <div className="relative max-md:hidden">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-b w-80 outline-0 bg-transparent focus:border-white"
              onKeyDown={(e) => e.key === "Enter" && searchHandler()}
            />
            <button
              onClick={searchHandler}
              aria-label="Search"
              className="absolute right-2 top-2"
            >
              <FaSearch />
            </button>
          </div>
          <button className=" text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <DropdownNavbar
          search={search}
          searchHandler={searchHandler}
          setSearch={setSearch}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  );
}

export default Navbar;
