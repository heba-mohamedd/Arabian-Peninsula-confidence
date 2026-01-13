// import React from "react";
// import { motion } from "framer-motion";
// import Title from "../Components/ui/Title";
// import Header from "../Components/ui/Header";
// import CertificatCard from "../Components/CertificatCard";

// const certificates = [
//   "ISO 9001 ",
//   "ISO 9001 ",
//   "ISO 9001 ",
//   "ISO 9001 ",
//   "ISO 9001 ",
//   "ISO 9001 ",
// ];
// export default function Certificates() {
//   return (
//     <motion.section
//       dir="rtl"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col items-center justify-center"
//     >
//       <Title title="الـشـهادات" />

//       <div className="container max-w-6xl mx-auto px-6 flex flex-col items-center my-10">
//         <Header
//           title="الشهادات والاعتمادات"
//           description="تعكس الشهادات والاعتمادات التي حصلنا عليها التزامنا بالجودة والسلامة والكفاءة التشغيلية في جميع القطاعات التي نعمل بها."
//           colorOfHeader="text-black"
//         />
//         {certificates.map((item, index) => (
//           <CertificatCard certificat={item} key={index} />
//         ))}
//       </div>
//     </motion.section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import CertificatCard from "../Components/CertificatCard";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import RequestQuote from "../Components/RequestQuote";

const certificates = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 22000",
  "ISO 27001",
  "ISO 50001",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function Certificates() {
  return (
    <motion.section
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center "
    >
      <Title title="الـشـهادات" />

      <div className="container max-w-7xl  mx-auto px-6 mt-10 ">
        <Header
          title="الشهادات والاعتمادات"
          description="تعكس الشهادات والاعتمادات التي حصلنا عليها التزامنا بالجودة والسلامة والكفاءة التشغيلية في جميع القطاعات التي نعمل بها."
        />

        {/* Certificates Grid */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {certificates.map((item, index) => (
            <motion.div
              key={item + index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <CertificatCard certificat={item} />
            </motion.div>
          ))}
        </div>

        <RequestQuote
          description="نعمل وفق نموذج تشغيلي معتمد يضمن الكفاءة والاستمرارية في مختلف القطاعات. تواصلوا معنا لمناقشة فرص التعاون واستكشاف الحلول المناسبة لأعمالكم."
          buttonText="تواصل معنا"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
    </motion.section>
  );
}
