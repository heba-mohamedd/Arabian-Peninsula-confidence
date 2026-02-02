import React from "react";
import { blogs } from "../data/data.jsx";
import Header from "./ui/Header.jsx";
import BlogCard from "./BlogCard.jsx";

const ArticleSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <Header
        title="أحدث المقالات"
        description="نشارككم خبراتنا، حلول عملية، وأحدث الاتجاهات في مجالنا."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 w-full">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
