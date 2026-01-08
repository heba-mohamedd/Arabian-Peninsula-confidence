import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/ourClients/Logo (1).png";
import logo2 from "../assets/ourClients/Logo (2).png";
import logo3 from "../assets/ourClients/Logo (3).png";
import logo4 from "../assets/ourClients/Logo (4).png";
import logo5 from "../assets/ourClients/Logo (5).png";
import logo6 from "../assets/ourClients/Logo (6).png";
import logo7 from "../assets/ourClients/Logo (7).png";
import logo8 from "../assets/ourClients/Logo.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function Clients() {
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
    <section className="py-16 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-4xl text-[#00963F] font-bold">عملاؤنا</p>
          <p className="text-gray-600 text-lg text-center py-4">
            فخورون بالشراكة مع مجموعة من الجهات الحكومية والخاصة، في <br />
            مختلف القطاعات.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center "
        >
          {logos.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <img src={img} alt="logos" className="w-[150px] md:w-[250px] " />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
