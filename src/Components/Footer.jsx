import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoAlbumsOutline } from "react-icons/io5";
import footerimage from "../assets/236627169d5a53522a3134e218015a0810d64acb.png";
export default function Footer() {
  const [isOpened, setIsOpend] = useState(true);
  return (
    <footer className="bg-secondary text-[#B8B8B8]">
      <motion.div
        className="bg-white border-4 border-primary rounded-full w-16 sm:w-17.5 h-16 sm:h-17.5 
                flex items-center justify-center mx-auto relative -top-6 sm:-top-7.5 cursor-pointer z-10"
        onClick={() => setIsOpend((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotate: isOpened ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isOpened ? (
            <IoIosArrowDown size={24} color="#00963F" />
          ) : (
            <IoIosArrowUp size={24} color="#00963F" />
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 md:py-10 px-4 md:px-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className="flex justify-center sm:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img
                src={footerimage}
                alt="logo"
                className="w-full max-w-48 sm:max-w-56 md:max-w-62.5"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-lg sm:text-xl md:text-2xl mb-4 text-primary flex items-center gap-2">
                <IoAlbumsOutline className="flex-shrink-0" />
                <p>الخدمات</p>
              </div>
              <ul className="space-y-2 list-disc pe-5 text-sm md:text-base">
                <li>إدارة المرافق</li>
                <li>تكامل الأنظمة</li>
                <li>الحلول الذكية</li>
                <li>التشغيل والصيانة</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-lg sm:text-xl md:text-2xl mb-4 text-primary flex items-center gap-2">
                <IoAlbumsOutline className="flex-shrink-0" />
                <p>القطاعات</p>
              </div>
              <ul className="space-y-2 list-disc pe-5 text-sm md:text-base">
                <li>الجهات الحكومية</li>
                <li>المستشفيات</li>
                <li>المنشآت الصناعية</li>
                <li>المطارات والموانئ</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-lg sm:text-xl md:text-2xl mb-4 text-primary flex items-center gap-2">
                <IoAlbumsOutline className="flex-shrink-0" />
                <p>تواصل معنا</p>
              </div>
              <ul className="space-y-2 list-disc pe-5 text-sm md:text-base">
                <li>من نحن</li>
                <li>مساعدة</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-primary py-3 md:py-4">
        <p className="text-center text-white text-xs sm:text-sm md:text-base px-4">
          الالتزام بالأنظمة واللوائح المعتمدة في المملكة
        </p>
      </div>
    </footer>
  );
}
