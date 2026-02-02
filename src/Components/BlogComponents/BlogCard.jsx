import React from "react";
import { Card } from "antd";
import { FaArrowLeft, FaCalendar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card
        hoverable
        className="h-full overflow-hidden rounded-lg border-0 shadow-md hover:shadow-xl transition-all duration-300"
        cover={
          <div className="relative overflow-hidden">
            <img
              alt={blog.title}
              src={blog.image}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center gap-2">
              <FaCalendar className="text-sm" />
              <span className="text-sm font-medium">{blog.date}</span>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-gray-800 leading-relaxed line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {blog.description}
          </p>
          <div className="flex items-center gap-3 text-primary cursor-pointer group mt-2 ">
            <span className="font-semibold text-base">رؤية التفاصيل</span>
            <div
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
            >
              <FaArrowLeft className="text-sm" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
