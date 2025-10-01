import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <div className="h-[700px] ">
      <Swiper
      loop={true}
        navigation={true}
        modules={[Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide className="flex items-center justify-center h-full  text-lg ">
          <div className="bg-[url('/img/carousel-1.jpg')] bg-center bg-cover brightness-75 bg-[#805c5b] bg-blend-multiply  h-full">
            <div className=" text-white flex justify-center items-center flex-col gap-y-2 h-full">
              <p className="text-2xl text-[#cf8423]">we have been serving</p>
              <h1 className="text-8xl">COFFEE</h1>
              <p>* SINCE 1950 *</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center    text-lg">
          <div className="bg-[url('/img/carousel-2.jpg')]  brightness-75 bg-cover bg-[#b38b89] bg-blend-multiply  h-full">
      
            <div className=" text-white flex justify-center items-center flex-col gap-y-2 h-full">
              <p className="text-2xl text-[#cf8423]">we have been serving</p>
              <h1 className="text-8xl">COFFEE</h1>
              <p>* SINCE 1950 *</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
