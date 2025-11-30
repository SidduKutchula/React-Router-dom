import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Very small demo auth (replace with real auth)
const fakeAuth = {
    isAuthenticated: false,
    // To test quickly in the browser console: window.__auth = true
};

export default function ProtectedRoute({ children }) {
    const location = useLocation();
    const isAuth = !!(fakeAuth.isAuthenticated || window.__auth);

    if (!isAuth) {
        // redirect to login and preserve the page the user tried to visit
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
