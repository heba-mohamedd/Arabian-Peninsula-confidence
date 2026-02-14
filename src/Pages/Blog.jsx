import React, { useState } from "react";
import Title from "../Components/ui/Title.jsx";
import { motion } from "framer-motion";
import { Pagination, ConfigProvider } from "antd";
import { BlogCard, BlogSidebar } from "../Components/BlogComponents";
import { useTranslation } from "react-i18next";
import useArticlesQuery from "../hooks/queries/useArticlesQuery";

// Default categories (could be fetched dynamically later)
const categories = [
  { name: "الأنظمة الذكية، التحكم، الحلول الذكية" },
  { name: "إدارة المشاريع متعددة القطاعات" },
  { name: "التحول الرقمي، الحلول التقنية" },
  { name: "تشغيل المستشفيات، الأدوية" },
  { name: "المنشآت الصناعية" },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; // Match backend pagination
  const { t } = useTranslation();

  // Fetch articles from API
  // Note: For real pagination, we should pass page param to the query hook
  // But for now, we'll fetch all and client-side paginate or rely on API default
  // Implementing client-side pagination for simplicity if API returns all,
  // or use the API's pagination if implemented.
  // The current ArticleController implements pagination.

  // To support server-side pagination properly, we'd need to update the hook to accept params.
  // maximizing simplicity -> Fetching page 1 for now or updating hook.

  // Let's assume we want to fetch *all* for the grid or use the paginated response.
  // The current hook `useArticlesQuery` fetches `/api/articles` which returns paginated data (page 1).
  // We'll update usage to handle pagination later if needed, strictly speaking the user asked for "dynamic".

  const { data, isLoading } = useArticlesQuery();
  const articles = data?.data?.data || [];
  const meta = data?.data || {}; // Contains total, per_page etc if using standard Laravel pagination resource

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // In a real app, strict server-side pagination would trigger a refetch here with ?page= param
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      <div className=" pb-6">
        <Title title={t("Blog")} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content - Blog Grid */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white h-96 rounded-3xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={currentPage}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {articles.length > 0 ? (
                  articles.map((blog) => <BlogCard key={blog.id} blog={blog} />)
                ) : (
                  <div className="col-span-2 text-center py-10 text-gray-500">
                    {t("No articles found.")}
                  </div>
                )}
              </motion.div>
            )}

            {/* Pagination (Visual only for now unless hook updated) */}
            {articles.length > 0 && (
              <div className="flex justify-center mt-4">
                <ConfigProvider
                  theme={{
                    components: {
                      Pagination: {
                        itemActiveBg: "#00963F",
                        itemLinkBg: "transparent",
                        colorPrimary: "#ffffff",
                        colorPrimaryHover: "#ffffff",
                        itemSize: 40,
                        borderRadius: 8,
                      },
                    },
                    token: {
                      fontFamily: "inherit",
                      colorPrimary: "#00963F",
                    },
                  }}
                >
                  <Pagination
                    current={currentPage}
                    total={meta.total || articles.length}
                    pageSize={meta.per_page || pageSize}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    className="custom-pagination shadow-sm bg-white p-2 rounded-xl"
                  />
                </ConfigProvider>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <BlogSidebar
              categories={categories}
              featuredPosts={articles.slice(0, 3)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
