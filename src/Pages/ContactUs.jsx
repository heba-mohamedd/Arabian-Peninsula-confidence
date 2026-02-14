import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title";
import { ContactForm, RequestQuoteForm, Newsletter } from "../Components";
import Header from "./../Components/ui/Header";
import { useLocation } from "react-router-dom";
import { useContactData } from "../hooks/contactUs/useContactData.js";
import { useSettingsQuery } from "../hooks/queries/useSettingsQuery"; // Import settings query
import MapIframe from "../Components/MapIframe.jsx";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  const { hash } = useLocation();
  const { data } = useContactData();
  const { data: settingsData } = useSettingsQuery(); // Fetch settings
  const settings = settingsData?.data || {};

  // Get dynamic coordinates or fallback to defaults (Riyadh)
  const mapLat = parseFloat(settings["map_latitude"]) || 24.7136;
  const mapLng = parseFloat(settings["map_longitude"]) || 46.6753;

  useEffect(() => {
    if (!hash) return;

    // Wait for page to fully render before scrolling
    const timer = setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        // Calculate offset for header (adjust if needed)
        const offset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Small delay to ensure page transition completes

    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50/50 flex flex-col items-center justify-center "
    >
      <Title title={t("Contact Us")} />

      <div className="container max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20">
        {/* Contact Section */}
        <section
          id="contact"
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Information Side */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-primary font-bold tracking-wider text-sm">
                {t("Contact Us")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                {t("Happy To Help")}{" "}
                <span className="text-primary">{t("To Help You")}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("Contact Description")}
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 mt-2">
              {/* Phone */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20 group">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <HiOutlinePhone size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-0.5">
                    {t("Phone Number")}
                  </p>
                  <p className="text-gray-900 font-bold text-lg" dir="ltr">
                    {data?.data?.phone || "..."}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20 group">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <HiOutlineEnvelope size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-0.5">
                    {t("Email Placeholder")}
                  </p>
                  <p className="text-gray-900 font-bold text-lg break-all">
                    {data?.data?.email || "..."}
                  </p>
                </div>
              </div>

              {/* Description/Location */}
              <div className="flex items-start gap-5 bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20 group">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <HiOutlineMapPin size={22} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-0.5">
                    {t("Our Information")}
                  </p>
                  <p className="text-gray-900 font-medium text-base leading-relaxed">
                    {data?.data?.description || "..."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <ContactForm />
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="rounded-3xl overflow-hidden shadow-md border border-gray-200 h-[350px] md:h-[450px] w-full">
          <MapIframe lat={mapLat} lng={mapLng} />
        </section>

        {/* Request Quote Section */}
        <section
          id="order"
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Header
                title={t("Request Quote Title")}
                description={t("Request Quote Long Description")}
              />
            </div>
            <RequestQuoteForm />
          </div>
        </section>
      </div>

      <div className="w-full mt-10">
        <Newsletter />
      </div>
    </motion.section>
  );
}
