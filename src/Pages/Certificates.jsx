import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";

export default function Certificates() {
  return (
    <motion.section
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      <Title title="الـشـهادات" />
    </motion.section>
  );
}
