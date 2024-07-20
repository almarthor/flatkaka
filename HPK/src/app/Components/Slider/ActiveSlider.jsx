// src/app/Components/Slider/ActiveSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import Link from "next/link";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col relative w-full">
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[FreeMode, Navigation]}
        className="w-full"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={`/vorur/[title]?title=${item.title}`}>
              <div className="bg-gray-100 bg-opacity-70 hover:bg-opacity-100 flex flex-col mb-20 border-2 border-solid border-red-500 hover:border-green-600 hover:shadow-2xl group relative shadow-lg rounded-xl h-[400px] sm:h-[400px] sm:w-full overflow-hidden cursor-pointer">
                <div className="flex flex-col h-full bg-transparent p-4">
                  <div className="h-16 flex items-center justify-center border-b-2 border-red-500  bg-transparent">
                    <h2 className="text-xl lg:text-2xl text-center px-5">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-grow flex items-center justify-center h-38 lg:h-[100px] bg-transparent">
                    <img
                      src={item.Image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 flex items-center justify-center border-t-2 border-red-500 mt-2 px-4 text-center bg-transparent">
                    <p className="text-sm lg:text-base">{item.content}</p>
                  </div>
                </div>
                <RxArrowTopRight className="absolute bottom-5 right-5 w-[35px] h-[35px] group-hover:text-red-500 group-hover:rotate-45 duration-100" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" sm:hidden swiper-button-prev custom-swiper-button absolute left-0 top-0 bottom-0 my-auto cursor-pointer"></div>
      <div className=" sm:hidden swiper-button-next custom-swiper-button absolute right-0 top-0 bottom-0 my-auto cursor-pointer"></div>
    </div>
  );
};

export default ActiveSlider;
