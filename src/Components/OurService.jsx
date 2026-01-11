import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ui/ServiceCard";
import { service } from "../data/data";

// Variants للـ Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const OurService = React.memo(function OurService() {
  return (
    <section
      className="container  max-w-7xl py-12 md:py-16 lg:py-20 overflow-hidden mx-auto"
      dir="rtl"
    >
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-0">
        <p className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          القطاعات التي نخدمها
        </p>
        <p className="text-dark-grey text-sm sm:text-base md:text-lg text-center py-3 md:py-4 max-w-3xl">
          نقدم حلولنا لعدة قطاعات حيوية، مع مراعاة متطلبات التشغيل والأنظمة
          <br className="hidden md:block" />
          الخاصة بكل قطاع.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {service.map((item) => (
            <ServiceCard item={item} key={item.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default OurService;
