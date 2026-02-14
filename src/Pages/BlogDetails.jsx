import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogSidebar } from "../Components/BlogComponents";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft } from "react-icons/fa";
import useArticleByIdQuery from "../hooks/queries/useArticleByIdQuery"; // Dynamic Article
import { blogs } from "../data/data.jsx"; // Fallback for featured/sidebar if needed

const categories = [
  { name: "الأنظمة الذكية، التحكم، الحلول الذكية" },
  { name: "إدارة المشاريع متعددة القطاعات" },
  { name: "التحول الرقمي، الحلول التقنية" },
  { name: "تشغيل المستشفيات، الأدوية" },
  { name: "المنشآت الصناعية" },
];

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: articleData, isLoading, isError } = useArticleByIdQuery(id);
  // Handle both response structures: direct object or wrapped in data
  const blog = articleData?.data || articleData;

  const scrollRef = useRef(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-gray-500">{t("Article Not Found")}</p>
        <button
          onClick={() => navigate("/blog")}
          className="text-primary underline"
        >
          {t("Back to Blog")}
        </button>
      </div>
    );
  }

  // Handle image URL
  const imageUrl = blog.image_url || blog.image;

  return (
    <div className="bg-white font-sans">
      {/* Article Header Parallax */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover brightness-[0.6]"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-4">
              <span className="bg-primary px-3 py-1 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                {t("Article")}
              </span>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>
                  {new Date(
                    blog.published_at || blog.created_at,
                  ).toLocaleDateString("ar-SA")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser />
                <span>{blog.author_name || "Admin"}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white"
            >
              <div
                className="prose prose-lg prose-indigo max-w-none text-gray-700 leading-loose"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags or Footer of Article */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => navigate("/blog")}
                  className="flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  <FaArrowLeft className="rtl:rotate-180" />
                  {t("Back to Blog")}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <BlogSidebar
                categories={categories}
                featuredPosts={blogs.slice(0, 3)} // Fallback to static or fetch popular
              />

              <div className="mt-8 bg-primary p-8 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-4">
                  {t("Need Consultation?")}
                </h3>
                <p className="text-white/80 mb-6 text-sm">
                  {t(
                    "Contact our experts to find the best solutions for your business.",
                  )}
                </p>
                <button
                  onClick={() => navigate("/contact-us")}
                  className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full"
                >
                  {t("Contact Us Now")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
