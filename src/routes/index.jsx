import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Sectors = lazy(() => import("../Pages/Sectors"));
const SectorDetails = lazy(() => import("../Pages/SectorDetails"));
const Certificates = lazy(() => import("../Pages/Certificates"));
const Services = lazy(() => import("../Pages/Services"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const Blog = lazy(() => import("../Pages/Blog"));
const BlogDetails = lazy(() => import("../Pages/BlogDetails"));
const CompanyProfile = lazy(() => import("../Pages/CompanyProfile"));
const NotFound = lazy(() => import("../Pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // ... existing routes
      {
        path: "/sectors",
        element: <Sectors />,
      },
      {
        path: "/sectors/:id",
        element: <SectorDetails />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },

      {
        path: "/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
