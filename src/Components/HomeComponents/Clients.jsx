import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/Header.jsx";
import { useClientsQuery } from "../../hooks/queries/useClientsQuery.js";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery"; // Import settings

export function Clients() {
  const { data, isLoading } = useClientsQuery();
  const { data: settingsData } = useSettingsQuery(); // Fetch settings
  const settings = settingsData?.data || {};

  const sectionTitle = settings["clients_section_title"] || "عملاؤنا";
  const sectionDesc =
    settings["clients_section_description"] ||
    "فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في مختلف القطاعات.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Show skeleton while loading
  if (isLoading) {
    return (
      <section className="overflow-hidden py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col justify-center items-center mb-12">
            <div className="h-10 w-64 bg-gray-200 rounded mb-4 skeleton-shimmer"></div>
            <div className="h-6 w-96 bg-gray-200 rounded skeleton-shimmer"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-full h-24 bg-gray-200 rounded skeleton-shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
        {data?.data && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center mb-12"
          >
            <Header title={sectionTitle} description={sectionDesc} />
          </motion.div>
        )}

        {/* Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {data?.data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full h-24 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                <img
                  src={item.logo_url}
                  alt={`logo-${index}`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
