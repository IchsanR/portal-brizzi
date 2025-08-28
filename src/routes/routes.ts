import type { AppRoute } from "@/types/routes";
import { lazy } from "react";

const routes: AppRoute[] = [
  {
    path: "/login",
    element: lazy(() => import("@/pages/login/Login")),
    protected: false,
  },
  {
    path: "/",
    element: lazy(() => import("@/layouts/dashboard/DashboardLayout")),
    protected: true,
    children: [
      {
        path: "/",
        element: lazy(() => import("@/pages/dashboard/home/home")),
        protected: false,
      }
    ]
  },
];

export default routes;
