import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import { LuDot } from "react-icons/lu";
import StepsSection from "../Components/StepsSection";
import FinancialTimeline from "../Components/FinancialTimeline";
import RequestQuote from "../Components/RequestQuote";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const financialStatements = [
  {
    title: "قائمة المركز المالي",
    description: "توضح الأصول والالتزامات وحقوق الملكية.",
  },
  {
    title: "قائمة الدخل",
    description: "توضح نتائج الأداء المالي خلال الفترة.",
  },
  {
    title: "قائمة التدفقات النقدية",
    description: "توضح حركة النقد والتدفقات التشغيلية.",
  },
];

export default function Financial() {
  return (
    <motion.section
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      <Title title="القوائم المالية" />

      <div className="container max-w-7xl mx-auto px-6 my-14 flex flex-col gap-14 ">
        {/* Intro */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <p className="text-primary text-3xl md:text-4xl font-bold">
            القوائم المالية
          </p>

          <p className="text-dark-grey leading-relaxed">
            تمثل القوائم المالية أداة أساسية لقياس الأداء المالي للشركة، حيث يتم
            إعدادها وفق المعايير المحاسبية المعتمدة وتعكس المركز المالي والنتائج
            التشغيلية خلال الفترات المالية المختلفة.
            <br />
            <span className="text-black font-medium">
              لا يتم مشاركة القوائم المالية للأفراد أو الجهات غير ذات الصفة
              النظامية.
            </span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-8 ">
          <p className="text-2xl font-normal text-center ">
            أنواع القوائم المالية
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 ">
            {financialStatements.map((item, index) => (
              <FinancialCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-2xl font-normal text-center mb-5">
            آلية الاطلاع على القوائم المالية - وفق سياسات الحوكمة والسرية
            المعتمدة
          </p>
          <StepsSection />
        </div>
        <div className="flex flex-col ">
          <p className="text-2xl font-normal text-center">
            الفترات المالية المتاحة
          </p>
          <FinancialTimeline />
        </div>
        <RequestQuote
          title="الاطلاع على القوائم المالية"
          description={`تتيح الشركة الاطلاع على القوائم المالية للجهات ذات الصفة النظامية فقط، وذلك وفق آلية معتمدة تضمن السرية والامتثال للأنظمة المعمول بها في المملكة العربية السعودية.`}
          buttonText="تقديم طلب رسمي للاطلاع"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
    </motion.section>
  );
}

function FinancialCard({ title, description }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-neutral-200  rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <p
        className="flex items-center 
       text-lg font-semibold mb-2"
      >
        <LuDot size={30} />

        {title}
      </p>
      <p className="text-dark-grey leading-relaxed ">{description}</p>
    </motion.div>
  );
}
