import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ui/ServiceCard.jsx";
import useSectorsQuery from "../../hooks/queries/sectors/useSectorsQuery.js";
import { useTranslation } from "react-i18next";

// Variants للـ Framer Motion
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const OurService = React.memo(function OurService() {
  const { data } = useSectorsQuery();
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 relative pb-4">
              {t("Sectors We Serve")}
              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              ></motion.span>
            </h2>
            <p className="text-dark-grey text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
              {t("Sectors Description")}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data?.data?.slice(0, 3).map((item) => (
            <ServiceCard item={item} key={item.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});
