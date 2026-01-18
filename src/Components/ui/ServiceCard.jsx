import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const { Meta } = Card;

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const ServiceCard = React.memo(({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/SectorDetails/${item?.id}`}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          y: -12,
          scale: 1.03,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.97 }}
        className="w-full h-full relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg z-0 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <Card
          hoverable
          cover={
            <div className="overflow-hidden relative h-80">
              <motion.img
                draggable={false}
                alt={item?.name}
                src={item?.image_url}
                className="w-full h-full object-cover"
                loading="lazy"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                }}
              />
              {/* <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              /> */}
            </div>
          }
          className="text-center h-full relative overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Meta
              title={<span className="text-sm md:text-base">{item?.name}</span>}
            />
            <motion.div
              animate={{
                y: isHovered ? [0, -8, 0] : 0,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.2,
              }}
            >
              <IoMdArrowDropdown size={35} color="#009640" />
            </motion.div>
          </div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </Card>
      </motion.div>
    </Link>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
