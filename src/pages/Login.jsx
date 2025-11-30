import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const login = () => {
        // quick demo login — set window.__auth = true in dev console or use this button
        window.__auth = true;
        navigate(from, { replace: true });
    };

    return (
        <div className="card" style={{ maxWidth: 420 }}>
            <h1>Login</h1>
            <p>Click the button to simulate login and continue to the page you wanted.</p>
            <button className="btn" onClick={login}>Sign in (demo)</button>
        </div>
    );
}
