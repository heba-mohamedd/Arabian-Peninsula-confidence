import { motion } from "framer-motion";

import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import FeatureCard from "../Components/FeatureCard";
import ModernProcess from "../Components/ModernProcess";
import PageLoader from "../Components/ui/PageLoader";
import ImageSkeleton from "../Components/ui/skeletons/ImageSkeleton";
import FeatureCardSkeleton from "../Components/ui/skeletons/FeatureCardSkeleton";

import AboutUsImage from "../assets/Group 21.png";
import BottomImage from "../assets/bottomImage.png";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { useAboutAsQuery } from "../hooks/queries/useAboutAsQuery.js";

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
  console.log(data);

  // Show page loader while initial data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  // Build aboutFeatures from API data
  const aboutFeatures = [
    {
      title: "رؤيتنا",
      points: data?.data?.vision?.map((item) => item.point) || [],
      cardColor: "bg-primary/5",
      headerColor: "bg-primary/10",
      icon: <MdOutlineRemoveRedEye size={30} color="#00963F" />,
    },
    {
      title: "رسالتنا",
      points: data?.data?.mission?.map((item) => item.point) || [],
      cardColor: "bg-neutral/20",
      headerColor: "bg-neutral/30",
      icon: <LuMessageSquareMore size={30} />,
    },
    {
      title: "قيمنا",
      points: data?.data?.values?.map((item) => item.point) || [],
      cardColor: "bg-neutral/10",
      headerColor: "bg-neutral/20",
      icon: <LuMessageSquareMore size={30} />,
    },
  ];

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
            description={data?.data?.description}
          />
          <div className=" max-h-[400px] overflow-hidden rounded-lg mt-2">
            <motion.img
              src={data?.data?.image}
              alt="About us"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            />
          </div>
        </motion.div>

        {/* ===== Features ===== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 "
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
          {/* <Header
            title="نموذج عملنا"
            description="نعتمد على نموذج تشغيلي موحد يتيح لنا إدارة قطاعات متعددة بكفاءة عالية، من خلال إدارة مركزية وفرق متخصصة لكل قطاع، مع تطبيق إجراءات تشغيل قياسية ومؤشرات أداء واضحة."
            titleColor="text-black"
          /> */}
          <ModernProcess />
        </motion.div>
      </div>

      {/* ===== Bottom Image ===== */}
      <motion.img
        src={BottomImage}
        alt="Bottom"
        className="w-full mb-8 md:mb-15 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
}
