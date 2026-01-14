import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import CertificatCard from "../Components/CertificatCard";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import RequestQuote from "../Components/RequestQuote";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const certificates = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 22000",
  "ISO 27001",
  "ISO 50001",
];

export default function Certificates() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center"
    >
      <Title title="الـشـهادات" />

      <div className="container max-w-7xl  mx-auto px-6 mt-10 ">
        <Header
          title="الشهادات والاعتمادات"
          description="تعكس الشهادات والاعتمادات التي حصلنا عليها التزامنا بالجودة والسلامة والكفاءة التشغيلية في جميع القطاعات التي نعمل بها."
        />

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        >
          {certificates.map((item, index) => (
            <motion.div
              key={item + index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <CertificatCard certificat={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <RequestQuote
            description="نعمل وفق نموذج تشغيلي معتمد يضمن الكفاءة والاستمرارية في مختلف القطاعات. تواصلوا معنا لمناقشة فرص التعاون واستكشاف الحلول المناسبة لأعمالكم."
            buttonText="تواصل معنا"
            buttonIcon={<MdOutlinePhoneInTalk size={20} />}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
