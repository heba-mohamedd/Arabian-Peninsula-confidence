import React from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import ContactForm from "../Components/Form/ContactForm.jsx";
import Header from "./../Components/ui/Header";
import RequestQuoteForm from "../Components/Form/RequestQuoteForm.jsx";
import Newsletter from "../Components/Form/Newsletter.jsx";
import backgroundContantInformation from "../assets/contactInformation.png";
export default function ContactUs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      <Title title="تواصل معنا" />
      <div className="container max-w-6xl mx-auto px-6 my-14 flex flex-col gap-14 ">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <p className="text-primary text-2xl md:text-3xl font-semibold">
            تواصل معنا - نسعد لمساعدتك
          </p>

          <p className="text-dark-grey leading-relaxed">
            تأسست الشركة لتكون كيانًا مهنيًا يقدم حلولًا متكاملة في عدد من
            القطاعات الحيوية، مع الالتزام بتطبيق أعلى المعايير التشغيلية
            والإدارية، وتقديم خدمات تلبي احتياجات الجهات الحكومية والشركات
            الكبرى.
          </p>
        </motion.div>

        <ContactForm />
        <div>
          <Header
            title="طلب عرض سعر"
            description="يمكنكم تقديم طلب عرض سعر لخدماتنا عبر تعبئة النموذج، حيث سيقوم فريقنا المختص بمراجعة الطلب والتواصل معكم لتقديم عرض مناسب وفق متطلباتكم التشغيلية والفنية."
          />

          <RequestQuoteForm />
        </div>
      </div>

      <div className="w-full bg-neutral-200/20">
        <div
          className="
                relative  
                overflow-hidden
                 min-h-[250px]
                flex items-center justify-center
       bg-neutral-200/20
              "
          style={{
            backgroundImage: `url(${backgroundContantInformation})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 p-6 ">
            <div className="flex-1 text-center p-4">
              <p className="text-lg font-semibold mb-2">معلومات الاتصال</p>
              <p className="leading-relaxed text-sm">
                نرحب بتواصلكم معنا لمناقشة متطلبات المشاريع أو الاستفسار عن
                خدماتنا في مختلف القطاعات، وسيقوم فريقنا المختص بالتواصل معكم في
                أقرب وقت.
              </p>
            </div>

            <div className="flex-1 text-center p-4">
              <p className="text-lg font-semibold mb-2">البريد الإلكتروني</p>
              <p className="text-sm break-all">
                Thaqaaljezerraelarabia@gmail.com
              </p>
            </div>

            <div className="flex-1 text-center p-4">
              <p className="text-lg font-semibold mb-2">رقم الهاتف</p>
              <p className="text-sm">+69956454555</p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </motion.section>
  );
}
