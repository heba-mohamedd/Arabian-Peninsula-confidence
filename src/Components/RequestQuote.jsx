import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgImage from "../assets/card.png";
import PrimaryButton from "./ui/PrimaryButton";

export default function RequestQuote({
  title = "",
  description = "",
  buttonText,
  buttonIcon,
  onClick,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="container mx-auto px-4 py-8 perspective-1000">
      <motion.div
        className="relative rounded-[2rem] overflow-hidden min-h-[350px] flex items-center justify-center shadow-2xl"
        initial={{ opacity: 0, rotateX: 10, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, scale: 1.2 }}
        >
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40"></div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center text-white max-w-3xl px-6 py-12 flex flex-col items-center backdrop-blur-sm rounded-3xl border border-white/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title && (
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {title}
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
            </motion.h2>
          )}

          {description && (
            <motion.p
              className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-100/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PrimaryButton
                text={buttonText}
                icon={buttonIcon}
                onClick={onClick}
                className="shadow-[0_0_20px_rgba(0,150,63,0.4)] hover:shadow-[0_0_30px_rgba(0,150,63,0.6)]"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
