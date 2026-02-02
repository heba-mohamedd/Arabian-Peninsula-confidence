import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export function BlogSidebar({ categories, featuredPosts }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8"
    >
      {/* Categories Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200">
          الفئات
        </h3>
        <ul className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <li key={index} className="bg-light-grey/10 p-3 rounded-lg">
              <a
                href={category.link || "#"}
                className="text-dark-grey hover:text-primary hover:pr-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="text-base">{category.name}</span>
                <FaArrowLeft className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Posts Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200">
          أكثر المقالات قراءة
        </h3>
        <div className="flex flex-col gap-5">
          {featuredPosts.map((post, index) => (
            <motion.div
              onClick={() => navigate(`/blog/${post.id}`)}
              key={index}
              whileHover={{ x: -5 }}
              className="flex gap-4 cursor-pointer group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-xs font-medium">اقرأ المزيد</span>
                  <FaArrowLeft className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
