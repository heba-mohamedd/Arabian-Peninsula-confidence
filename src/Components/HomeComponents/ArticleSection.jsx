import React from "react";
import Header from "../ui/Header.jsx";
import { BlogCard } from "../BlogComponents/BlogCard.jsx";
import { useSettingsQuery } from "../../hooks/queries/useSettingsQuery";
import useArticlesQuery from "../../hooks/queries/useArticlesQuery"; // Dynamic Articles
import { useTranslation } from "react-i18next";

export const ArticleSection = () => {
  const { t } = useTranslation();
  const { data: settingsData } = useSettingsQuery();
  const { data: articlesData, isLoading } = useArticlesQuery(); // Fetch Articles

  const settings = settingsData?.data || {};
  const articles = articlesData?.data?.data || []; // Laravel pagination structure

  const sectionTitle =
    settings["articles_section_title"] || t("Latest Articles");
  const sectionDesc =
    settings["articles_section_description"] ||
    t("Sharing our expertise and practical solutions.");

  return (
    <section className="py-16 md:py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header title={sectionTitle} description={sectionDesc} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-12 w-full">
          {isLoading ? (
            // Skeleton Loading
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm h-96 animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-20 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))
          ) : articles.length > 0 ? (
            articles
              .slice(0, 3)
              .map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">
              {t("No articles found.")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
