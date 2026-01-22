import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeatureCard = ({
  title,
  points = [],
  icon,
  headerColor = "",
  cardColor = "",
  iconColor = "",
}) => {
  return (
    <motion.div
      className={`${cardColor} rounded-lg flex flex-col gap-3 h-full`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      {/* Title */}
      <p
        className={`text-lg font-bold ${headerColor} rounded-md text-center p-4`}
      >
        {title}
      </p>

      {/* Icon */}
      <motion.div
        className={`${cardColor} p-2 mx-5 w-fit rounded-md`}
        style={{ color: iconColor }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>

      {/* Points List */}
      <ul className="space-y-2">
        {points?.map((point, index) => (
          <li
            key={index}
            className="text-dark-grey leading-relaxed mx-5 text-sm flex items-start gap-2"
          >
            <span className="text-primary mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeatureCard;
