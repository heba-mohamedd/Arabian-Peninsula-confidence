import { motion } from "framer-motion";
import React, { useRef } from "react";
import Header from "./ui/Header.jsx";
import useHowWeWorkQuery from "./../hooks/queries/sectors/useHowWeWorkQuery";
import { useSettingsQuery } from "../hooks/queries/useSettingsQuery"; // Import settings

const ModernProcess = () => {
  const { data, isLoading } = useHowWeWorkQuery();
  const { data: settingsData } = useSettingsQuery(); // Fetch settings
  const containerRef = useRef(null);

  const settings = settingsData?.data || {};
  const sectionTitle = settings['process_section_title'] || "منهجية العمل";
  const sectionDesc = settings['process_section_description'] || "نعتمد استراتيجية عمل دقيقة ومنظمة لضمان تحقيق أفضل النتائج بأعلى معايير الجودة";

  // Define color gradients for each step
  const colorSchemes = [
    { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", dot: "bg-blue-500" },
    { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", dot: "bg-purple-500" },
    { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600", dot: "bg-orange-500" },
    { bg: "bg-green-50", border: "border-green-200", text: "text-green-600", dot: "bg-green-500" },
    { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-600", dot: "bg-gray-500" },
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-10 py-16">
        <div className="w-full text-center">
          <div className="h-4 w-48 bg-gray-200 rounded mb-4 mx-auto animate-pulse" />
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const steps = (data?.data || []).map((item, index) => ({
    ...item,
    ...colorSchemes[index % colorSchemes.length],
  }));

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Connecting Line Background - Desktop - dynamic width based on container */}
      <div className="hidden lg:block absolute top-[60%] left-0 right-0 h-1 bg-gray-100 -z-10 max-w-6xl mx-auto">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Header
            title={sectionTitle}
            description={sectionDesc}
          />
        </motion.div>

        {/* Changed from Grid to Flex to center items regardless of count */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              className="relative group w-full md:w-[calc(50%-1rem)] lg:w-[calc(20%-1.2rem)] min-w-[200px]"
            >
              {/* Card */}
              <div className={`
                h-full p-6 rounded-3xl border ${step.border} ${step.bg}
                flex flex-col items-center text-center
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                relative z-10 backdrop-blur-sm bg-opacity-60
              `}>
                {/* Number Badge */}
                <div className={`
                    w-12 h-12 rounded-full ${step.dot} text-white font-bold text-xl
                    flex items-center justify-center mb-4 shadow-lg
                    group-hover:scale-110 transition-transform duration-300
                `}>
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </div>

              {/* Connecting Dot on Line (Desktop) */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-8 z-0">
                <div className={`w-4 h-4 rounded-full ${step.dot} shadow-[0_0_0_4px_rgba(255,255,255,0.5)]`}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></div>
                </div>
                {/* Vertical line connecting card to main line */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-200 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernProcess;
