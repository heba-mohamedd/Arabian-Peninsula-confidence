import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isClick, setIsClick] = useState("الرئيسية");
  const items = [
    { key: "1", label: "English" },
    { key: "2", label: "العربية" },
  ];

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "القطاعات", href: "/sectors" },
    { name: "خدمات تكامل الانظمة", href: "#" },
    { name: "ادارة المرافق", href: "#" },
    { name: "من نحن", href: "#" },
    { name: "تواصل معنا", href: "#" },
  ];

  return (
    <nav
      className="flex items-center justify-between bg-white h-20  border-b border-gray-100 shadow-sm"
      dir="rtl"
    >
      <div className="shrink-0">
        <img src={logo} alt="Thibat Logo" className="h-15 w-25" />
      </div>

      <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
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

      <div className="relative flex items-center h-full">
        <div
          className="bg-[#009640] flex items-center px-8 h-full text-white cursor-pointer"
          style={{
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space className="hover:opacity-80 transition-opacity">
              <DownOutlined className="text-xs" />
              <span className="font-bold text-lg">العربية</span>
              <GlobalOutlined className="text-xl" />
            </Space>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
