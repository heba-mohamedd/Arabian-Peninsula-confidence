import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import ServiceCard from "../Components/ui/ServiceCard";
import PageLoader from "../Components/ui/PageLoader";
// import { service } from "../data/data";
import ModernProcess from "../Components/ModernProcess.jsx";
import useSectorsQuery from "../hooks/queries/sectors/useSectorsQuery.js";

export default function Sectors() {
  const { data, isLoading } = useSectorsQuery();
  const location = useLocation();

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

  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <section className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title title="القطاعات" />
      </motion.div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center gap-12 my-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Header
            title="قطاعات أعمالنا"
            description="نعمل عبر مجموعة من القطاعات الحيوية من خلال نموذج تشغيلي موحد يضمن الكفاءة والاستدامة في جميع أنشطتنا"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-12 ">
          {Object.values(groupedSectors).map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="flex flex-col items-center gap-5"
            >
              <p className="text-2xl font-bold mb-4">{category.name}</p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {category.sectors.map((item, index) => (
                  <ServiceCard key={item.id} item={item} index={index} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Cards Grid with Stagger Animation */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ModernProcess />
        </motion.div>
      </div>
    </section>
  );
}
