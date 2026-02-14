import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ServiceCard({ service }) {
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
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group perspective-1000"
      initial={{ opacity: 0, y: 20 }}
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
      <div style={{ transform: "translateZ(20px)" }}>

        {/* Decorative Background Blob */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
            {service?.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            {service?.description}
          </p>

          {service?.points && service.points.length > 0 && (
            <ul className="space-y-2 mt-4">
              {service.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                  <span>{point?.point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
