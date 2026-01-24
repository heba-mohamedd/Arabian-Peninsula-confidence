import { motion } from "framer-motion";
import React from "react";
import TextSkeleton from "./ui/skeletons/TextSkeleton";
import Header from "./ui/Header.jsx";
import useHowWeWorkQuery from "./../hooks/queries/sectors/useHowWeWorkQuery";

// Define color gradients for each step
const colorSchemes = [
  {
    color: "from-blue-500 to-purple-600",
    lineColor: "border-blue-500",
  },
  {
    color: "from-purple-500 to-pink-500",
    lineColor: "border-purple-500",
  },
  {
    color: "from-orange-400 to-red-500",
    lineColor: "border-orange-500",
  },
  {
    color: "from-green-400 to-emerald-600",
    lineColor: "border-green-500",
  },
  {
    color: "from-black to-gray-800",
    lineColor: "border-black",
  },
];

const ModernProcess = () => {
  const { data, isLoading } = useHowWeWorkQuery();

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="w-full text-center">
          <div className="h-10 w-64 bg-gray-200 rounded mb-4 mx-auto skeleton-shimmer"></div>
          <div className="h-6 w-96 bg-gray-200 rounded mx-auto skeleton-shimmer"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-10">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div className="w-32 h-32 rounded-full bg-gray-200 skeleton-shimmer"></div>
                <div className="mt-6 text-center max-w-xs w-full">
                  <TextSkeleton lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Get steps from data.data and add color schemes
  const steps = (data?.data || []).map((item, index) => ({
    ...item,
    ...colorSchemes[index % colorSchemes.length], // Cycle through colors if more than 5 steps
  }));

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Header
          title="كيف ندير عملنا"
          description="نؤمن بأن نجاح أي مشروع يبدأ بخطة واضحة وتنفيذ احترافي. لذلك نعتمد منهجية عمل متكاملة تضمن الجودة، الالتزام بالمواعيد، وتحقيق تطلعات عملائنا في كل مرحلة."
        />
      </motion.div>
      <div className="container max-w-7xl mx-auto px-4 py-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center relative">
                <div
                  className={`hidden lg:block w-0.5 h-24 border-r-2 border-dashed ${step.lineColor} mb-2`}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-2xl`}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="text-center px-2 text-right">
                        <div className="text-sm md:text-base font-semibold text-gray-700 leading-tight text-center">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute -top-4 lg:-top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-white shadow-md`}
                  />
                  <div
                    className={`absolute -bottom-4 lg:-bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-white shadow-md`}
                  />
                </motion.div>

                <div
                  className={`hidden lg:block w-0.5 h-24 border-r-2 border-dashed ${step.lineColor} mt-2`}
                />
                <div className="mt-4 text-center max-w-xs">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-xs md:text-sm text-gray-600 leading-relaxed px-2"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>

              {/* Vertical connecting line - mobile only */}
              {index < steps.length - 1 && (
                <div className="sm:hidden relative my-4">
                  <div
                    className={`w-0.5 h-12 border-l-2 border-dashed ${step.lineColor}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernProcess;
