import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import bmsMain from "../assets/bms-main.png";
import bmsPlanning from "../assets/bms-planning.png";
import bmsConstruction from "../assets/bms-construction.png";
import { LuDot } from "react-icons/lu";

const BMS_DATA = {
  title: "أنظمة إدارة المباني",
  description:
    "توفر أنظمة إدارة المباني (BMS) حلاً ذكيًا للتحكم الكامل في مختلف أنظمة المبنى من خلال منصة مركزية، مما يسهم في تحسين الكفاءة التشغيلية وتقليل استهلاك الطاقة.",
  images: [bmsMain, bmsPlanning, bmsConstruction],
  features: [
    "إدارة الإضاءة الذكية حسب الحضور والوقت.",
    "مراقبة استهلاك الطاقة وتحليل الأداء.",
    "التكامل مع أنظمة الأمن والمراقبة والتحكم في الدخول.",
    "التحكم بالمصاعد، المولدات، والمضخات لضمان تشغيل مستقر.",
  ],
};

const FeatureCard = ({ text }) => (
  <div className="bg-neutral-200 p-4 rounded-xl">
    <p className="text-dark-grey font-medium text-sm lg:text-base">{text}</p>
  </div>
);

export default function BMSSection() {
  const [images] = useState(BMS_DATA.images);
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 3000;
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, duration);

    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <section className="py-10 flex">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-10">{BMS_DATA.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 group">
            <div className="relative w-3 bg-primary/20 rounded-full h-full min-h-[250px] overflow-hidden">
              <motion.div
                className="absolute left-0 w-full bg-green-600 rounded-full shadow-[0_0_10px_rgba(22,163,74,0.5)]"
                initial={false}
                animate={{
                  height: `${100 / images.length}%`,
                  top: `${(activeIndex * 100) / images.length}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <motion.img
                    src={img}
                    alt={`BMS illustration ${index + 1}`}
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                      filter:
                        activeIndex === index
                          ? "grayscale(0%)"
                          : "grayscale(40%)",
                      opacity: activeIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-auto shadow-md object-cover rounded-lg"
                  />
                  {activeIndex === index && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 border-2 border-green-500/30 rounded-lg pointer-events-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3 max-w-md">
              <LuDot className="shrink-0 mt-1" size={24} />
              <p className="leading-relaxed">{BMS_DATA.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              {BMS_DATA.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <FeatureCard text={feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
