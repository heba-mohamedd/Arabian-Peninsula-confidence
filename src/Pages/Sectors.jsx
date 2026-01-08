import React from "react";
import Title from "../Components/ui/Title";
import ServiseCard from "../Components/ui/ServiseCard";
import Header from "../Components/ui/Header";
import ImageDivider from "../assets/Group 1 (1).png";
import { service } from "../data/data";
export default function Sectors() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center"
      dir="rtl"
    >
      <Title title={"القطاعات"} />

      <div className="container  mx-auto max-w-7xl flex flex-col items-center justify-center">
        <Header title={"قطاعات اعمالنا"}>
          نعمل عبر مجموعة من القطاعات الحيوية من خلال نموذج تشغيلي
          <br /> موحد يضمن الكفاءة والاستدامة في جميع انشطتنا
        </Header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
 "
        >
          {service.map((item) => (
            <ServiseCard key={item.id} item={item} />
          ))}
        </div>

        <Header title="كيف ندير عملنا">
          نعتمد على نموذج تشغيلي موحد يضمن الكفاءة والجودة في إدارة جميع
          قطاعاتنا، مع تخصيص
          <br /> فرق متخصصة لكل قطاع وفق أفضل الممارسات.{" "}
        </Header>

        <img src={ImageDivider} alt="" className="scale-70" />
      </div>
    </section>
  );
}
