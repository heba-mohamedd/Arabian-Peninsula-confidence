import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Header from "../ui/Header.jsx";
import { FaQuoteLeft } from "react-icons/fa";
import { useReviewsQuery } from "../../hooks/queries/useReviewsQuery";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery"; // Import settings

export function ReviewSection() {
  const { data: reviewsData, isLoading } = useReviewsQuery();
  const { data: settingsData } = useSettingsQuery(); // Fetch settings
  const reviews = reviewsData?.data || [];
  const settings = settingsData?.data || {};

  const sectionTitle = settings["reviews_section_title"] || "تجارب شركائنا";
  const sectionDesc =
    settings["reviews_section_description"] ||
    "نعتز بثقة كبرى المؤسسات التي ساهمنا معها في تحقيق تطلعات رؤية المملكة.";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }
  };

  const handlePrev = () => {
    if (reviews.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  React.useEffect(() => {
    if (!isPaused && reviews.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, reviews.length]);

  if (isLoading || reviews.length === 0) {
    return null; // Or show a skeleton
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header title={sectionTitle} description={sectionDesc} />

        <div
          className="relative max-w-4xl mx-auto mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none px-4 md:-px-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto transform hover:scale-110"
              aria-label="السابق"
            >
              <IoChevronBackOutline className="text-xl" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300 pointer-events-auto transform hover:scale-110"
              aria-label="التالي"
            >
              <IoChevronForwardOutline className="text-xl" />
            </button>
          </div>

          {/* Premium Review Card */}
          <div className="relative bg-white rounded-3xl shadow-xl px-8 py-12 md:p-16 mx-4 md:mx-12 overflow-hidden border border-gray-100">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <FaQuoteLeft className="text-9xl text-primary" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[currentIndex].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    {reviews[currentIndex].image_url ? (
                      <img
                        src={reviews[currentIndex].image_url}
                        alt={reviews[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaQuoteLeft className="text-2xl text-primary" />
                    )}
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-secondary leading-normal font-medium max-w-2xl mx-auto">
                    "{reviews[currentIndex].content}"
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <h4 className="text-lg font-bold text-primary">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-sm text-gray-500 font-medium">
                    {reviews[currentIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-primary/50"
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
