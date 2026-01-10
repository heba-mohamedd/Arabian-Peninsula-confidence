import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { router } from "./routes";
import RequestQuote from "./Components/RequestQuote";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
