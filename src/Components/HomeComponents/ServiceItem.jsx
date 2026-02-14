import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

export function ServiceItem({ item }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Calculating rotation - slightly less intense than the image card
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Position relative to center
    const width = rect.width;
    const height = rect.height;

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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full perspective-1000"
    >
      {/* Decorative gradient blob */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"
        animate={{ scale: hover ? 1.5 : 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 flex flex-col h-full transform transition-transform duration-300" style={{ transform: "translateZ(20px)" }}>
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/20"
          animate={{ rotate: hover ? 10 : 0, scale: hover ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MdOutlineMiscellaneousServices className="text-white text-3xl" />
        </motion.div>

        <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>

        <p className="text-dark-grey text-base leading-relaxed mb-8 border-b border-gray-100 pb-6">
          {item.description}
        </p>

        <ul className="space-y-4 mt-auto">
          {item.items?.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 group/item"
              initial={{ x: 0 }}
              animate={{ x: hover ? 5 : 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BsCheckCircleFill className="text-primary/70 mt-1 flex-shrink-0 group-hover/item:text-primary transition-colors" />
              <span className="text-secondary text-sm md:text-base font-medium transition-colors group-hover/item:text-gray-900">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
    </motion.div>
  );
}
