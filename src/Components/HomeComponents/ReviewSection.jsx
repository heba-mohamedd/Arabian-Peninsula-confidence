import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Header from "../ui/Header.jsx";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    text: "تم تنفيذ الأعمال وفق المتطلبات الفنية المعتمدة وبمستوى عالٍ من الاحترافية، مع التزام واضح بالجداول الزمنية.",
    author: "جهة حكومية",
  },
  {
    id: 2,
    text: "خدمة متميزة وفريق عمل محترف، ساهموا في تحسين كفاءة التشغيل بشكل ملحوظ.",
    author: "شركة خاصة",
  },
  {
    id: 3,
    text: "الالتزام بالمعايير العالمية والجودة العالية في التنفيذ جعلتنا نثق بهم في جميع مشاريعنا.",
    author: "مؤسسة صحية",
  },
];

export function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-5 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <Header
          title="تجارب شركائنا في مختلف القطاعات"
          description="نعتز بثقة كبرى المؤسسات التي ساهمنا معها في تحقيق تطلعات رؤية المملكة."
        />

        <div className="relative max-w-5xl mx-auto mt-10">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="السابق"
          >
            <IoChevronBackOutline className="text-2xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="التالي"
          >
            <IoChevronForwardOutline className="text-2xl" />
          </button>

          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-md px-8 py-16 mx-8 md:mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center ">
                  <span className="text-6xl font-serif text-gray-200 leading-none">
                    <FaQuoteLeft />
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 font-medium">
                  "{reviews[currentIndex].text}"
                </p>

                {/* Author */}
                <p className="text-lg md:text-xl text-gray-400">
                  ( <span>{reviews[currentIndex].author}</span> )
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-3 mb-5">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`الانتقال إلى الشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
