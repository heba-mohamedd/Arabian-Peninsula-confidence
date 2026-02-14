import React from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard.jsx";

export function ServicesDescription({ typeDescription, services }) {
  return (
    <>
      <motion.p
        className="text-xl mb-6 leading-relaxed text-gray-700 font-medium"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {typeDescription}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
