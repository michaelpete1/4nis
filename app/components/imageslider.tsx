"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "/babyimage2.jpg",
  "/kitchen ut2.jpg",
  "/babyimage4.jpg",
  "/pc3.jpg",
  "/pc.jpg",
  "/kitchen ut.jpg",
  "/babyimage.jpg",
];

export default function ImageSlider() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 mt-6 gap-8">
      <div className="w-full flex justify-center items-center py-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} // Adds spacing between slides
          slidesPerView={3} // Show 3 images at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
          className="max-w-[90%] w-full" // Ensures Swiper takes up most of the screen
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="w-[500px] h-[350px]">
                {" "}
                {/* Increased Width & Height */}
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={350}
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center w-full max-w-2xl mt-6">
        <h2 className="text-3xl font-bold text-gray-800">
          We Are The Best Place To Shop!
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover high-quality clothes and electronics at unbeatable prices.
          Experience seamless online shopping with us.
        </p>
      </div>
    </div>
  );
}
