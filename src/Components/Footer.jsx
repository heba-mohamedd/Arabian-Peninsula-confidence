import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import footerimage from "../assets/236627169d5a53522a3134e218015a0810d64acb.png";
import visionLogo from "../assets/vision2030.jpg";
import { useTranslation } from "react-i18next";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

import { useSettingsQuery } from "../hooks/queries/useSettingsQuery";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: settingsData } = useSettingsQuery();
  const settings = settingsData?.data || {};

  const currentYear = new Date().getFullYear();
  const contactPhone = settings['contact_phone'] || "+966 50 000 0000";
  const contactEmail = settings['contact_email'] || "info@thiqataljazeera.com";
  const contactAddress = settings['contact_address'] || t("Location");
  const footerDesc = settings['footer_description'] || t("FooterDescription");

  const links = {
    quick: [
      { name: t("Home"), path: "/" },
      { name: t("About Us"), path: "/about-us" },
      { name: t("Sectors"), path: "/sectors" },
      { name: t("Contact Us"), path: "/contact-us" },
    ],
    services: [
      { name: t("Facility Management"), path: "/services" },
      { name: t("Security Systems"), path: "/services" },
      { name: t("Operation and Maintenance"), path: "/services" },
      { name: t("General Cleaning"), path: "/services" },
    ]
  };

  const socialLinks = [
    { icon: <FaTwitter />, url: settings['social_twitter'] || "#" },
    { icon: <FaLinkedinIn />, url: settings['social_linkedin'] || "#" },
    { icon: <FaInstagram />, url: settings['social_instagram'] || "#" },
    { icon: <FaWhatsapp />, url: settings['social_whatsapp'] || "#" },
  ];

  return (
    <footer className="bg-[#111] text-gray-300 relative overflow-hidden font-sans border-t border-gray-800">
      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-48"
            >
              <img src={settings['site_logo'] || footerimage} alt="Thiqat Al Jazeera" className="w-full h-auto brightness-0 invert opacity-90" />
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {footerDesc}
            </p>
            <div className="flex bg-white/5 rounded-full p-2 w-fit gap-2">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-primary text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              {t("Quick Links")}
              <span className="absolute -bottom-2 right-auto left-0 rtl:left-auto rtl:right-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {links.quick.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => { navigate(link.path); window.scrollTo(0, 0); }}
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
                  >
                    <FaArrowRight className="text-xs text-primary opacity-0 -me-4 group-hover:opacity-100 group-hover:me-0 transition-all duration-300 transform rtl:rotate-180" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              {t("Our Services")}
              <span className="absolute -bottom-2 right-auto left-0 rtl:left-auto rtl:right-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {links.services.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => { navigate(link.path); window.scrollTo(0, 0); }}
                    className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
                  >
                    <FaArrowRight className="text-xs text-primary opacity-0 -me-4 group-hover:opacity-100 group-hover:me-0 transition-all duration-300 transform rtl:rotate-180" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              {t("Newsletter")}
              <span className="absolute -bottom-2 right-auto left-0 rtl:left-auto rtl:right-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">{t("NewsletterDescription")}</p>

            <div className="relative mb-8">
              <input
                type="email"
                placeholder={t("Email Placeholder")}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="absolute left-auto right-1.5 rtl:right-auto rtl:left-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-green-700 text-white px-4 rounded-md text-sm font-medium transition-colors">
                {t("Subscribe")}
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 text-lg" />
                <span className="text-sm text-gray-400">{contactAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary text-lg" />
                <span className="text-sm text-gray-400 font-sans" dir="ltr">{contactPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-lg" />
                <span className="text-sm text-gray-400 font-sans">{contactEmail}</span>
              </div>
            </div>

            {/* Vision 2030 Logo - Removed from here */}
          </div>
        </div>

        {/* Vision 2030 Logo - Centered below columns 2 & 3 */}
        <div className="flex justify-center mt-12 pt-8 border-t border-white/5">
          <div className="w-40 bg-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={visionLogo}
              alt="Vision 2030"
              className="w-full h-auto mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <p className="text-center md:text-end">
            {t("All Rights Reserved")} {currentYear} <span className="text-primary">ثقة الجزيرة العربية</span>
          </p>

          <div className="flex items-center gap-1">
            <span>{t("Designed and Developed by")}</span>
            <a href="https://ahdafweb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline font-medium">Ahdaf Web</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
