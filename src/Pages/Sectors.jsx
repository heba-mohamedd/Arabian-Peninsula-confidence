import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ServiceCard from "../Components/ui/ServiceCard";
import PageLoader from "../Components/ui/PageLoader";
import ModernProcess from "../Components/ModernProcess.jsx";
import useSectorsQuery from "../hooks/queries/sectors/useSectorsQuery.js";
import bgImage from "../assets/bms-main.jpg"; // Using existing asset
import { useTranslation } from "react-i18next";

export default function Sectors() {
  const { data, isLoading } = useSectorsQuery();
  const location = useLocation();
  const { t } = useTranslation();

  const groupedSectors = React.useMemo(() => {
    if (!data?.data) return {};

    return data.data.reduce((acc, item) => {
      const category = item.category;

      if (!acc[category.id]) {
        acc[category.id] = {
          id: category.id,
          name: category.name,
          sectors: [],
        };
      }

      acc[category.id].sectors.push(item);
      return acc;
    }, {});
  }, [data]);

  // Scroll to section when hash is present
  useEffect(() => {
    if (location.hash && !isLoading) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash, isLoading]);

  if (isLoading) {
    return <PageLoader />;
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
            {t("Sectors")} <span className="text-primary">{t("Our Business")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            {t("Sectors Page Description")}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </section>

      {/* 2. Sectors Grid by Category */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 -mt-20">

        <div className="flex flex-col gap-20">
          {Object.values(groupedSectors).map((category, catIndex) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="flex flex-col gap-8"
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="h-10 w-1 bg-primary rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">{category.name}</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {category.sectors.map((item, index) => (
                  <motion.div
                    key={item?.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    <ServiceCard item={item} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider between categories (except last) */}
              {catIndex < Object.values(groupedSectors).length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-12"></div>
              )}
            </div>
          ))}
        </div>

        {/* 3. Modern Process Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModernProcess />
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
    </div>
  );
}
