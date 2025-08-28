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
    element: lazy(() => import("@/pages/dashboard/home")),
    protected: true,
  },
];

export default routes;
