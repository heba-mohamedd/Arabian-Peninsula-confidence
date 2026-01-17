import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import ServiceCard from "../Components/ui/ServiceCard";
import { service } from "../data/data";
import ModernProcess from "../Components/ModernProcess.jsx";

export default function Sectors() {
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

        {/* Cards Grid with Stagger Animation */}
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
          {service.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Header
              title="كيف ندير عملنا"
              description="نعتمد على نموذج تشغيلي موحد يضمن الكفاءة والجودة في إدارة جميع قطاعاتنا، مع تخصيص فرق متخصصة لكل قطاع وفق أفضل الممارسات."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ModernProcess />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
