import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Header from "./ui/Header.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    text: "تم تنفيذ الأعمال وفق المتطلبات الفنية المعتمدة وبمستوى عالٍ من الاحترافية، مع التزام واضح بالجداول الزمنية.",
    author: "جهة حكومية",
    color: "from-green-500/20",
  },
  {
    id: 2,
    text: "خدمة متميزة وفريق عمل محترف، ساهموا في تحسين كفاءة التشغيل بشكل ملحوظ.",
    author: "شركة خاصة",
    color: "from-blue-500/20",
  },
  {
    id: 3,
    text: "الالتزام بالمعايير العالمية والجودة العالية في التنفيذ جعلتنا نثق بهم في جميع مشاريعنا.",
    author: "مؤسسة صحية",
    color: "from-emerald-500/20",
  },
];

export default function ReviewSection() {
  return (
    <section className="mb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <Header
          title="تجارب شركائنا في مختلف القطاعات"
          description="نعتز بثقة كبرى المؤسسات التي ساهمنا معها في تحقيق تطلعات رؤية المملكة."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-primary/5 blur-3xl rounded-full" />

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="max-w-[350px] sm:max-w-[500px]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative backdrop-blur-md bg-white/80 border border-white shadow-xl rounded-3xl p-8 md:p-12 overflow-hidden group`}
                >
                  {/* تأثير ضوئي عند الزاوية */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${review.color} to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
                  />

                  <FaQuoteRight className="text-5xl text-primary/10 mb-6" />

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium relative z-10 italic">
                    {review.text}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-primary/30" />
                    <span className="text-primary font-bold tracking-wide">
                      {review.author}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 6px;
          border-radius: 4px;
          background: #00963f !important; /* لونك المفضل */
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
        }
        .swiper-slide {
          transition: opacity 0.5s;
          opacity: 0.4;
        }
        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
