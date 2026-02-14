import React from "react";
import { motion } from "framer-motion";
import HeaderOfServise from "../HeaderOfServise.jsx";
import ImageGallerySwiper from "../ImageGallerySwiper.jsx";
import { ServicesDescription } from "./ServicesDescription.jsx";

export function SystemSection({ typeSystem }) {
  return (
    <motion.section
      className="w-full mb-16 perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-6 md:p-8">
          <HeaderOfServise title={typeSystem?.title} />

          {/* Image Gallery with Swiper */}
          {typeSystem?.images && typeSystem.images.length > 0 && (
            <motion.div
              className="mt-8 rounded-2xl overflow-hidden shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ImageGallerySwiper
                images={typeSystem.images.map((img) => img.image || img)}
              />
            </motion.div>
          )}

          <div className="mt-8">
            <ServicesDescription
              typeDescription={typeSystem?.description}
              services={typeSystem?.items}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
