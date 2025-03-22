import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./components/Navbar";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
  },

  { path: "/Start Blogging", element: "" },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
