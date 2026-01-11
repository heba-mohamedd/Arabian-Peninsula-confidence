import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Sectors = lazy(() => import("../Pages/Sectors"));
const SectorDetails = lazy(() => import("../Pages/SectorDetails"));
const Financial = lazy(() => import("../Pages/Financial"));
const Certificates = lazy(() => import("../Pages/Certificates"));
const SystemIntegration = lazy(() => import("../Pages/SystemIntegration"));
const FacilityManagement = lazy(() => import("../Pages/FacilityManagement"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));

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
      {
        path: "/financial",
        element: <Financial />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/system-integration",
        element: <SystemIntegration />,
      },
      {
        path: "/facility-management",
        element: <FacilityManagement />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
