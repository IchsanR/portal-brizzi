import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
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