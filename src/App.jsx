import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import router from "./routes";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";
import { ToastContainer } from "react-toastify";
import PageLoader from "./Components/ui/PageLoader.jsx";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ReactQueryProvider>
      <HelmetProvider>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Suspense>
      </HelmetProvider>
    </ReactQueryProvider>
  );
}

export default App;
