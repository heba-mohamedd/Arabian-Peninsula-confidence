import React from "react";
import { motion } from "framer-motion";
import { useFacilityServicesQuery } from "../hooks/queries/useFacilityServices.js";
import PageLoader from "../Components/ui/PageLoader.jsx";
import { SystemSection } from "../Components/ServiceComponents";
import bgImage from "../assets/bms-main.jpg"; // Using existing asset for consistency
import { useTranslation } from "react-i18next";

export default function Services() {
  const { data: facilityManagementData, isLoading } =
    useFacilityServicesQuery();
  const { t } = useTranslation();

  if (isLoading) {
    return <PageLoader />;
  }

  const { name, description, important_note, types } = facilityManagementData?.data || {};

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* 1. Premium Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/95 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md mb-8">
            {description}
          </p>

          {important_note && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-sm md:text-base text-gray-100 max-w-2xl mx-auto"
            >
              <span className="text-primary font-bold ml-2">{t("Note")}:</span>
              {important_note}
            </motion.div>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-24 h-1 bg-primary mx-auto mt-10 rounded-full"
          />
        </motion.div>
      </section>

      {/* 2. Main Content Area */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 -mt-10 pb-20">
        <div className="flex flex-col gap-12">
          {types?.map((typeSystem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <SystemSection typeSystem={typeSystem} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-[40%] left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
    </div>
  );
}
