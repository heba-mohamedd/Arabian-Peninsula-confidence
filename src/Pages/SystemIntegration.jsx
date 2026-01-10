import React from "react";
import { motion } from "framer-motion";
import { LuDot } from "react-icons/lu";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import systemIntegrationImage from "../assets/systemIntegrationImage.png";
import cameraImage from "../assets/cameraImage.png";
import RequestQuote from "../Components/RequestQuote";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import BMSSection from "../Components/BMSSection";
import ServicesMindMap from "../Components/ServicesMindMap";

const FeatureItem = ({ text }) => (
  <div className="flex items-start h-[30%] py-10 bg-neutral-200 rounded-xl  ">
    <LuDot className="shrink-0" size={24} />
    <p className=" leading-relaxed ">{text}</p>
  </div>
);

export default function SystemIntegration() {
  const surveillanceFeatures = [
    "كاميرات مراقبة بدقة 4K من : Hikvision | Avigilon | Axis | Dahua",
    "أنظمة التعرف على لوحات المركبات (LPR/ANPR)",
    "كاميرات مراقبة بدقة 4K من : Hikvision | Avigilon | Axis | Dahua",
    "أنظمة التعرف على لوحات المركبات (LPR/ANPR)",
  ];

  return (
    <motion.section
      dir="rtl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Title title="خدمات تكامل الانظمة" />
      <div className="container max-w-7xl mx-auto px-4">
        {/* القسم الرئيسي */}
        <div className="text-center mb-12">
          <div className="mt-8  rounded-3xl overflow-hidden ">
            <div className="p-8 md:p-12">
              <Header
                title="حلول تكامل الأنظمة المتطورة"
                description="نقدم حلول تكامل أنظمة متقدمة تربط بين التقنيات المختلفة داخل منشآتكم، لضمان تشغيل ذكي، آمن، ومستدام وفق أعلى المعايير المعتمدة."
              />
            </div>
            <img src={systemIntegrationImage} alt="System Integration" />
            {/* <ServicesMindMap /> */}
          </div>
        </div>

        <div>
          <div className=" mx-auto px-4">
            {/* Header */}
            <div className="mb-12 text-center">
              <Header title="أنظمة المراقبة والكاميرات الأمنية" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              {/* Right List */}
              <div className="order-2 lg:order-1 space-y-4">
                {surveillanceFeatures.slice(0, 2).map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <img
                  src={cameraImage}
                  alt="Security Camera"
                  className="
            w-56 sm:w-64 md:w-82
            drop-shadow-2xl
            transition-transform duration-300
            
          "
                />
              </div>

              {/* Left List */}
              <div className="order-3 space-y-4">
                {surveillanceFeatures.slice(2, 4).map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 w-full">
          <BMSSection />
        </div>
        <RequestQuote
          title="خلّي أنظمتك تشتغل مع بعض… مش كل نظام لوحده"
          buttonText="تواصل مع فريق تكامل الأنظمة"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
    </motion.section>
  );
}
