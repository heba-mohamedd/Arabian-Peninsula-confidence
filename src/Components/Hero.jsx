import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/bms-main.jpg";

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-80 sm:h-96 md:h-125 lg:h-150 w-full overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <motion.div
        className="absolute inset-0 transform scale-y-[-1]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-[#00963F] opacity-20"
          style={{
            clipPath: "polygon(45% 0, 100% 0, 100% 100%, 60% 100%)",
          }}
        />

        <div
          className="absolute inset-0 bg-[#00963F] opacity-20"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 65% 100%)",
            transform: "translateX(30px)",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-20 container mx-auto h-full flex flex-col justify-center items-end px-4 sm:px-6 md:px-12 lg:px-20 text-white text-right"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1
            variants={textItem}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight"
          >
            حلول متكاملة لإدارة وتشغيل <br className="hidden sm:block" />
            المرافق والأنظمة
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-90"
          >
            نقدم خدمات متخصصة تشمل إدارة المرافق، تكامل الأنظمة، التشغيل
            <br className="hidden md:block" />
            والصيانة، وفق أعلى المعايير المعتمدة في المملكة.
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0 bg-blue-900/10 pointer-events-none"></div>
    </section>
  );
}
