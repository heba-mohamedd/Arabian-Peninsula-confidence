import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ServiceItem } from "./ServiceItem.jsx";

const data = [
  {
    id: 1,
    title: "خدمات الانشاءات",
    description:
      "نقدم خدمات إنشاءات متكاملة تشمل جميع مراحل المشروع، من التصميم والتخطيط إلى التنفيذ والتسليم.",
    items: [
      "التخطيط إلى التنفيذ والتسليم",
      "التخطيط إلى التنفيذ والتسليم",
      "التخطيط إلى التنفيذ والتسليم",
    ],
  },
  {
    id: 2,
    title: "خدمات الانشاءات",
    description:
      "نقدم خدمات إنشاءات متكاملة تشمل جميع مراحل المشروع، من التصميم والتخطيط إلى التنفيذ والتسليم.",
    items: [
      "التخطيط إلى التنفيذ والتسليم",
      "التخطيط إلى التنفيذ والتسليم",
      "التخطيط إلى التنفيذ والتسليم",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="my-10 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">تعرف على خدماتنا</p>
            <p className="text-dark-grey">
              نقدم حلولنا لعدة قطاعات حيوية، مع مراعاة متطلبات التشغيل والأنظمة
              الخاصة بكل قطاع.
            </p>
          </div>
          <div className="flex items-center gap-3 text-primary cursor-pointer group">
            <Link
              to={`/services`}
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
            >
              <FaArrowLeft className="text-sm" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
          {data.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
