import React from "react";
import { motion } from "framer-motion";
import { LuDot } from "react-icons/lu";
import { Carousel } from "antd";
import Header from "./ui/Header";

// Animation variants
const slideVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeatureItem = ({ text, delay = 0 }) => (
  <motion.div
    className="flex items-start h-[30%] py-10 bg-neutral-200 rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, x: 5 }}
  >
    <LuDot className="shrink-0" size={24} />
    <p className="leading-relaxed">{text}</p>
  </motion.div>
);

/**
 * FeatureImageSection Component
 *
 * Reusable component that displays features in a 3-column grid layout:
 * - Left column: First half of features
 * - Center column: Image carousel with animations
 * - Right column: Second half of features
 *
 * @param {string} title - Section title
 * @param {Array<Object>} features - Array of feature objects with 'point' property (flexible length)
 * @param {Array<string>} images - Array of image source URLs for carousel
 * @param {string} imageAlt - Alt text for the images
 */
export default function FeatureImageSection({
  title,
  description,
  features = [],
  images = [],
  imageAlt = "Feature Image",
}) {
  // Calculate the midpoint to split features evenly
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <div className="my-5">
      <Header title={title} description={description} />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-5 gap-4 md:gap-0">
        {/* Right List */}
        <motion.div
          className="order-2 lg:order-1 space-y-4"
          variants={slideVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {leftFeatures.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature?.point}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 },
          }}
        >
          <Carousel
            autoplay
            autoplaySpeed={2000}
            className="w-56 sm:w-64 md:w-82" // عرض الكاروسيل ككل
          >
            {images.map((imgSrc, index) => (
              // 1. يجب إعطاء الحاوية ارتفاعاً ثابتاً (Height)
              <div
                key={index}
                className="h-64 sm:h-72 md:h-80 w-full relative overflow-hidden rounded-xl"
              >
                <img
                  src={imgSrc}
                  alt={`${imageAlt} ${index + 1}`}
                  loading="lazy"
                  // 2. الصورة تأخذ الطول والعرض 100% وتغطي المساحة
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Left List */}
        <motion.div
          className="order-3 space-y-4"
          variants={slideVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rightFeatures.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature?.point}
              delay={index * 0.1 + 0.2}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
