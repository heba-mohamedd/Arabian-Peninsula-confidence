import React from "react";
import { motion } from "framer-motion";
import { FaSquare } from "react-icons/fa";
import bg from "../assets/statisticsBg.png";

const StatCard = React.memo(({ value, label, index }) => {
  const offsets = [
    "md:-translate-y-10", // الأول فوق
    "md:translate-y-0", // التاني في النص
    "md:translate-y-10", // التالت تحت
  ];

  return (
    <div
      className={`
        flex-1 p-4 text-white
        transform transition-transform duration-300
        ${offsets[index]}
      `}
    >
      <div className="flex justify-between items-center gap-3">
        <FaSquare
          size={15}
          className="text-primary mt-2 md:mt-4 shadow-[0_0_10px_#20C766]"
        />

        <div className="flex flex-col items-center">
          <span className="text-lg md:text-2xl font-bold text-white/80">+</span>
          <span className="text-xl md:text-3xl font-bold leading-none">
            {value}
          </span>
        </div>

        <p className="text-[10px] md:text-lg whitespace-nowrap mt-1">{label}</p>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";

export default React.memo(function Statistics() {
  const stats = [
    {
      id: 1,
      value: "100",
      label: "مشاريع متعددة القطاعات",
    },
    {
      id: 2,
      value: "100",
      label: "مشاريع متعددة القطاعات",
    },
    {
      id: 3,
      value: "100",
      label: "مشاريع متعددة القطاعات",
    },
  ];

  return (
    <section className="relative w-full mx-auto" dir="rtl">
      <div className="w-full ">
        <div
          className="
                relative  
                overflow-hidden
                 min-h-[250px]
                flex items-center justify-center
     
              "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 p-6 ">
            {stats.map((item, index) => (
              <StatCard
                key={item.id}
                value={item.value}
                label={item.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
