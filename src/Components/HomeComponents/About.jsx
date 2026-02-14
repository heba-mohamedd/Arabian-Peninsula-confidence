import React from "react";
import { motion } from "framer-motion";
import ImageSkeleton from "../ui/skeletons/ImageSkeleton";
import TextSkeleton from "../ui/skeletons/TextSkeleton";
import { BsCheckCircleFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export function About({ data }) {
  const { t } = useTranslation();
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Show skeleton if data is not available
  if (!data) {
    return (
      <section className="container max-w-7xl mx-auto py-16 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-start px-4">
            <div className="h-10 w-48 bg-gray-200 rounded mb-6 skeleton-shimmer"></div>
            <TextSkeleton lines={4} />
            <div className="space-y-3 mt-6">
              <TextSkeleton lines={3} width="90%" />
            </div>
          </div>
          <div className="flex justify-center mx-auto w-full px-4 max-w-sm sm:max-w-md lg:max-w-lg">
            <ImageSkeleton height="400px" className="rounded-2xl" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container max-w-7xl mx-auto py-16 md:py-24 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="text-start relative z-10"
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            من نحن
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            شريكك الاستراتيجي للنجاح والتميز
          </h2>
          <p className="text-dark-grey text-base sm:text-lg leading-relaxed mb-8 opacity-90">
            {data?.description}
          </p>

          <ul className="space-y-4">
            {data?.highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <BsCheckCircleFill className="text-primary mt-1 flex-shrink-0 text-xl" />
                <span className="text-secondary font-medium text-base sm:text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="relative flex justify-center w-full"
        >
          {/* Decorative Blob */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={data?.image_url}
              alt={t("About Us")}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

          {/* Floating Experience Badge (Optional cosmetic add) */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
            <p className="text-center">
              <span className="block text-3xl font-bold text-primary">10+</span>
              <span className="text-sm text-gray-500 font-medium">{t("Years Experience")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
