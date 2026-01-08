import React from "react";
import { useParams } from "react-router-dom";
import { service } from "./../constant/constant";
import Title from "../Components/ui/Title";
import RequestQuote from "../Components/RequestQuote";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Header from "../Components/ui/Header";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { BsClipboardData } from "react-icons/bs";

import frame11 from "../assets/Frame 11.png";
const serviseData = [
  "التشغيل الكامل لمحطات التحلية",
  "التشغيل الكامل لمحطات التحلية",
  "التشغيل الكامل لمحطات التحلية",
  "التشغيل الكامل لمحطات التحلية",
  "التشغيل الكامل لمحطات التحلية",
  "التشغيل الكامل لمحطات التحلية",
];
export default function SectorDetails() {
  const { id } = useParams();
  const item = service.find((item) => item.id === Number(id));

  if (!item)
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-gray-400">
        القطاع غير موجود
      </div>
    );

  return (
    <section className="flex flex-col items-center " dir="rtl">
      <Title title={"القطاعات"} />

      <div className="container max-w-6xl  mx-auto  px-6 flex flex-col items-center my-10">
        {/* 2. قسم الصورة - جعلناها عرضية ومناسبة للـ Column */}
        <div className="w-full">
          <img
            src={frame11}
            alt={item.title}
            className="rounded-3xl w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div className="w-full text-center space-y-6 mb-12">
          <Header title={item.title}>
            <p className="text-lg leading-8 max-w-3xl mx-auto">
              {item.description}
            </p>
          </Header>
          <div className="flex justify-center">
            <PrimaryButton
              text="اطلب استشارة تشغيلية"
              icon={<BsClipboardData size={20} />}
            />
          </div>
        </div>

        <div className="mb-10 w-full">
          <p className=" text-2xl">خدماتنا في هذا القطاع</p>
          <div className=" grid grid-cols-3">
            {serviseData.map((text) => (
              <SerCard text={text} />
            ))}
          </div>
        </div>

        <RequestQuote
          description={`هل تبحث عن شريك موثوق لتشغيل وصيانة ${item.title}؟`}
          buttonText="طلب عرض السعر"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
    </section>
  );
}
import locateIcon from "../assets/Frame 29.png";
function SerCard({ text }) {
  return (
    <div className="group bg-gray-100 p-5 m-5 rounded-2xl gap-2 shadow-lg  border-b-6 border-white transition-all duration-300 flex flex-col max-w-70">
      <img
        src={locateIcon}
        alt="service icon"
        className="w-10 h-10 object-contain"
      />
      <p className="text-gray-500   text-lg leading-relaxed ">{text}</p>
    </div>
  );
}
