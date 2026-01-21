import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Subtract.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import ImageSkeleton from "./ui/skeletons/ImageSkeleton";
import TextSkeleton from "./ui/skeletons/TextSkeleton";

export default function About({ data }) {
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
      <section className="container max-w-7xl mx-auto py-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-start px-7">
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
    <section className=" container max-w-7xl mx-auto  py-12 overflow-hidden ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="text-start px-7"
        >
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            نبذة عنا
          </h2>
          <p className="text-dark-grey text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            {data?.description}
          </p>

          <ul className="space-y-3 md:space-y-4">
            {data?.highlights.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-3 text-secondary font-medium text-sm sm:text-base md:text-lg"
              >
                <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="
    relative 
    flex 
    justify-center 
    mx-auto 
    w-full 
    px-4
    max-w-sm 
    sm:max-w-md 
    lg:max-w-lg 
    overflow-hidden 
    rounded-2xl
  "
        >
          <img
            src={data?.image_url}
            alt="About Thibat"
            className="w-full h-auto object-cover rounded-2xl"
          />

          {/* <div
            className="
      absolute
      bottom-0 right-0
     

      w-14 h-14
      sm:w-16 sm:h-16
      lg:w-19 lg:h-19

      bg-primary
      rounded-full
      flex items-center justify-center
      cursor-pointer
mx-4
      hover:scale-110
      active:scale-95
      transition-all
      shadow-lg
    "
          >
            <IoPlayCircleOutline className="text-white" size={28} />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
