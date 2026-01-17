import React from "react";
import { motion } from "framer-motion";
import certificateLogo from "../assets/certificateLogo.png";
import flag from "../assets/Flag.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const flagVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

export default function CertificatCard({ certificat }) {
  return (
    <motion.div
      className="relative flex flex-col justify-between h-auto rounded-xl shadow-sm overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Flag */}
      <motion.img
        src={flag}
        alt="flag"
        className="absolute top-0 right-0 w-10"
        variants={flagVariants}
      />

      {/* Certificate Logo */}
      <div className="flex items-center justify-center flex-1 bg-white">
        <motion.img
          src={certificateLogo}
          alt="certificate logo"
          className="object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Footer */}
      <div className="bg-neutral-200 flex justify-center items-center px-4 py-3">
        <p className="text-dark-grey px-3">إدارة الجودة</p>
        <p className="font-medium">{certificat}</p>
      </div>
    </motion.div>
  );
}
