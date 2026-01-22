import React from "react";
import { motion } from "framer-motion";
import Header from "./ui/Header";
import CardSkeleton from "./ui/skeletons/CardSkeleton";
import { useClientsQuery } from "../hooks/queries/useClientsQuery.js";

const Clients = React.memo(function Clients() {
  const { data, isLoading } = useClientsQuery();

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
            <Header
              title="عملاؤنا"
              description="فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في مختلف القطاعات."
            />
          </motion.div>
        )}

        {/* Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {data?.data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`
                flex items-center justify-center rounded-lg p-4   
                ${index >= 4 ? "lg:translate-x-10" : ""}
              `}
            >
              <img
                src={item.logo_url}
                alt={`logo-${index}`}
                loading="lazy"
                style={{
                  width: "200px",
                  height: "100px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Clients;
