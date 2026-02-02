import React, { useState } from "react";
import Title from "../Components/ui/Title.jsx";
import { motion } from "framer-motion";
import { Pagination, ConfigProvider } from "antd";
import { BlogCard, BlogSidebar } from "../Components/BlogComponents";
import { blogs } from "../data/data.jsx";

// Mock data for categories
const categories = [
  { name: "الأنظمة الذكية، التحكم، الحلول الذكية" },
  { name: "إدارة المشاريع متعددة القطاعات" },
  { name: "التحول الرقمي، الحلول التقنية" },
  { name: "تشغيل المستشفيات، الأدوية" },
  { name: "المنشآت الصناعية" },
];

// // Mock data for featured posts
// const featuredPosts = [
//   {
//     title: "أفضل الممارسات لإدارة المرافق في المؤسسات الكبرى",
//     image: blog1,
//   },
//   {
//     title: "أفضل الممارسات لإدارة المرافق في المؤسسات الكبرى",
//     image: blog1,
//   },
// ];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of blogs per page

  // Calculate paginated blogs
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      <Title title="المدونة" />

      <div className="container max-w-7xl mx-auto px-6 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - Blog Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <ConfigProvider
                theme={{
                  components: {
                    Pagination: {
                      itemActiveBg: "#10b981",
                      itemLinkBg: "#ffffff",
                      colorPrimary: "#ffffff",
                      colorPrimaryHover: "#10b981",
                    },
                  },
                }}
              >
                <Pagination
                  current={currentPage}
                  total={blogs.length}
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  className="custom-pagination"
                />
              </ConfigProvider>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <BlogSidebar
              categories={categories}
              featuredPosts={blogs.slice(0, 2)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
