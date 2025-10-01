
import Link from "next/link";
import React from "react";

function PageHeader({ route }) {
  return (
    <div className="">
      <div className="bg-[url('/img/bg.jpg')] bg-center bg-cover bg-blend-multiply bg-[#251203] h-[400px] font-bold text-white text-5xl flex flex-col gap-y-4 justify-center items-center">
        <p>{route}</p>
        <div className="flex text-[15px]">
          <Link href="/" >Home</Link>
          <p className="px-3">/</p>
          <p>{route}</p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
