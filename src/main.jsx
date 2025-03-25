import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import "./App.css";
import Edit from "./components/Edit_blogHTM";
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Home",
      element: <App />,
    },
    {
      path: "*", // Catch-all route for 404
      element: <NotFound />,
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
