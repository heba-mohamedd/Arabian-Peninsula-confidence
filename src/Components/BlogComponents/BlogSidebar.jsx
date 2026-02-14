import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function BlogSidebar({ categories, featuredPosts }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col gap-8"
    >
      {/* Categories Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100 text-gray-900">
          {t("Categories")}
        </h3>
        <ul className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={category.link || "#"}
                className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-gray-600 font-medium group-hover:text-primary transition-colors text-sm">
                  {category.name}
                </span>
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all text-[10px]">
                  <FaArrowLeft />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Posts Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100 text-gray-900">
          {t("Most Read Articles")}
        </h3>
        <div className="flex flex-col gap-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              onClick={() => navigate(`/blog/${post.id}`)}
              key={index}
              whileHover={{ x: -5 }}
              className="flex gap-4 cursor-pointer group items-start"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 py-1">
                <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md w-fit">
                  {t("Featured Article")}
                </span>
                <h4 className="text-sm font-bold text-gray-800 leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
