import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ServiceCard = React.memo(({ item }) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Calculating rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Shine effect moving opposite to mouse
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Calculate normalized position (-0.5 to 0.5)
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
    <Link to={`/sectors/${item?.id}`} className="block h-full perspective-1000">
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
        className="relative h-[400px] w-full rounded-2xl transition-shadow duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
          {/* Image Background */}
          <div className="absolute inset-0 h-full w-full">
            <img
              src={item?.image_url}
              alt={item?.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ scale: hover ? 1.15 : 1 }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>

          {/* Shine/Glare Effect */}
          <motion.div
            className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent"
            style={{
              background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.2) 0%, transparent 50%)`,
            }}
          />

          {/* Floating Content Layer (Offset for 3D depth) */}
          <motion.div
            className="absolute inset-0 p-8 flex flex-col justify-end z-20"
            style={{ translateZ: "40px" }}
          >
            <div className="transform translate-z-20">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                {item?.name}
              </h3>

              {/* Animated Divider */}
              <motion.div
                className="h-1 bg-primary rounded-full mb-4 shadow-lg shadow-primary/50"
                animate={{ width: hover ? "100%" : "3rem" }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="flex items-center gap-2 overflow-hidden"
                animate={{
                  opacity: hover ? 1 : 0.7,
                  y: hover ? 0 : 5,
                }}
              >
                <span className="font-medium text-sm text-gray-200">
                  استكشف القطاع
                </span>
                <HiArrowNarrowLeft className="text-xl text-primary animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
