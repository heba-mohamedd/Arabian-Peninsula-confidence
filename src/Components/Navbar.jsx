import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dropdown, Space } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "/Logo.png";
import { LuDot } from "react-icons/lu";

// Navigation links data
const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "القطاعات", href: "/sectors" },
  { name: "القوائم المالية", href: "/financial" },
  { name: "الشـهـادات", href: "/certificates" },
  { name: "خدمات تكامل الانظمة", href: "/system-integration" },
  { name: "ادارة المرافق", href: "/facility-management" },
  { name: "من نحن", href: "/about-us" },
  { name: "تواصل معنا", href: "/contact-us" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items = [
    { key: "1", label: "English" },
    { key: "2", label: "العربية" },
  ];

  const activeLink = useMemo(() => {
    const currentLink = navLinks.find(
      (link) => link.href === location.pathname,
    );
    return currentLink ? currentLink.name : "الرئيسية";
  }, [location.pathname]);

  return (
    <nav className="flex items-center justify-between bg-white h-16 md:h-20 shadow-sm">
      {/* Logo */}
      <div className="shrink-0 w-20 h-20">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Thibat Logo"
          className="h-12 md:h-16 w-auto cursor-pointer"
        />
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-dark-grey font-medium text-sm xl:text-base">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <NavLink
              to={link.href}
              className={`flex justify-center items-center transition-colors ${
                activeLink === link.name ? "text-primary" : "hover:text-primary"
              }`}
            >
              <LuDot className="shrink-0 mt-1" size={24} />
              {link.name}
            </NavLink>
          </li>
        ))}
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
          className="bg-primary flex items-center px-4 md:px-8 h-full text-white cursor-pointer"
          style={{ clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
        >
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space className="hover:opacity-80 transition-opacity text-xs md:text-base">
              <DownOutlined className="text-xs" />
              <span className="font-bold text-sm md:text-lg">العربية</span>
              <GlobalOutlined className="text-lg md:text-xl" />
            </Space>
          </Dropdown>
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
                    className={`block py-2 px-3 rounded transition-colors ${
                      activeLink === link.name
                        ? "text-primary bg-green-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
