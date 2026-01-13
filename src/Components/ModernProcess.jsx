import { motion } from "framer-motion";
import React from "react";

const steps = [
  {
    id: 1,
    title: "التخطيط",
    subtitle: "والدراسة",
    description:
      "تحليل متطلبات كل قطاع ودراسة المخاطر والاحتياجات التشغيلية قبل التنفيذ.",
    color: "from-blue-500 to-purple-600",
    lineColor: "border-blue-500",
  },
  {
    id: 2,
    title: "التخصيص",
    subtitle: "القطاعي",
    description: "تشكيل فرق عمل متخصصة لكل قطاع مدعومة بخبرات فنية وإدارية.",
    color: "from-purple-500 to-pink-500",
    lineColor: "border-purple-500",
  },
  {
    id: 3,
    title: "التشغيل",
    subtitle: "والتنفيذ",
    description: "تنفيذ العمليات وفق إجراءات تشغيل موحدة ومعايير جودة معتمدة.",
    color: "from-orange-400 to-red-500",
    lineColor: "border-orange-500",
  },
  {
    id: 4,
    title: "الرقابة",
    subtitle: "والجودة",
    description:
      "تحليل متطلبات كل قطاع ودراسة المخاطر والاحتياجات التشغيلية قبل التنفيذ.",
    color: "from-green-400 to-emerald-600",
    lineColor: "border-green-500",
  },
  {
    id: 5,
    title: "الرقابة",
    subtitle: "والجودة",
    description: "متابعة الأداء وقياس مؤشرات الجودة والالتزام بالاشتراطات.",
    color: "from-black to-gray-800",
    lineColor: "border-black",
  },
];

const ModernProcess = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-10">
      {/* Container الأساسي: يتحول من عمود في الموبايل إلى صف في الشاشات الكبيرة */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col lg:flex-row items-center w-full lg:w-auto"
          >
            <div className="flex flex-col items-center relative">
              {/* الخط العلوي (يختفي في الموبايل أو يمكن تقصيره) */}
              <div
                className={`hidden lg:block w-0.5 h-24 border-r-2 border-dashed ${step.lineColor} mb-2`}
              />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }} // يبدأ الانيميشن عند ظهور العنصر
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
                      <div className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                        {step.title}
                      </div>
                      <div className="text-sm md:text-base font-semibold text-gray-700 leading-tight">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* النقاط الجمالية الصغيرة */}
                <div
                  className={`absolute -top-4 lg:-top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-white shadow-md`}
                />
                <div
                  className={`absolute -bottom-4 lg:-bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-white shadow-md`}
                />
              </motion.div>

              {/* الوصف في حالة الموبايل يظهر تحت الدائرة مباشرة */}
              <div className="lg:hidden mt-4 text-center max-w-xs">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* الخط السفلي (يختفي في الموبايل) */}
              <div
                className={`hidden lg:block w-0.5 h-24 border-r-2 border-dashed ${step.lineColor} mt-2`}
              />
            </div>

            {/* الخط الواصل بين الدوائر (يتحول لرأسي في الموبايل) */}
            {index < steps.length - 1 && (
              <div className="relative my-4 lg:mx-4">
                {/* خط أفقي للشاشات الكبيرة */}
                <div
                  className={`hidden lg:block h-0.5 w-12 xl:w-16 border-t-2 border-dashed ${step.lineColor}`}
                />
                {/* خط رأسي للشاشات الصغيرة */}
                <div
                  className={`lg:hidden w-0.5 h-12 border-l-2 border-dashed ${step.lineColor}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* الوصف للشاشات الكبيرة فقط (Grid) */}
      <div className="hidden lg:grid grid-cols-5 gap-4 max-w-6xl mx-auto mt-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-center"
          >
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed px-2">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ModernProcess;
