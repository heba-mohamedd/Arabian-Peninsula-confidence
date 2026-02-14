import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative -mt-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {t("PageNotFoundTitle") || "Page Not Found"}
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    {t("PageNotFoundDescription") || "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    {t("BackToHome") || "Back to Home"}
                </Link>
            </motion.div>
        </div>
    );
}
