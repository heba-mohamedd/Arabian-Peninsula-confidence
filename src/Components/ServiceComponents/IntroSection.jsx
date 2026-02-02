import React from "react";
import { motion } from "framer-motion";

export function IntroSection({ title, description, importantNote }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-3"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      <span className="text-center text-sm leading-6 md:leading-8 max-w-3xl mx-auto text-gray-500">
        {importantNote}
      </span>
    </motion.div>
  );
}
