import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Sectors from "../Pages/Sectors";
import SectorDetails from "../Pages/SectorDetails";
import Financial from "../Pages/Financial ";
import Certificates from "../Pages/Certificates";
import SystemIntegration from "../Pages/SystemIntegration";
import FacilityManagement from "../Pages/FacilityManagement";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

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
