import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "../Components/FeatureCard";
import ModernProcess from "../Components/ModernProcess";
import PageLoader from "../Components/ui/PageLoader";
import BottomImage from "../assets/bottomImage.png";
import bgImage from "../assets/bms-main.jpg"; // Using consistent hero background
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { useAboutAsQuery } from "../hooks/queries/useAboutAsQuery.js";
import { useTranslation } from "react-i18next";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUs() {
  const { data, isLoading } = useAboutAsQuery();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  // Show page loader while initial data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  // Build aboutFeatures from API data
  const aboutFeatures = [
    {
      title: t("Our Vision"),
      points: data?.data?.vision?.map((item) => item.point) || [],
      icon: <MdOutlineRemoveRedEye size={28} />,
    },
    {
      title: t("Our Mission"),
      points: data?.data?.mission?.map((item) => item.point) || [],
      icon: <LuMessageSquareMore size={28} />,
    },
    {
      title: t("Our Values"),
      points: data?.data?.values?.map((item) => item.point) || [],
      icon: <LuMessageSquareMore size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* 1. Page Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/90 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {t("About Us")} <span className="text-primary">-</span>{" "}
            {t("Know the Entity")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {t("About Hero Description")}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 -mt-20 pb-20">
        {/* About Content & Image */}
        {/* About Content & Image - Redesigned */}
        <div className="mb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image Side - Larger and Prominent */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <motion.img
                src={data?.data?.image}
                alt={t("About Us")}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[3rem] hidden md:block"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

            {/* Years/Experience Badge (Optional visual interest) */}
            <motion.div
              className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50 hidden sm:block"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black text-primary">2030</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  {t("Vision Future")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              <span className="text-primary font-bold text-lg uppercase tracking-wider">
                {t("Our Story")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-8 leading-tight">
              {data?.data?.title || t("Default Story Title")}
            </h2>

            <div className="prose prose-lg text-gray-600 leading-relaxed mb-8 opacity-90">
              <p>{data?.data?.description}</p>
            </div>

            {/* Stats or simple highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">
                    {t("High Quality")}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t("High Quality Description")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xl shrink-0">
                  ★
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">
                    {t("Outstanding Experience")}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t("Outstanding Experience Description")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid (Vision, Mission, Values) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">
              {t("Our Strategic Pillars")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <ModernProcess />
        </div>
      </div>

      {/* Bottom Image Promo - Redesigned */}
      <div className="relative py-28 lg:py-36 overflow-hidden">
        {/* Background with parallax effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${BottomImage})` }}
        />

        {/* Dark & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80"></div>

        {/* Content Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t("We Work For You")}{" "}
              <span className="text-primary block mt-2 text-2xl md:text-4xl font-bold">
                {t("With Passion and Perfection")}
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              {t("Bottom Promo Description")}
            </p>

            <motion.button
              onClick={() => navigate("/contact-us")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:border-primary text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <span>{t("Contact Us Now")}</span>
              <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
}
