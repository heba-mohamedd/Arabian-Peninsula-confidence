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
  description,
  icon,
  headerColor = "",
  cardColor = "",
  iconColor = "",
}) => {
  return (
    <motion.div
      className={`${cardColor} rounded-lg flex flex-col gap-5 h-60`}
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

      {/* Description */}
      <p className="text-dark-grey leading-relaxed mx-5 mb-5 whitespace-pre-line">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
