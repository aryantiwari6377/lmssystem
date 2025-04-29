import React from "react";
import { Navigate } from "react-router-dom";
import checkAuth from "../util/Authentication";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
