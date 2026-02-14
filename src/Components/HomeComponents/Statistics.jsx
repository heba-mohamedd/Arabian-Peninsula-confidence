import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import bg from "../../assets/statisticsBg.png";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery";

const StatCard = React.memo(({ value, label, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Remove non-numeric characters for animation purposes if needed, 
  // but usually value is "100" or similar.
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 3,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }}
      className={`
        flex-1 p-6 md:p-8 text-white
        flex flex-col items-center justify-center text-center
        border-b md:border-b-0 md:border-l border-white/10 last:border-none
        backdrop-blur-sm hover:bg-white/5 transition-colors rounded-2xl
      `}
    >
      <div className="flex items-center justify-center mb-2 transform hover:scale-110 transition-transform duration-300">
        <span className="text-3xl md:text-5xl font-bold text-primary mr-1 drop-shadow-md">+</span>
        <motion.span className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
          {rounded}
        </motion.span>
      </div>
      <p className="text-lg md:text-xl text-gray-300 font-medium drop-shadow-sm">{label}</p>
    </motion.div>
  );
});

StatCard.displayName = "StatCard";

export function Statistics() {
  const { data: settingsData } = useSettingsQuery();
  const settings = settingsData?.data || {};

  const stats = [
    {
      id: 1,
      value: settings['statistics_projects_count'] || "100",
      label: "مشاريع متعددة القطاعات",
    },
    {
      id: 2,
      value: settings['statistics_clients_count'] || "50",
      label: "عميل سعيد",
    },
    {
      id: 3,
      value: settings['statistics_years_experience'] || "10",
      label: "سنوات من الخبرة",
    },
  ];

  return (
    <section className="relative w-full mx-auto my-16">
      <div className="w-full relative">
        <div
          className="relative overflow-hidden min-h-[300px] flex items-center justify-center bg-fixed"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply z-0"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-stretch bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10">
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
      </div>
    </section>
  );
}
