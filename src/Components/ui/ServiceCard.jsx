import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const { Meta } = Card;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard = React.memo(({ item }) => {
  return (
    <Link to={`/SectorDetails/${item.id}`}>
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full"
      >
        <Card
          hoverable
          cover={
            <img
              draggable={false}
              alt={item.title}
              src={item.src}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
              loading="lazy"
            />
          }
          className="text-center h-full"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Meta
              title={<span className="text-sm md:text-base">{item.title}</span>}
            />
            <IoMdArrowDropdown size={35} color="#009640" />
          </div>
        </Card>
      </motion.div>
    </Link>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
