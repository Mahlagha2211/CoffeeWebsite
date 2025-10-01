import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaSearch } from "react-icons/fa";

function DropdownNavbar({ setSearch, searchHandler, search ,setMenuOpen}) {
  const route = useRouter();
  return (
    <div className="min-[1190px]:hidden flex flex-col space-y-4 px-6 pb-6 bg-black bg-opacity-80">
      <div className="relative md:hidden">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-b w-full outline-0 bg-transparent focus:border-white"
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

      <Link href="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link href="/about" onClick={() => setMenuOpen(false)}>
        About
      </Link>
      <Link href="/services" onClick={() => setMenuOpen(false)}>
        Services
      </Link>
      <Link href="/menu" onClick={() => setMenuOpen(false)}>
        Menu
      </Link>
      <select
        defaultValue=""
        onChange={(e) => {
          route.push(e.target.value);
          setMenuOpen(false);
        }}
        className="bg-transparent"
      >
        <option value="" hidden>
          Pages
        </option>
        <option value="/testimonial">Testimonial</option>
        <option value="/reservation">Reservation</option>
      </select>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>
        Contact
      </Link>
    </div>
  );
}

export default DropdownNavbar;
