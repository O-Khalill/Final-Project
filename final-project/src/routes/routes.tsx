// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home, Dashboard, About } from "../pages/index";
import { Suspense } from "react";
import Layout from "../pages/Layout";

export const routes = createBrowserRouter([
  {
    path: "/", //eccomerce
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "Dashboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "About",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);
