import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                >
                    <button
                        onClick={scrollToTop}
                        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="h-5 w-5" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
