import type { RouterProps } from "@/types/routes";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ children }: RouterProps) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;