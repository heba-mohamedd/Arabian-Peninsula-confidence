import { motion } from "framer-motion";

import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import FeatureCard from "../Components/FeatureCard";
import ModernProcess from "../Components/ModernProcess";

import AboutUsImage from "../assets/Group 21.png";
import BottomImage from "../assets/bottomImage.png";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";

const aboutFeatures = [
  {
    title: "رؤيتنا",
    description:
      "أن نكون شريكًا موثوقًا في إدارة وتشغيل القطاعات الحيوية على مستوى المملكة.",
    cardColor: "bg-primary/5",
    headerColor: "bg-primary/10",
    icon: <MdOutlineRemoveRedEye size={30} color="#00963F" />,
  },
  {
    title: "رسالتنا",
    description:
      "تقديم حلول تشغيلية متكاملة تحقق الكفاءة والاستدامة وتلتزم بالأنظمة والمعايير المعتمدة.",
    cardColor: "bg-neutral/20",
    headerColor: "bg-neutral/30",
    icon: <LuMessageSquareMore size={30} />,
  },
  {
    title: "قيمنا",
    description: `الجودة
الالتزام
الشفافية`,
    cardColor: "bg-neutral/10",
    headerColor: "bg-neutral/20",
    icon: <LuMessageSquareMore size={30} />,
  },
];

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
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <Title title="من نحن" />

      <div className="container max-w-7xl mx-auto px-4">
        {/* ===== About Header ===== */}
        <motion.div
          className="my-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Header
            title="من نحن - تعرف على الكيان"
            description="تأسست الشركة لتكون كيانًا مهنيًا يقدم حلولًا متكاملة في عدد من القطاعات الحيوية، مع الالتزام بتطبيق أعلى المعايير التشغيلية والإدارية، وتقديم خدمات تلبي احتياجات الجهات الحكومية والشركات الكبرى."
          />

          <motion.img
            src={AboutUsImage}
            alt="About us"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          />
        </motion.div>

        {/* ===== Features ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {aboutFeatures.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Process ===== */}
        <motion.div
          className="my-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Header
            title="نموذج عملنا"
            description="نعتمد على نموذج تشغيلي موحد يتيح لنا إدارة قطاعات متعددة بكفاءة عالية، من خلال إدارة مركزية وفرق متخصصة لكل قطاع، مع تطبيق إجراءات تشغيل قياسية ومؤشرات أداء واضحة."
            titleColor="text-black"
          />
          <ModernProcess />
        </motion.div>
      </div>

      {/* ===== Bottom Image ===== */}
      <motion.img
        src={BottomImage}
        alt="Bottom"
        className="w-full mb-15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
}
