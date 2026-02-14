import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SERVICES = [
  { id: 1, title: "Building Management Systems", side: "left", x: -300, y: -120 },
  { id: 2, title: "Surveillance and Camera Systems", side: "left", x: -250, y: 0 },
  { id: 3, title: "Control Systems", side: "left", x: -220, y: 120 },
  { id: 4, title: "Audio and Visual Systems", side: "right", x: 220, y: -100 },
  { id: 5, title: "Smart Solutions", side: "right", x: 220, y: 50 },
  {
    id: 6,
    title: "Management and Technical Support Services",
    side: "bottom",
    x: -80,
    y: 180,
  },
  {
    id: 7,
    title: "Unified Security Command Centers",
    side: "bottom",
    x: 120,
    y: 180,
  },
];

const Node = ({ service }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      style={{
        position: "absolute",
        left: `calc(50% + ${service.x}px)`,
        top: `calc(50% + ${service.y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      className="bg-neutral-100/80 backdrop-blur-sm border border-neutral-300 px-4 py-2 rounded-lg shadow-sm whitespace-nowrap"
    >
      <span className="text-sm font-medium text-neutral-700">
        {t(service.title)}
      </span>
    </motion.div>
  )
};

export default function ServicesMindMap() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative w-full h-[600px] bg-[#f8f9f8] flex items-center justify-center overflow-hidden font-sans italic"
      dir="ltr"
    >
      <svg
        className="absolute w-full h-full pointer-events-none"
        viewBox="0 0 800 600"
        style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.circle
          cx="400"
          cy="300"
          r="60"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeDasharray="10 5"
          initial={{ rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Thick green arc in the middle */}
        <path
          d="M 400 240 A 60 60 0 0 1 460 300 L 510 300"
          fill="none"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Draw curved lines for each service */}
        {SERVICES.map((s) => {
          // Start point (from center circle) and end point (at card)
          const startX = 400 + (s.x > 0 ? 60 : -60);
          const startY = 300 + (s.y > 150 ? 60 : 0);
          const endX = 400 + s.x + (s.x > 0 ? -60 : 60);
          const endY = 300 + s.y;

          return (
            <motion.path
              key={s.id}
              d={`M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2
                } ${endY}, ${endX} ${endY}`}
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          );
        })}

        {/* Small connection dots */}
        <circle cx="400" cy="300" r="4" fill="#333" />
        <circle
          cx="460"
          cy="300"
          r="5"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
      </svg>

      {/* Card Display (React Components) */}
      <div className="relative w-full h-full max-w-5xl" style={{ transform: isRTL ? "scaleX(-1)" : "none" }}>
        {SERVICES.map((service) => (
          <div key={service.id} style={{ transform: isRTL ? "scaleX(-1)" : "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <Node service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
