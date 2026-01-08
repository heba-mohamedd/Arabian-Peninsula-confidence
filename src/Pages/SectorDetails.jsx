import React from "react";
import { useParams } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import PrimaryButton from "../Components/ui/PrimaryButton";
import RequestQuote from "../Components/RequestQuote";
import frame11 from "../assets/Frame 11.png";

export default function SectorDetails() {
  const { id } = useParams();
  const sector = service.find((item) => item.id === Number(id));

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-gray-400">
        القطاع غير موجود
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center" dir="rtl">
      <Title title="القطاعات" />

      <div className="container max-w-6xl mx-auto px-6 flex flex-col items-center my-10">
        {/* Image */}
        <div className="w-full">
          <img
            src={frame11}
            alt={sector.title}
            className="rounded-3xl w-full h-62.5 md:h-75 object-cover"
          />
        </div>

        {/* Header */}
        <div className="w-full text-center space-y-6 mb-12">
          <Header title={sector.title}>{sector.description}</Header>

          <div className="flex justify-center">
            <PrimaryButton
              text="اطلب استشارة تشغيلية"
              icon={<BsClipboardData size={20} />}
            />
          </div>
        </div>

        {/* Services */}
        <div className="mb-10 w-full">
          <p className="text-2xl mb-4">خدماتنا في هذا القطاع</p>

          <div className="grid grid-cols-3">
            {serviceList.map((text, index) => (
              <SerCard key={index} text={text} />
            ))}
          </div>
        </div>
        <div className=" mb-10 w-full">
          <p className=" text-center my-10 text-2xl text-[#00963F]">
            منهجيتنا في تشغيل وصيانة محطات التحلية
          </p>
          <StepsList />
        </div>

        {/* Quote */}
        <RequestQuote
          description={`هل تبحث عن شريك موثوق لتشغيل وصيانة ${sector.title}؟`}
          buttonText="طلب عرض السعر"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
        />
      </div>
    </section>
  );
}

import locateIcon from "../assets/Frame 29.png";
import { service, serviceList } from "../data/data";
import StepsList from "../Components/StepsList";

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
