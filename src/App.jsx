import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { router } from "./routes";
import LoadingSpinner from "./Components/LoadingSpinner";

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
