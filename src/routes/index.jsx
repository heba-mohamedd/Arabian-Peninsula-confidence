import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Sectors = lazy(() => import("../Pages/Sectors"));
const SectorDetails = lazy(() => import("../Pages/SectorDetails"));
// const Financial = lazy(() => import("../Pages/Financial"));
const Certificates = lazy(() => import("../Pages/Certificates"));
// const SystemIntegration = lazy(() => import("../Pages/SystemIntegration"));
const Services = lazy(() => import("../Pages/Services"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const Blog = lazy(() => import("../Pages/Blog"));
const BlogDetails = lazy(() => import("../Pages/BlogDetails"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sectors",
        element: <Sectors />,
      },
      {
        path: "/sectorDetails/:id",
        element: <SectorDetails />,
      },
      // {
      //   path: "/financial",
      //   element: <Financial />,
      // },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      // {
      //   path: "/system-integration",
      //   element: <SystemIntegration />,
      // },
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
    ],
  },
]);
