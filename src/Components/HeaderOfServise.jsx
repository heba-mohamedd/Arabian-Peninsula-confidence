import { motion } from "framer-motion";

export default function HeaderOfServise({ title }) {
  return (
    <motion.div
      className="bg-primary/10 text-center my-13"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.p
        className="p-5 text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
}
