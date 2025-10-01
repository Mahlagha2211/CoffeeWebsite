import React from "react";

function About() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-y-2 ">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">ABOUT US</p>
        <h1 className="md:text-4xl text-2xl font-bold">Serving Since 1950</h1>
      </div>
      <div className="min-[1100px]:px-28  sm:max-[1100px]:px-10 px-5 flex max-[1000px]:flex-col max-[1000px]:items-center gap-y-10  py-10">
        <div className="space-y-2 max-[1000px]:text-center ">
          <h1 className="text-2xl max-sm:text-lg font-bold">Our Story</h1>
          <p className="font-bold max-sm:text-sm">
            Eos kasd eos dolor vero ,lorem stet diam rebum.ipsum amet sed vero
            dolor sea
          </p>
          <p className="max-md:text-[12px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis.
          </p>
          <p className="text-white bg-black px-2 py-1 inline-block">
            Learn More
          </p>
        </div>

        <img src="/img/about.png" className="w-80 max-md:w-60  " />

        <div className="space-y-2 max-[1000px]:text-center">
          <h1 className="text-2xl max-sm:text-lg font-bold">Our Vision</h1>
          <p className="max-md:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis.
          </p>
          <ul className="list-inside list-disc">
            <li className="font-bold  max-sm:text-sm">Lorem ipsum dolor sit amet</li>
            <li className="font-bold  max-sm:text-sm">Lorem ipsum dolor sit amet</li>
            <li className="font-bold max-sm:text-sm">Lorem ipsum dolor sit amet</li>
          </ul>
          <p className="text-black bg-amber-800 px-2 py-1 inline-block">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
