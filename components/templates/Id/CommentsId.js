import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./CommentsId.module.css";
// import required modules
import { Pagination } from "swiper/modules";

function CommentsId({ data }) {
  console.log(data);
  return (
    <div>
      <div className="py-10 flex flex-col justify-center items-center">
        <div className="w-1 bg-amber-800 h-20"></div>
        <p className="text-amber-700 text-lg">Testimonial</p>
      </div>
      <div className="min-[1100px]:px-28  sm:max-[1100px]:px-10 px-5 pb-20">
        {data.length > 0 ? (
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {data.map((item) => (
              <SwiperSlide className={styles.swiperSlide}>
                <div className="flex flex-col  items-center gap-y-2">
                  <img src={item.img} className="w-20" />
                  <p>{item.name}</p>
                  <p className="text-[10px]">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CommentsId;
