import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
// import cameraImage from "../assets/cameraImage.png";
import RequestQuote from "../Components/RequestQuote";
import PageLoader from "../Components/ui/PageLoader";
import { MdOutlinePhoneInTalk } from "react-icons/md";
// import BMSSection from "../Components/BMSSection";
import FeatureImageSection from "../Components/FeatureImageSection";
import { useNavigate } from "react-router-dom";
import { useSystemIntegrationQuery } from "../hooks/queries/useSystemIntegrationData.js";
import SimpleList from "../Components/SimpleList.jsx";

export default function SystemIntegration() {
  const navigate = useNavigate();
  const { data, isLoading } = useSystemIntegrationQuery();

  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  function handleClick() {
    navigate("/contact-us#contact");
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title={data?.data?.name} />
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-5"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mt-8 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <Header
              title={data?.data?.name}
              description={data?.data?.description}
            />
            <span className="text-center text-sm leading-6 md:leading-8 max-w-3xl mx-auto">
              {data?.data?.important_note}s
            </span>
          </div>
        </motion.div>
        <SimpleList items={data?.data?.types} />
        <br />
        <br />
        {data?.data?.types.map((feature, index) => (
          <div key={index} id={`section-${feature.id}`}>
            <FeatureImageSection
              title={feature?.title}
              description={feature?.description}
              features={feature?.points}
              images={feature?.images}
              imageAlt="Security Camera"
            />
          </div>
        ))}

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
