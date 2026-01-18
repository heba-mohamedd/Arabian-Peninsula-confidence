import React from "react";
import { motion } from "framer-motion";
import Header from "./ui/Header";
import { useClientsQuery } from "../hooks/queries/useClientsQuery.js";

const Clients = React.memo(function Clients() {
  const { data } = useClientsQuery();

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

  return (
    <section className="overflow-hidden py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Header */}
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
                flex items-center justify-center
                ${index >= 4 ? "lg:translate-x-10" : ""}

              `}
            >
              <img
                src={item.logo_url}
                alt={`logo-${index}`}
                loading="lazy"
                className="w-full h-24 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Clients;
