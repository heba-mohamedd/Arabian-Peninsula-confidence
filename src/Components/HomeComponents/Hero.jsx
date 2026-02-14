import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "../../assets/bms-main.jpg";
import visionLogo from "../../assets/vision2030.jpg";
import { HiArrowNarrowDown } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery";

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 50, z: -100 },
  visible: {
    opacity: 1,
    y: 0,
    z: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "spring",
      damping: 20
    }
  },
};

export function Hero() {
  const { t } = useTranslation();
  const { data: settingsData } = useSettingsQuery();
  const settings = settingsData?.data || {};

  const heroTitle = settings['hero_title'];
  const heroDescription = settings['hero_description'];
  const heroSubtitle = settings['hero_subtitle'] || t("First Choice");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-[100vh] w-full overflow-hidden font-sans perspective-1000">
      {/* 3D Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 h-[120%]"
        style={{
          y: backgroundY,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Adds depth with multiple gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10 block"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 mix-blend-multiply"></div>
      </motion.div>

      {/* Floating 3D Elements (Abstract Shapes) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-[5%] w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"
          animate={{
            y: [0, 40, 0],
            rotate: [0, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Content with 3D Transforms */}
      <motion.div
        className="relative z-20 container mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-white"
        variants={textContainer}
        initial="hidden"
        animate="visible"
        style={{ y: textY, scale: textScale, opacity: textOpacity }}
      >
        <div className="max-w-5xl mx-auto text-center perspective-text">
          <motion.div
            variants={textItem}
            className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full mb-8 shadow-2xl hover:bg-white/10 transition-colors mx-auto"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-200 font-medium tracking-wide text-sm md:text-base">{heroSubtitle}</span>
          </motion.div>

          <motion.h1
            variants={textItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-2xl"
          >
            {heroTitle ? (
              <div dangerouslySetInnerHTML={{ __html: heroTitle }} />
            ) : (
              <>
                <span className="block text-white">{t("Smart Solutions")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary bg-300% animate-gradient">
                  {t("Sustainable Future")}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-gray-300 max-w-3xl mx-auto mb-12 drop-shadow-md"
          >
            {heroDescription || t("Hero Description")}
          </motion.p>

          <motion.div variants={textItem} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-primary overflow-hidden rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative text-white font-bold text-lg">{t("Contact Us Now")}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              {t("Explore Services")}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Floor Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f9fafb] to-transparent z-20 pointer-events-none"></div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer text-white/50 hover:text-white transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs tracking-widest uppercase">{t("Browse More")}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
