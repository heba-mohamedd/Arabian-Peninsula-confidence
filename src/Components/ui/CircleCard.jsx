import React from "react";
import { motion } from "framer-motion";

// Define flexible color palette for any number of steps
const STEP_COLORS = [
  {
    bg: "bg-emerald-500",
    border: "border-emerald-600",
    ring: "ring-emerald-200",
  },
  { bg: "bg-gray-800", border: "border-gray-900", ring: "ring-gray-300" },
  { bg: "bg-amber-500", border: "border-amber-600", ring: "ring-amber-200" },
  { bg: "bg-lime-500", border: "border-lime-600", ring: "ring-lime-200" },
  { bg: "bg-teal-500", border: "border-teal-600", ring: "ring-teal-200" },
  { bg: "bg-cyan-500", border: "border-cyan-600", ring: "ring-cyan-200" },
  { bg: "bg-blue-500", border: "border-blue-600", ring: "ring-blue-200" },
  { bg: "bg-purple-500", border: "border-purple-600", ring: "ring-purple-200" },
  { bg: "bg-pink-500", border: "border-pink-600", ring: "ring-pink-200" },
  { bg: "bg-rose-500", border: "border-rose-600", ring: "ring-rose-200" },
];

function CircleCard({
  stepNumber = 0,
  title,
  description = "",
  imageUP = false,
  className = "",
  offset = false,
  children = "",
}) {
  // Get color based on step number (cycles through colors)
  const color = STEP_COLORS[stepNumber % STEP_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: stepNumber * 0.1 }}
      className={`
        flex flex-col items-center text-center gap-4
        max-w-xs mx-auto
        ${className}
        ${offset ? "mt-8 md:mt-10" : ""}
      `}
    >
      {!imageUP && <CircleNumber stepNumber={stepNumber} color={color} />}

      <div className="px-3 py-2">
        <p className="text-base sm:text-lg font-medium">{title}</p>
        <div className="text-sm sm:text-base text-dark-grey">
          <p>{description}</p>
          {children}
        </div>
      </div>

      {imageUP && <CircleNumber stepNumber={stepNumber} color={color} />}
    </motion.div>
  );
}

const CircleNumber = ({ stepNumber, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="relative group"
  >
    {/* Glow effect */}
    <div
      className={`absolute -inset-3 ${color.bg} opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity`}
    ></div>

    {/* Outer circle (white background with colored border) */}
    <div
      className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full ${color.border} border-[5px] md:border-[7px] bg-white flex items-center justify-center shadow-xl`}
    >
      {/* Inner colored circle with number */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full ${color.bg} flex items-center justify-center shadow-inner`}
      >
        <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
          {stepNumber + 1}
        </span>
      </div>

      {/* Decorative corner dots */}
      <div className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-3 h-3 md:w-4 md:h-4 bg-white border-2 md:border-3 border-gray-400 rounded-full shadow"></div>
      <div className="absolute -bottom-1 -left-1 md:-bottom-1.5 md:-left-1.5 w-3 h-3 md:w-4 md:h-4 bg-white border-2 md:border-3 border-gray-400 rounded-full shadow"></div>
    </div>
  </motion.div>
);

export default React.memo(CircleCard);
