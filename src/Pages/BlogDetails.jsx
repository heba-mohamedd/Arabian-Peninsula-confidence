import React from "react";
import { blogs } from "../data/data.jsx";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../Components/ui/Title.jsx";
import { BlogSidebar } from "../Components/BlogComponents";
// Mock data for categories

const categories = [
  { name: "الأنظمة الذكية، التحكم، الحلول الذكية" },
  { name: "إدارة المشاريع متعددة القطاعات" },
  { name: "التحول الرقمي، الحلول التقنية" },
  { name: "تشغيل المستشفيات، الأدوية" },
  { name: "المنشآت الصناعية" },
];
export default function BlogDetails() {
  const { id } = useParams();
  console.log(id);

  const blog = blogs.find((blog) => blog.id === Number(id));
  console.log(blog);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center bg-gray-50"
    >
      <Title title="المدونة" />

      <div className="container max-w-7xl mx-auto px-6 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - Blog Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div
              className="w-full 
                h-[200px] 
                sm:h-[300px] 
                md:h-[400px] 
                overflow-hidden 
                rounded-lg 
                relative"
            >
              <img
                src={blog?.image}
                alt={blog?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <h1 className="text-2xl font-bold">{blog?.title}</h1>
            <p className="text-gray-600">{blog?.description}</p>
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
