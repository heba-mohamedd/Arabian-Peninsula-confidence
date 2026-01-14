import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import HeaderOfServise from "../Components/HeaderOfServise";
import { Carousel } from "antd";
import { LuDot } from "react-icons/lu";

// Import images
import FirstImage from "../assets/FacilityManagementImages/Frame 8737.png";
import SecondImage from "../assets/FacilityManagementImages/Frame 8738.png";
import ThirdImage from "../assets/FacilityManagementImages/Frame 8739.png";
import ElectricImage from "../assets/FacilityManagementImages/electricCarousel.png";
import PlumbingImage from "../assets/FacilityManagementImages/Frame 8764.png";

// Data
const imageFirstSection = [FirstImage, SecondImage, ThirdImage];

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
];

const categories = [
  {
    category: "أنظمة الإضاعة",
    items: [
      "الإضاعة الداخلية",
      "الإضاعة الخارجية",
      "الإضاعة الطوارئ",
      "أنظمة التحكم في الإضاعة",
    ],
  },
  {
    category: "أنظمة المراقبة",
    items: ["BMS", "أنظمة الأحمال", "تقارير الأداء الكهربائي"],
  },
  {
    category: "أنظمة التغذية الكهربائية",
    items: [
      "لوحات التوزيع الرئيسية والفرعية",
      "شبكات التغذية الكهربائية",
      "تنظيم الأحمال الكهربائية",
    ],
  },
  {
    category: "أنظمة الطاقة الاحتياطية",
    items: [
      "الموادات الكهربائية",
      "أنظمة S/Pl",
      "لوحات التحويل التلقائي",
      "اختبارات الجاهزية الدورية",
    ],
  },
];

// Main component
export default function FacilityManagement() {
  return (
    <motion.section
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Title title="إدارة المرافق" />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Intro */}
        <IntroSection />

        {/* Mechanical Systems Section */}
        <MechanicalSystems />

        {/* Electrical Systems Section */}
        <ElectricalSystems />

        {/* Plumbing Services */}
        <PlumbingServices data={plumbingServicesData} />
      </div>
    </motion.section>
  );
}

// Intro Section
const IntroSection = () => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl mb-12"
  >
    <p className="text-primary text-3xl md:text-4xl font-bold mb-4">
      خدمات إدارة المرافق
    </p>
    <p className="text-dark-grey leading-relaxed text-lg">
      نقدم حلول إدارة مرافق متكاملة تضمن كفاءة التشغيل، استدامة الأصول،
      والالتزام بالمعايير التشغيلية في مختلف أنواع المنشآت.
    </p>
  </motion.div>
);

// Mechanical Systems Section
const MechanicalSystems = () => (
  <section>
    <HeaderOfServise title="خدمــــات الهندســــــة والصيانــــة - الأنظمة الميكانيكية" />
    <ImageGallery />
    <ServicesDescription />
  </section>
);

// Image Gallery for Mechanical Systems
const ImageGallery = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
    {imageFirstSection.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="facility service"
        className="w-full h-56 object-cover rounded-xl shadow-sm"
      />
    ))}
  </div>
);

// Services Description
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

// Electrical Systems Section
const ElectricalSystems = () => (
  <section>
    <HeaderOfServise title="الأنظمـــة الكهربائيـــة" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10 items-start">
      <CarouselSection />
      <CategoriesGrid />
    </div>
  </section>
);

// Carousel Section
const CarouselSection = () => (
  <Carousel
    autoplay
    dots
    className="custom-carousel h-full"
    dotsClass="bg-primary"
  >
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="flex items-center justify-center rounded-xl overflow-hidden w-full"
      >
        <img
          src={ElectricImage}
          alt="Electrical systems"
          className="w-full h-full object-cover rounded-xl md:h-[450px]"
        />
      </div>
    ))}
  </Carousel>
);

// Categories Grid Section
const CategoriesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
    {categories.map((category, index) => (
      <div
        key={index}
        className="bg-neutral/10 p-5 rounded-xl hover:shadow-md transition"
      >
        <div className="flex items-start gap-2 mb-3">
          <LuDot className="shrink-0 mt-1" size={22} />
          <p className="font-semibold text-black">{category.category}</p>
        </div>
        <ol className="text-dark-grey list-decimal space-y-2 pr-6">
          {category.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>
    ))}
  </div>
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

// Plumbing Services Section
const PlumbingServices = ({ data }) => {
  const categories = data.categories;

  return (
    <section className="my-10">
      <HeaderOfServise title="أنظمــــة السباكــــة" />

      <div className="flex flex-col lg:flex-row gap-5 mt-6 md:mt-8 lg:mt-10 text-md">
        <LeftContent description={data.description} categories={categories} />
        <CenterImage image={data.image} />
        <RightContent categories={categories} />
      </div>
    </section>
  );
};

// Left Content Component
const LeftContent = ({ description, categories }) => (
  <div className="lg:flex-1 space-y-6 md:space-y-8">
    <p className="leading-relaxed max-w-sm">{description}</p>
    {categories.slice(0, 2).map((element, index) => (
      <CategoryList
        key={element.id || index}
        category={element.category}
        items={element.items}
        index={index + 1}
      />
    ))}
  </div>
);

// Center Image Component
const CenterImage = ({ image }) => (
  <div className="lg:flex-1">
    <img
      src={image}
      alt="أنظمة السباكة"
      className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
      loading="lazy"
    />
  </div>
);

// Right Content Component
const RightContent = ({ categories }) => (
  <div className="lg:flex-1 space-y-6 md:space-y-8">
    {categories.slice(2).map((element, index) => (
      <CategoryList
        key={element.id || index + 2}
        category={element.category}
        items={element.items}
        index={index + 3}
      />
    ))}
  </div>
);

// Category List Component
const CategoryList = ({ category, items, index }) => (
  <div className="mt-5">
    <p className="text-primary font-semibold">
      {index} - {category}
    </p>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="text-dark-grey mr-6 list-disc leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// Plumbing Services Data
const plumbingServicesData = {
  description:
    "تشمل خدمات السباكة لدينا تصميم وتنفيذ وصيانة أنظمة المياه والصرف الصحي وفق أعلى معايير الجودة والسلامة، بما يضمن استمرارية التشغيل وتقليل الأعطال ورفع كفاءة الاستخدام.",
  image: PlumbingImage,
  categories: [
    // Categories data...
    {
      id: 1,
      category: "أنظمة تغذية المياه",
      items: [
        "شبكات تغذية المياه الباردة والساخنة",
        "مضخات المياه",
        "خزانات المياه",
        "أنظمة التحكم في ضغط المياه",
      ],
    },
    {
      id: 2,
      category: "أنظمة الصرف الصحي",
      items: [
        "شبكات الصرف الصحي",
        "غرف التفتيش",
        "أنظمة معالجة الصرف",
        "صيانة الانسدادات والتسريبات",
      ],
    },
    {
      id: 3,
      category: "أنظمة الصرف الصحي",
      items: [
        "شبكات الصرف الصحي",
        "غرف التفتيش",
        "أنظمة معالجة الصرف",
        "صيانة الانسدادات والتسريبات",
      ],
    },
    {
      id: 4,
      category: "أنظمة الصرف الصحي",
      items: [
        "شبكات الصرف الصحي",
        "غرف التفتيش",
        "أنظمة معالجة الصرف",
        "صيانة الانسدادات والتسريبات",
      ],
    },
    {
      id: 5,
      category: "أنظمة الصرف الصحي",
      items: [
        "شبكات الصرف الصحي",
        "غرف التفتيش",
        "أنظمة معالجة الصرف",
        "صيانة الانسدادات والتسريبات",
      ],
    },
  ],
};
