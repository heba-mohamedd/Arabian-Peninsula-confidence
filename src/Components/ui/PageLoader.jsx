import React from "react";
import { motion } from "framer-motion";
import logo from "/Logo.png"; // Ensure this path is correct based on project structure
import { useTranslation } from "react-i18next";

export default function PageLoader() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-50/90 backdrop-blur-md">
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* Outer Ring */}
        <motion.div
          className="absolute w-full h-full rounded-full border-[3px] border-transparent border-t-primary border-r-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border-[3px] border-transparent border-b-secondary border-l-secondary/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-20 h-20 p-2 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <img
            src={logo}
            alt="Loading..."
            className="w-12 h-auto object-contain"
          />
        </motion.div>

        {/* Orbiting Dot */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-3 h-3 bg-primary rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-glow" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <h3 className="text-xl font-bold text-gray-800 tracking-wider">
          {t("Loading", "جاري التحميل...")}
        </h3>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
