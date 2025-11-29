import React from 'react'
import { Navigate } from 'react-router-dom';

const SuperAdminProtectRoute = () => {
  const token = localStorage.getItem("authtoken");
    const role = localStorage.getItem("userrole");
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    if (role !== "superadmin") {
        return <Navigate to="/not-authorized" />;
    }
    return children;
}

export default SuperAdminProtectRoute
