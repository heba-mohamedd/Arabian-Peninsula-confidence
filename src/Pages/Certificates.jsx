import React from "react";
import { motion } from "framer-motion";
import CertificatCard from "../Components/CertificatCard";
import PageLoader from "../Components/ui/PageLoader";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import RequestQuote from "../Components/RequestQuote";
import { useCertificatesQuery } from "../hooks/queries/useCertificatesQuery.js";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bms-main.jpg"; // Using existing asset

export default function Certificates() {
  const { data, isLoading } = useCertificatesQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <PageLoader />;
  }

  function handleClick() {
    navigate("/contact-us#order");
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            الشهادات <span className="text-primary">والاعتمادات</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            نلتزم في ثقة الجزيرة بأعلى معايير الجودة العالمية، وتوثق شهاداتنا المتعددة هذا الالتزام الراسخ
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </section>

      {/* 2. Certificates Grid */}
      <div className="container mx-auto px-4 py-16 relative z-10 -mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="transform transition-all"
            >
              <CertificatCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Call to Action */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <RequestQuote
            title="شريكك الموثوق"
            description="نعمل وفق نموذج تشغيلي معتمد يضمن الكفاءة والاستمرارية في مختلف القطاعات. تواصلوا معنا لمناقشة فرص التعاون."
            buttonText="تواصل معنا"
            onClick={handleClick}
            buttonIcon={<MdOutlinePhoneInTalk size={20} />}
          />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}
