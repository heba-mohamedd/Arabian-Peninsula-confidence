import { motion } from "framer-motion";
import CircleCard from "./ui/CircleCard";

export default function StepsSection() {
  return (
    <section dir="rtl" className="py-5">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-10 items-start ">
          {/* Step three */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CircleCard stepNumber={2} title="توقيع اتفاقية السرية :" offset>
              <ul className="text-right list-disc list-outside">
                <li>توقيع اتفاقية عدم إفصاح (NDA)</li>
                <li>الالتزام بعدم تداول أو نشر المعلومات</li>{" "}
              </ul>
            </CircleCard>
          </motion.div>

          {/* Step two */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CircleCard stepNumber={1} title="مراجعة الطلب : " imageUP>
              <ul className="text-right list-disc list-outside">
                <li> مراجعة البيانات من الإدارة</li>
                <li>التحقق من الصفة النظامية</li>
                <li>تقييم مدى أحقية الاطلاع</li>
              </ul>
            </CircleCard>
          </motion.div>

          {/* Step one */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CircleCard stepNumber={0} title=" تقديم الطلب : ">
              <ul className="text-right list-disc list-outside">
                <li>تعبئة نموذج طلب الاطلاع</li>
                <li>تحديد صفة مقدم الطلب</li>
                <li>ذكر الغرض من الاطلاع</li>
              </ul>
            </CircleCard>
          </motion.div>

          {/* Step four */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CircleCard stepNumber={3} title=" إتاحة الاطلاع : " imageUP>
              <ul className="text-right list-disc list-outside">
                <li> إتاحة الاطلاع عبر قناة آمنة</li>
                <li>الاطلاع يكون : أو ضمن نطاق معين من القوائم</li>{" "}
              </ul>
            </CircleCard>
          </motion.div>
          {/* Step five */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CircleCard stepNumber={4} title=" إغلاق الطلب : " offset>
              <ul className="text-right list-disc list-outside">
                <li>انتهاء صلاحية الاطلاع</li>
                <li>حفظ السجلات وفق سياسات الشركة</li>
              </ul>
            </CircleCard>
          </motion.div>

          {/* Center Empty */}

          <div />
        </div>
      </div>
    </section>
  );
}
