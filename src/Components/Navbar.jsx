import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isClick, setIsClick] = useState("الرئيسية");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = [
    { key: "1", label: "English" },
    { key: "2", label: "العربية" },
  ];

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "القطاعات", href: "/sectors" },
    { name: "القوائم المالية ", href: "/financial" },
    { name: "الشـهـادات", href: "/certificates" },
    { name: "خدمات تكامل الانظمة", href: "/system-integration" },
    { name: "ادارة المرافق", href: "/facility-management" },
    { name: "من نحن", href: "/about-us" },
    { name: "تواصل معنا", href: "/contact-us" },
  ];

  return (
    <nav
      className="flex items-center justify-between bg-white h-16 md:h-20  shadow-sm "
      dir="rtl"
    >
      <div className="shrink-0">
        <img
          src={logo}
          alt="Thibat Logo"
          className="h-12 md:h-15 w-20 md:w-25"
        />
      </div>

      <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-gray-700 font-medium text-sm xl:text-base">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <NavLink
              to={link.href}
              onClick={() => setIsClick(link.name)}
              className={`hover:text-[#00963F] transition-colors  ${
                isClick === link.name ? "text-[#00963F]" : ""
              } `}
            >
              {link.name}
            </NavLink>
            {index !== navLinks.length - 1 && (
              <span className="text-gray-300 mr-4">•</span>
            )}
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden text-2xl text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      <div className="relative flex items-center h-full">
        <div
          className="bg-[#009640] hidden md:flex items-center px-4 md:px-8 h-full text-white cursor-pointer"
          style={{
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
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

      {mobileMenuOpen && (
        <div
          className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 lg:hidden shadow-md z-50"
          dir="rtl"
        >
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={() => {
                    setIsClick(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block py-2 px-3 rounded transition-colors ${
                    isClick === link.name
                      ? "text-[#00963F] bg-green-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
