import React from "react";

import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import ServiceCard from "../Components/ui/ServiceCard";

import ImageDivider from "../assets/Group 1 (1).png";
import { service } from "../data/data";
import ModernProcess from "../Components/ModernProcess.jsx";

export default function Sectors() {
  return (
    <section
      dir="rtl"
      className="flex flex-col items-center justify-center text-center"
    >
      {/* Page Title */}
      <Title title="القطاعات" />

      <div className="container mx-auto max-w-7xl flex flex-col items-center gap-12 my-6 ">
        {/* Section Header */}
        <Header
          title="قطاعات أعمالنا"
          description="
          نعمل عبر مجموعة من القطاعات الحيوية من خلال نموذج تشغيلي موحد يضمن
          الكفاءة والاستدامة في جميع أنشطتنا
          "
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-7 md:gap-15 ">
          {service.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 ">
          <Header
            title="كيف ندير عملنا"
            description=" نعتمد على نموذج تشغيلي موحد يضمن الكفاءة والجودة في إدارة جميع
            قطاعاتنا، مع تخصيص فرق متخصصة لكل قطاع وفق أفضل الممارسات."
          />

          {/* <div className="w-[70%]  mb-10">
            <img
              src={ImageDivider}
              alt="نموذج إدارة العمل"
              className="w-full h-auto max-h-[400px] object-contain"
            />
          </div> */}
          <ModernProcess />
        </div>
      </div>
    </section>
  );
}
