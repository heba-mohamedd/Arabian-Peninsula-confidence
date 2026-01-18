import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import Title from "../Components/ui/Title";
import Header from "../Components/ui/Header";
import PrimaryButton from "../Components/ui/PrimaryButton";
import RequestQuote from "../Components/RequestQuote";

export default function SectorDetails() {
  const { id } = useParams();
  const { data } = useSectorById(id);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact-us#order");
  }
  function handleContact() {
    navigate("/contact-us#contact");
  }

  if (!data?.data) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold text-gray-400">
        القطاع غير موجود
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <Title title="القطاعات" />

      <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center my-10">
        {/* Image */}
        <div className="w-[70%] ">
          <img
            src={data?.data?.image_url}
            alt={data?.data?.name}
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>

        {/* Header */}
        <div className="w-full text-center space-y-6 mb-12 mt-6">
          <Header
            title={data?.data?.name}
            description={data?.data?.description}
          />

          <div className="flex justify-center">
            <PrimaryButton
              text="اطلب استشارة تشغيلية"
              onClick={handleContact}
              icon={<BsClipboardData size={20} />}
            />
          </div>
        </div>

        {/* Services */}
        <div className="mb-10 w-full ">
          <p className="text-2xl mb-4">خدماتنا في هذا القطاع</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 ">
            {data?.data?.services.map((text, index) => (
              <SerCard key={index} text={text} />
            ))}
          </div>
        </div>
        <div className=" mb-10 w-full">
          <p className=" text-center  text-2xl text-primary">
            منهجيتنا في {data?.data?.name}
          </p>

          <Steps steps={data?.data?.methodologies} />
        </div>

        {/* Quote */}
        <RequestQuote
          description={`هل تبحث عن شريك موثوق لتشغيل وصيانة ${data?.data?.name}؟`}
          buttonText="طلب عرض السعر"
          buttonIcon={<MdOutlinePhoneInTalk size={20} />}
          onClick={handleClick}
        />
      </div>
    </section>
  );
}

import locateIcon from "../assets/Frame 29.png";

import Steps from "./../Components/Steps";
import { useSectorById } from "../hooks/queries/sectors/useSectorById.js";

function SerCard({ text }) {
  return (
    <div className="group bg-gray-100 p-5  rounded-2xl gap-2 shadow-lg  border-b-6 border-white transition-all duration-300 flex flex-col ">
      <img
        src={locateIcon}
        alt="service icon"
        className="w-10 h-10 object-contain"
      />
      <p className="text-gray-500   text-lg leading-relaxed ">{text}</p>
    </div>
  );
}
