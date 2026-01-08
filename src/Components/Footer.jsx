import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoAlbumsOutline } from "react-icons/io5";
import footerimage from "../assets/236627169d5a53522a3134e218015a0810d64acb.png";
export default function Footer() {
  const [isOpened, setIsOpend] = useState(true);
  return (
    <footer className="bg-secondary  text-[#B8B8B8]" dir="rtl">
      <div
        className="bg-white border-4 border-primary rounded-full w-17.5 h-17.5 
                flex items-center justify-center mx-auto relative -top-7.5"
        onClick={() => setIsOpend((prev) => !prev)}
      >
        {isOpened ? (
          <IoIosArrowDown size={25} color="#00963F" />
        ) : (
          <IoIosArrowUp size={25} color="#00963F" />
        )}
      </div>
      {isOpened && (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <img src={footerimage} alt="logo" className="w-full max-w-62.5" />

          <div>
            <div className="text-2xl mb-4 text-primary flex items-center gap-2">
              <IoAlbumsOutline />

              <p>الخدمات</p>
            </div>
            <ul className="space-y-2 list-disc  pr-5">
              <li>إدارة المرافق</li>
              <li>تكامل الأنظمة</li>
              <li>الحلول الذكية</li>
              <li>التشغيل والصيانة</li>
            </ul>
          </div>

          <div>
            <div className="text-2xl mb-4 text-primary flex items-center gap-2">
              <IoAlbumsOutline />

              <p>القطاعات</p>
            </div>
            <ul className="space-y-2 list-disc pr-5">
              <li>الجهات الحكومية</li>
              <li>المستشفيات</li>
              <li>المنشآت الصناعية</li>
              <li>المطارات والموانئ</li>
            </ul>
          </div>

          <div>
            <div className="text-2xl mb-4 text-primary flex items-center gap-2">
              <IoAlbumsOutline />
              <p>تواصل معنا</p>
            </div>
            <ul className="space-y-2 list-disc  pr-5">
              <li>من نحن</li>
              <li>مساعدة</li>
            </ul>
          </div>
        </div>
      )}

      <div className="bg-primary py-4">
        <p className="text-center">
          الالتزام بالأنظمة واللوائح المعتمدة في المملكة
        </p>
      </div>
    </footer>
  );
}
