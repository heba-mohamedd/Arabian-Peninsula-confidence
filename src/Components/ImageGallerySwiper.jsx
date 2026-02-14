import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";

export default function ImageGallerySwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  // Enable loop only if we have enough slides
  const shouldLoop = images.length > 2;

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#00963F",
          "--swiper-pagination-color": "#00963F",
          height: "400px", // Fixed height for main swiper
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={shouldLoop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow, Autoplay]}
        className="rounded-2xl overflow-hidden mb-4 shadow-2xl"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={`main-${index}`}>
            <img
              src={imageUrl}
              alt={`صورة ${index + 1}`}
              style={{
                width: "100%",
                height: "384px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={shouldLoop}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          height: "96px", // Fixed height for thumbnails
        }}
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
              className="rounded-lg hover:opacity-70 transition-opacity"
              style={{
                width: "100%",
                height: "96px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
