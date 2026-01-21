import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SimpleList({ items }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  // حساب مساحة السحب المسموحة بناءً على عرض الشاشة
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [items]);

  const handleItemClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto p-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] shadow-primary/10 bg-transparent">
      <div className="container max-w-7xl mx-auto px-4">
        {/* عنوان اختياري */}
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-normal text-gray-800">تصفح الانظمه</p>
          <span className="text-sm text-gray-500">اسحب للتنقل ↔</span>
        </div>

        {/* الحاوية الخارجية للسلايدر */}
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: width, left: 0 }}
            className="flex gap-5 "
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="min-w-[150px] md:min-w-[180px] relative group"
                onClick={() => handleItemClick(item.id)}
              >
                {/* شكل الكارت */}
                <div className="p-7 bg-white rounded-2xl shadow-sm border border-gray-100  flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary/30">
                  {/* دائرة زخرفية في الخلفية */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full rounded-tr-2xl transition-colors group-hover:bg-primary/10" />

                  {/* النص */}
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors z-10 text-center">
                    {item.title || item.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
