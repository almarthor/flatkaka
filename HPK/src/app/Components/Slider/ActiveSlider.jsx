import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 0,

          disableOnInteraction: false,
        }}
        speed={30000}
        modules={[FreeMode, Pagination, Autoplay]}
        className=" w-full"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" flex flex-col gap-6 mb-20 border-2 border-solid border-red-500 group relative shadow-lg rounded-xl px-6 py-8 h-[400px] lg:h-[600px] w-fit overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-white opacity-70 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl text-center border-b-2 border-solid border-red-500 px-5 pb-5">
                  {item.title}{" "}
                </h1>
                <img src={item.Image} alt="images" className=" w-screen" />
                <p className="lg:text-[18px] text-center border-solid border-t-2 border-red-500 pt-5">
                  {item.content}{" "}
                </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] group-hover:text-red-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
