import { motion } from "framer-motion";
import bgImage from "../assets/card.png";
import PrimaryButton from "./ui/PrimaryButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RequestQuote({
  title = "",
  description = "",
  buttonText,
  buttonIcon,
  onClick,
}) {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        className="
          relative
          rounded-3xl
          overflow-hidden
          min-h-[250px]
          flex items-center justify-center
        "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.div
          className="
            relative z-10
            text-center text-white
            max-w-2xl
            px-6 py-10
            flex flex-col items-center
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title && (
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
          )}

          {description && (
            <motion.p
              className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}

          {buttonText && (
            <motion.div
              className="mt-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PrimaryButton
                text={buttonText}
                icon={buttonIcon}
                onClick={onClick}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
