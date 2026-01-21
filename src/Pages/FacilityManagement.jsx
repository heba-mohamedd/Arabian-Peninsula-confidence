import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import HeaderOfServise from "../Components/HeaderOfServise";
import Header from "../Components/ui/Header.jsx";
import { useFacilityServicesQuery } from "../hooks/queries/useFacilityServices.js";
import PageLoader from "../Components/ui/PageLoader.jsx";
import ImageGallerySwiper from "../Components/ImageGallerySwiper.jsx";

const services = [
  {
    title: "أنظمة التدفئة والتهوية وتكييف الهواء (HVAC): ",
    description:
      "تصميم وتوريد وتركيب أنظمة متكاملة لتكييف الهواء، تضمن تحسين جودة الهواء الداخلي ورفع مستوى الراحة الحرارية داخل المباني.",
  },
  {
    title: "السخانات والمبردات: ",
    description:
      "تركيب وصيانة أنظمة التسخين والتبريد بكفاءة عالية، بما يضمن التشغيل المستمر وتوفير الطاقة.",
  },
  {
    title: "أنظمة التدفئة والتهوية وتكييف الهواء (HVAC): ",
    description:
      "تصميم وتوريد وتركيب أنظمة متكاملة لتكييف الهواء، تضمن تحسين جودة الهواء الداخلي ورفع مستوى الراحة الحرارية داخل المباني.",
  },
  {
    title: "السخانات والمبردات: ",
    description:
      "تركيب وصيانة أنظمة التسخين والتبريد بكفاءة عالية، بما يضمن التشغيل المستمر وتوفير الطاقة.",
  },
  {
    title: "أنظمة التدفئة والتهوية وتكييف الهواء (HVAC): ",
    description:
      "تصميم وتوريد وتركيب أنظمة متكاملة لتكييف الهواء، تضمن تحسين جودة الهواء الداخلي ورفع مستوى الراحة الحرارية داخل المباني.",
  },
];

// Main component
export default function FacilityManagement() {
  const { data: facilityManagementData, isLoading } =
    useFacilityServicesQuery();
  // Show page loader while data is loading
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <motion.section
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title="إدارة المرافق" />

      <div className="flex flex-col gap-5 justify-center items-center w-full max-w-7xl mx-auto px-6  my-7">
        {/* Intro */}
        <IntroSection
          title={facilityManagementData?.data?.name}
          description={facilityManagementData?.data?.description}
          importantNote={facilityManagementData?.data?.important_note}
        />

        {/* System Types */}
        {facilityManagementData?.data?.types?.map((typeSystem, index) => (
          <SystemSection key={index} typeSystem={typeSystem} />
        ))}
      </div>
    </motion.section>
  );
}

// Intro Section
const IntroSection = ({ title, description, importantNote }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-3"
  >
    <Header title={title} description={description} />
    <span className="text-center text-sm leading-6 md:leading-8 max-w-3xl mx-auto">
      {importantNote}
    </span>
  </motion.div>
);

// System Section
const SystemSection = ({ typeSystem }) => (
  <section className="w-full">
    <HeaderOfServise title={typeSystem?.title} />

    {/* Image Gallery with Swiper */}
    {typeSystem?.images && typeSystem.images.length > 0 && (
      <ImageGallerySwiper
        images={typeSystem.images.map((img) => img.image || img)}
      />
    )}

    <ServicesDescription />
  </section>
);

const ServicesDescription = () => (
  <>
    <p className="text-xl mb-6">
      تقدّم شركة مدارات الوسط المحدودة خدمات شاملة ومتكاملة في مجال الأنظمة
      الميكانيكية، والتي تشمل:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard service={service} key={index} />
      ))}
    </div>
  </>
);

// Service Card Component
function ServiceCard({ service }) {
  return (
    <div className="bg-neutral-200 p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-dark-grey leading-relaxed max-w-lg">
        <span className="font-semibold text-black block mb-1">
          {service.title}
        </span>
        {service.description}
      </p>
    </div>
  );
}
