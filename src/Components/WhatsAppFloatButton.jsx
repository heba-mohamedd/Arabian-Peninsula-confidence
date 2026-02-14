import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WhatsAppFloatButton() {
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();

    // Replace with your actual WhatsApp number
    const phoneNumber = "966500000000"; // Example number, should be updated
    const message = encodeURIComponent(t("WhatsAppInitialMessage") || "Hello, I would like to inquire about your services.");

    return (
        <motion.div
            className="fixed right-6 bottom-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.5,
            }}
        >
            <motion.a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Pulsing Background Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-[#25D366] opacity-30"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Main Button */}
                <motion.div
                    className="relative w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden text-white"
                    animate={{
                        boxShadow: isHovered
                            ? "0 20px 60px rgba(37, 211, 102, 0.5)"
                            : "0 10px 40px rgba(37, 211, 102, 0.3)",
                    }}
                >
                    <FaWhatsapp className="text-3xl" />
                </motion.div>

                {/* Tooltip Text */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
                        >
                            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                                {t("WhatsAppChat") || "Chat with us"}
                                {/* Arrow */}
                                <div className="absolute left-full top-1/2 -translate-y-1/2">
                                    {/* This arrow needs to be flipped for RTL/LTR context if necessary, generic for now */}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.a>
        </motion.div>
    );
}
