import React from "react";
import { motion } from "framer-motion";

import Header from "./ui/Header";
import { logos } from "../data/data";

const Clients = React.memo(function Clients() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <Header
            title=" عملاؤنا"
            description={` فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في
            مختلف القطاعات.
  `}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 justify-items-center"
        >
          {logos.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt="logos" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Clients;
