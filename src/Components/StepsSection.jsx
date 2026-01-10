import { motion } from "framer-motion";
import CircleCard from "./ui/CircleCard";

const STEPS_DATA = [
  {
    id: 0,
    stepNumber: 0,
    title: " تقديم الطلب : ",
    motion: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    order: "order-1 md:order-3",
    props: {},
    items: [
      "تعبئة نموذج طلب الاطلاع",
      "تحديد صفة مقدم الطلب",
      "ذكر الغرض من الاطلاع",
    ],
  },
  {
    id: 1,
    stepNumber: 1,
    title: "مراجعة الطلب : ",
    motion: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    order: "order-2 md:order-2",
    props: { imageUP: true },
    items: [
      "مراجعة البيانات من الإدارة",
      "التحقق من الصفة النظامية",
      "تقييم مدى أحقية الاطلاع",
    ],
  },
  {
    id: 2,
    stepNumber: 2,
    title: "توقيع اتفاقية السرية :",
    motion: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    order: "order-3 md:order-1",
    props: { offset: true },
    items: [
      "توقيع اتفاقية عدم إفصاح (NDA)",
      "الالتزام بعدم تداول أو نشر المعلومات",
    ],
  },
  {
    id: 3,
    stepNumber: 3,
    title: " إتاحة الاطلاع : ",
    motion: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    order: "order-4 md:order-4",
    props: { imageUP: true },
    items: [
      "إتاحة الاطلاع عبر قناة آمنة",
      "الاطلاع يكون ضمن نطاق معين من القوائم",
    ],
  },
  {
    id: 4,
    stepNumber: 4,
    title: " إغلاق الطلب : ",
    motion: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    order: "order-5 md:order-5",
    props: { offset: true },
    items: ["انتهاء صلاحية الاطلاع", "حفظ السجلات وفق سياسات الشركة"],
  },
];

export default function StepsSection() {
  return (
    <section dir="rtl" className="py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 items-start">
          <div className="hidden md:contents">
            {STEPS_DATA.map((step) => (
              <motion.div
                key={step.id}
                initial={step.motion.initial}
                whileInView={step.motion.animate}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={step.order}
              >
                <CircleCard
                  stepNumber={step.stepNumber}
                  title={step.title}
                  {...step.props}
                >
                  <ul className="text-right list-disc list-outside">
                    {step.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CircleCard>
              </motion.div>
            ))}
          </div>

          <div className="block md:hidden">
            {STEPS_DATA.map((step) => (
              <motion.div key={step.id}>
                <CircleCard stepNumber={step.stepNumber} title={step.title}>
                  <ul className="text-right list-disc list-outside">
                    {step.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CircleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
