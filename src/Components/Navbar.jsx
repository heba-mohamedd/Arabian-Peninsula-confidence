import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlobalOutlined,
  DownOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "/Logo.png";
import { LuDot } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useSettingsQuery } from "../hooks/queries/useSettingsQuery";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: settingsData } = useSettingsQuery();
  const settings = settingsData?.data || {};
  const siteLogo = settings['site_logo'] || logo;

  // Update direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const navLinks = useMemo(() => [
    { name: t("Home"), href: "/" },
    { name: t("Sectors"), href: "/sectors" },
    // { name: t("Certificates"), href: "/certificates" },
    { name: t("Services"), href: "/services" },
    { name: t("About Us"), href: "/about-us" },
    { name: t("Contact Us"), href: "/contact-us" },
    { name: t("Blog"), href: "/blog" },
  ], [t]);

  const activeLink = useMemo(() => {
    const currentLink = navLinks.find(
      (link) => link.href === location.pathname,
    );
    return currentLink ? currentLink.name : t("Home");
  }, [location.pathname, navLinks, t]);

  return (
    <nav className="flex items-center justify-between bg-white h-16 md:h-20 shadow-sm">
      {/* Logo */}
      <div className="shrink-0 w-20 h-20 flex items-center justify-center">
        <img
          onClick={() => navigate("/")}
          src={siteLogo}
          alt="Thibat Logo"
          className="h-12 md:h-16 w-auto cursor-pointer object-contain"
        />
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-dark-grey font-medium text-sm xl:text-base">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <NavLink
              to={link.href}
              className={`flex justify-center items-center transition-colors ${activeLink === link.name ? "text-primary" : "hover:text-primary"
                }`}
            >
              <LuDot className="shrink-0 mt-1" size={24} />
              {link.name}
            </NavLink>
          </li>
        ))}
        <NavLink
          className="flex items-center gap-2 underline text-primary"
          to="/company-profile"
        >
          <BsDownload />
          {t("Download Profile")}
        </NavLink>
      </ul>

      {/* Mobile Menu Button */}

      <button
        className="lg:hidden text-2xl text-dark-grey hover:text-primary transition-colors px-4"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Language Selector (Desktop) */}
      <div className="relative hidden lg:flex items-center h-full">
        <div
          onClick={toggleLanguage}
          className="bg-primary flex items-center px-5 md:px-10 gap-2 h-full text-white cursor-pointer select-none"
          style={{ clipPath: i18n.language === 'ar' ? "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)" : "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <span className="font-bold text-sm md:text-lg">{t("Language")}</span>
          <GlobalOutlined className="text-lg md:text-xl" />
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-white border-b text-dark-grey lg:hidden shadow-md z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded transition-colors ${activeLink === link.name
                      ? "text-primary bg-green-50"
                      : "hover:bg-gray-50"
                      }`}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full text-start py-2 px-3 hover:bg-gray-50 rounded text-primary font-bold"
                >
                  <GlobalOutlined />
                  {t("Language")}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
