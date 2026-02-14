import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const BlogCard = ({ blog }) => {
  const { t } = useTranslation();

  // Helper to get image URL (local or storage)
  const getImageUrl = (image) => {
    if (!image) return "https://placehold.co/600x400?text=No+Image"; // Placeholder
    if (image.startsWith("http")) return image;
    return image; // Assuming the API returns full URL now, otherwise prepend storage URL
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={getImageUrl(blog.image_url || blog.image)}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {t("Article")}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-400 mb-4 gap-4">
          <div className="flex items-center gap-1">
            <FaCalendarAlt />
            <span>{new Date(blog.published_at || blog.create_at || Date.now()).toLocaleDateString('ar-SA')}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser />
            <span>{blog.author_name || "Admin"}</span>
          </div>
        </div>

        <Link to={`/blog/${blog.id}`} className="block mb-3">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {blog.excerpt || blog.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <Link
            to={`/blog/${blog.id}`}
            className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            {t("Read More")}
            <FaArrowLeft className="text-xs transform group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
