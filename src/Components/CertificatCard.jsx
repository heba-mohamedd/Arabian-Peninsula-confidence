import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import flag from "../assets/Flag.png";

export default function CertificatCard({ item }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Calculating rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="relative flex flex-col h-[400px] rounded-2xl shadow-lg border border-gray-100 overflow-hidden bg-white group perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Content Container */}
      <div
        className="relative w-full h-full flex flex-col transform transition-transform duration-200"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Flag - Floating Effect */}
        <motion.div
          className="absolute top-4 right-4 w-12 z-20 drop-shadow-md"
          style={{ transform: "translateZ(30px)" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <img src={flag} alt="flag" className="w-full" />
        </motion.div>

        {/* Certificate Image */}
        <div className="flex-1 bg-gray-50 overflow-hidden relative p-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-50"></div>
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            style={{ transform: "translateZ(10px)" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={item?.image}
              alt="certificate logo"
              className="max-w-full max-h-full object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="bg-white border-t border-gray-100 flex flex-col items-center justify-center py-6 relative overflow-hidden"
          style={{ transform: "translateZ(25px)" }}
        >
          {/* Decorative background glow in footer */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <p className="text-gray-500 text-xs mb-1 font-semibold uppercase tracking-wider relative z-10">إدارة الجودة</p>
          <h3 className="font-bold text-secondary text-lg relative z-10 group-hover:text-primary transition-colors">{item?.name}</h3>
        </div>
      </div>
    </motion.div>
  );
}
