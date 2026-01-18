import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { router } from "./routes";
import LoadingSpinner from "./Components/LoadingSpinner";
import ReactQueryProvider from "./providers/ReactQueryProvider.jsx";

function App() {
  return (
    <ReactQueryProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ReactQueryProvider>
  );
}

export default App;
