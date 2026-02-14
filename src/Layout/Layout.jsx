import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import WhatsAppFloatButton from "../Components/WhatsAppFloatButton";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document attributes based on language
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
    // document.title is now managed by Helmet, but we keep this as fallback or remove if we fully switch
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Helmet>
        <title>{i18n.language === "ar" ? "ثقة الجزيرة العربية" : "Thiqat Al-Jazeera"}</title>
        <meta name="description" content={t("MetaDescription")} />
        <meta name="keywords" content={t("MetaKeywords")} />
      </Helmet>
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppFloatButton />
      <ScrollToTop />
      {/* <DownloadFloatButton /> */}
    </div>
  );
}
