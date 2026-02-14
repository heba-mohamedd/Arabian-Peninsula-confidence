import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function DownloadFloatButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed left-6 bottom-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
    >
      <motion.a
        href="/company-profile"
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing Background Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Button */}
        <motion.div
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden"
          animate={{
            boxShadow: isHovered
              ? "0 20px 60px rgba(0, 150, 63, 0.5)"
              : "0 10px 40px rgba(0, 150, 63, 0.3)",
          }}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IoCloudDownloadOutline className="text-white text-2xl" />
          </motion.div>

          {/* Ripple Effect on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tooltip Text */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                تحميل ملف الشركة
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-gray-900 rotate-180" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Particles Effect */}
        {isHovered && (
          <>
            {[
              { x: -10, y: -50 },
              { x: 15, y: -45 },
              { x: -5, y: -55 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              />
            ))}
          </>
        )}
      </motion.a>

      {/* Download Icon Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
