import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlinePhoneInTalk, MdArrowForward } from "react-icons/md";
import { BsClipboardData, BsCheckCircleFill } from "react-icons/bs";
import Title from "../Components/ui/Title";
import PrimaryButton from "../Components/ui/PrimaryButton";
import RequestQuote from "../Components/RequestQuote";
import PageLoader from "../Components/ui/PageLoader";
import Steps from "./../Components/Steps";
import { useSectorById } from "../hooks/queries/sectors/useSectorById.js";
import { useTranslation } from "react-i18next";
import { FaServicestack } from "react-icons/fa";

export default function SectorDetails() {
  const { id } = useParams();
  const { data, isLoading } = useSectorById(id);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  function handleClick() {
    navigate("/contact-us#order");
  }
  function handleContact() {
    navigate("/contact-us#contact");
  }

  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  if (!data?.data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-bold text-gray-400 gap-4">
        <p className="text-xl">{t("Sector Not Found")}</p>
        <button
          onClick={() => navigate("/sectors")}
          className="text-primary hover:underline"
        >
          {t("Return to Sectors")}
        </button>
      </div>
    );
  }

  const sector = data.data;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={sector.image_url}
            alt={sector.name}
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-black/40 to-black/60"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-white backdrop-blur-md border border-white/20 text-sm font-medium mb-4">
              {t("Sector Details")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {sector.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto line-clamp-3">
              {sector.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container max-w-7xl mx-auto px-6 relative z-20 -mt-20">
        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6 relative inline-block">
                {t("About")} {sector.name}
                <span className="absolute -bottom-2 right-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {sector.description}
              </p>
              <div className="flex gap-4">
                <PrimaryButton
                  text={t("Request Consultation")}
                  onClick={handleContact}
                  icon={<BsClipboardData size={20} />}
                />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-full min-h-[300px]">
              <img
                src={sector.image_url}
                alt={sector.name}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        {sector.services && sector.services.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-secondary mb-4">
                {t("Our Services in Sector")}
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sector.services.map((text, index) => (
                <ServiceCard key={index} text={text} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Methodologies Section */}
        {sector.methodologies && sector.methodologies.length > 0 && (
          <div className="mb-20 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-secondary mb-4">
                {t("Our Methodology in")}{" "}
                <span className="text-primary">{sector.name}</span>
              </h3>
              <p className="text-gray-500">
                {t(
                  "We follow a structured approach to ensure the best results",
                )}
              </p>
            </div>

            <Steps steps={sector.methodologies} />
          </div>
        )}

        {/* CTA Section */}
        <div className="py-8">
          <RequestQuote
            description={`${t("Looking for Partner Prefix")} ${sector.name}؟`}
            buttonText={t("Request Quote Button")}
            buttonIcon={<MdOutlinePhoneInTalk size={20} />}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 flex flex-col gap-4 group cursor-default"
    >
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <FaServicestack className="text-2xl" />
      </div>
      <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
        {text}
      </h4>
      <div className="w-full h-px bg-gray-100 my-2"></div>
      <div className="flex items-center text-primary text-sm font-medium gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
        <MdArrowForward className="rtl:rotate-180" />
      </div>
    </motion.div>
  );
}
// Helper for translation in sub-component if needed,
// strictly speaking t isn't passed to ServiceCard but we can use simple text or pass t.
// For now, I'll remove the "Learn more" text to avoid prop drilling issues or use a static icon.
