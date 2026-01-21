import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ImageGallerySwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#00963F",
          "--swiper-pagination-color": "#00963F",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl overflow-hidden mb-4 h-96 md:h-[400px]"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={`main-${index}`}>
            <img
              src={imageUrl}
              alt={`صورة ${index + 1}`}
              // className="w-full h-full object-cover"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-24 md:h-32"
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={`thumb-${index}`} className="cursor-pointer">
            <img
              src={imageUrl}
              alt={`معاينة ${index + 1}`}
              className="w-full h-full object-contain rounded-lg hover:opacity-70 transition-opacity"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
