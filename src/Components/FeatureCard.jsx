import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FeatureCard = ({
  title,
  points = [],
  icon,
  headerColor = "", // Kept for API compatibility, but we might override with new design
  cardColor = "",   // Kept for API compatibility
  iconColor = "",
}) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Calculating rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Position relative to center
    const mouseXRel = (e.clientX - rect.left) / width - 0.5;
    const mouseYRel = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXRel);
    y.set(mouseYRel);
  };

  const handleMouseLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl overflow-hidden h-full shadow-lg border border-gray-100 group perspective-1000 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col p-6 md:p-8">

        {/* Decorative Header Background */}
        <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-br from-primary/5 to-transparent -z-10 opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>

        {/* Icon & Title Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-gray-100 text-primary group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{title}</h3>
        </div>

        {/* Points List */}
        <div className="flex-1">
          <ul className="space-y-4">
            {points?.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0 shadow-[0_0_8px_rgba(0,150,63,0.6)]"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Decor */}
        <div className="w-full h-1 bg-gradient-to-l from-primary/20 to-transparent mt-8 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
