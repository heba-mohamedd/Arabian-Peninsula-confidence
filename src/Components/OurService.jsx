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
      className="container max-w-7xl py-6 overflow-hidden mx-auto my-5"
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

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {service.slice(0, 3).map((item) => (
          <ServiceCard item={item} key={item.id} />
        ))}
      </motion.div>
    </section>
  );
});

export default OurService;
