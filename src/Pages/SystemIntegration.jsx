import React from "react";
import { motion } from "framer-motion";
import { LuDot } from "react-icons/lu";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import cameraImage from "../assets/cameraImage.png";
import RequestQuote from "../Components/RequestQuote";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import BMSSection from "../Components/BMSSection";
import GraphFlow from "../Components/GraphFlow.jsx";
import { useNavigate } from "react-router-dom";

// Animation variants
const bounceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
};

const slideVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeatureItem = ({ text, delay = 0 }) => (
  <motion.div
    className="flex items-start h-[30%] py-10 bg-neutral-200 rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, x: 5 }}
  >
    <LuDot className="shrink-0" size={24} />
    <p className="leading-relaxed">{text}</p>
  </motion.div>
);

export default function SystemIntegration() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact-us#contact");
  }
  const surveillanceFeatures = [
    "كاميرات مراقبة بدقة 4K من : Hikvision | Avigilon | Axis | Dahua",
    "أنظمة التعرف على لوحات المركبات (LPR/ANPR)",
    "كاميرات مراقبة بدقة 4K من : Hikvision | Avigilon | Axis | Dahua",
    "أنظمة التعرف على لوحات المركبات (LPR/ANPR)",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title="خدمات تكامل الانظمة" />
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mt-8 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <Header
              title="حلول تكامل الأنظمة المتطورة"
              description="نقدم حلول تكامل أنظمة متقدمة تربط بين التقنيات المختلفة داخل منشآتكم، لضمان تشغيل ذكي، آمن، ومستدام وفق أعلى المعايير المعتمدة."
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={bounceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <GraphFlow />
      </motion.div>
      <div className="container max-w-7xl mx-auto px-4">
        <div>
          <Header title="أنظمة المراقبة والكاميرات الأمنية" />

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-5 gap-4 md:gap:0">
            {/* Right List */}
            <motion.div
              className="order-2 lg:order-1 space-y-4"
              variants={slideVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {surveillanceFeatures.slice(0, 2).map((feature, index) => (
                <FeatureItem key={index} text={feature} delay={index * 0.1} />
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={cameraImage}
                alt="Security Camera"
                className="w-56 sm:w-64 md:w-82 drop-shadow-2xl transition-transform duration-300"
              />
            </motion.div>

            {/* Left List */}
            <motion.div
              className="order-3 space-y-4"
              variants={slideVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {surveillanceFeatures.slice(2, 4).map((feature, index) => (
                <FeatureItem
                  key={index}
                  text={feature}
                  delay={index * 0.1 + 0.2}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BMSSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10"
        >
          <RequestQuote
            title="خلّي أنظمتك تشتغل مع بعض… مش كل نظام لوحده"
            buttonText="تواصل مع فريق تكامل الأنظمة"
            onClick={handleClick}
            buttonIcon={<MdOutlinePhoneInTalk size={20} />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
