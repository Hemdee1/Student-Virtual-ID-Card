import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { imageDatas } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Pictures = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination
      autoplay={{ delay: 10000 }}
      loop
      className="h-full"
    >
      {imageDatas.map((data, index) => {
        const { author, img, quote } = data;

        return (
          <SwiperSlide key={index} className="relative">
            <img
              src={img}
              alt="image"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute font-semibold tracking-wider font-Lato right-10 max-w-[400px] p-5 rounded-xl bg-white bg-opacity-50 backdrop-blur-sm bottom-20">
              <q className="text-xl text-black">{quote}</q>
              <h5 className="mt-5 text-base text-gray-700">~ {author}</h5>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Pictures;
