import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import { LuDot } from "react-icons/lu";
import StepsSection from "../Components/StepsSection";
import FinancialTimeline from "../Components/FinancialTimeline";
import RequestQuote from "../Components/RequestQuote";
import PageLoader from "../Components/ui/PageLoader";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Header from "./../Components/ui/Header";
import { useNavigate } from "react-router-dom";
import { useFinancialQuery } from "../hooks/queries/useFinancialQuery.js";

export default function Financial() {
  const navigate = useNavigate();
  const { data, isLoading } = useFinancialQuery();

  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  function handleClick() {
    navigate("/contact-us#order");
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center border"
    >
      <Title title="القوائم المالية" />

      <div className="container max-w-7xl mx-auto px-6 my-14 flex flex-col gap-5 ">
        {/* Intro */}
        <Header
          title={data?.data?.name}
          description={data?.data?.description}
        />
        <span className="text-center text-sm leading-6 md:leading-8 max-w-3xl mx-auto">
          {data?.data?.important_note}
        </span>
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-2xl font-normal text-center ">
            أنواع القوائم المالية
          </p>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {data?.data?.types.map((item, index) => (
              <FinancialCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col  mt-5">
          <p className="text-2xl font-normal text-center">
            آلية الاطلاع على القوائم المالية - وفق سياسات الحوكمة والسرية
            المعتمدة
          </p>
          <StepsSection steps={data?.data?.work_mechanism} />
        </div>
        <div className="flex flex-col ">
          <p className="text-2xl font-normal text-center ">
            الفترات المالية المتاحة
          </p>
          <FinancialTimeline data={data?.data?.financial_periods} />
        </div>
        <div className="">
          <RequestQuote
            title="الاطلاع على القوائم المالية"
            description={`تتيح الشركة الاطلاع على القوائم المالية للجهات ذات الصفة النظامية فقط، وذلك وفق آلية معتمدة تضمن السرية والامتثال للأنظمة المعمول بها في المملكة العربية السعودية.`}
            buttonText="تقديم طلب رسمي للاطلاع"
            buttonIcon={<MdOutlinePhoneInTalk size={20} />}
            onClick={handleClick}
          />
        </div>
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
      className="bg-neutral/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
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
