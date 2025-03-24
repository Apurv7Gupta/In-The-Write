import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./components/Navbar";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Edit from "./components/Edit_blogHTM";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*", // Catch-all route for 404
      element: <div>404: Page Not Found</div>,
    },
    {
      path: "/StartBlogging",
      element: <Edit />,
    },
  ],
  {
    basename: "/In-The-Write",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
