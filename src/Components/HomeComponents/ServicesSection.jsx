import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ServiceItem } from "./ServiceItem.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery";
import useSectorsQuery from "../../hooks/queries/sectors/useSectorsQuery";

export function ServicesSection() {
  const { t } = useTranslation();
  const { data: settingsData } = useSettingsQuery();
  const { data: sectorsData } = useSectorsQuery();

  const settings = settingsData?.data || {};
  const sectors = sectorsData?.data || [];

  const sectionTitle = settings['services_section_title'] || t("Our Services");
  // Default description helper if translation key is missing or settings not loaded yet
  const defaultDesc = "نقدم حلولنا لعدة قطاعات حيوية، مع مراعاة متطلبات التشغيل والأنظمة الخاصة بكل قطاع لضمان أعلى مستويات الجودة.";
  const sectionDesc = settings['services_section_description'] || defaultDesc;

  // Use the first 2 sectors as features for the home page, or fallback if empty
  const displayItems = sectors.length > 0 ? sectors.slice(0, 2) : [];

  return (
    <section className="py-16 md:py-24 w-full bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary"
            >
              {sectionTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-dark-grey text-lg leading-relaxed"
            >
              {sectionDesc}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to={`/services`}
              className="group flex items-center gap-3 text-primary font-semibold text-lg hover:text-green-700 transition-colors"
            >
              <span>{t("Browse All Services")}</span>
              <span className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                <FaArrowLeft className="text-sm transform group-hover:-translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {displayItems.length > 0 ? (
            displayItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ServiceItem item={item} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-400 py-10">
              <p>{t("Loading...")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
