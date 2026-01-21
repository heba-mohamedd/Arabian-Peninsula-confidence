import React from "react";
import CircleCard from "./ui/CircleCard";
import { motion } from "framer-motion";

export default function Steps({ steps = [] }) {
  // Calculate grid columns based on number of steps
  const getGridClass = (count) => {
    if (count === 1) return "grid-cols-1 max-w-xs mx-auto";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto";
    if (count === 3) return "grid-cols-2 sm:grid-cols-3 max-w-4xl mx-auto";
    if (count === 4) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
    // 5 or more
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
  };

  const gridClass = getGridClass(steps.length);

  return (
    <div className="w-full">
      {/* Desktop: Grid Layout */}
      <div className={`hidden md:grid ${gridClass} gap-4 md:gap-6`}>
        {steps.map((step, index) => (
          <CircleCard
            key={step.id || index}
            stepNumber={index}
            title={step.title}
            description={step.description}
            imageUP={index % 2 !== 0}
            offset={index % 2 === 0}
          />
        ))}
      </div>

      {/* Mobile: Vertical Layout */}
      <div className="block md:hidden space-y-8 mt-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.id || index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CircleCard
              stepNumber={index}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
