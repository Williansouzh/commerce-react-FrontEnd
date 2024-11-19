import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  console.log("ProtectedRoute, current user:", user);

  if (!user) {
    console.log("No user found, redirecting to /login...");
    return <Navigate to="/login" />;
  }

  return children;
};
