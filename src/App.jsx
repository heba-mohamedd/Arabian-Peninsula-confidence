import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { router } from "./routes";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";
import { ToastContainer } from "react-toastify";
import PageLoader from "./Components/ui/PageLoader.jsx";

function App() {
  return (
    <ReactQueryProvider>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Suspense>
    </ReactQueryProvider>
  );
}

export default App;
