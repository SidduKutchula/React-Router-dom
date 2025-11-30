import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="card">
            <h1>Welcome</h1>
            <p>This is a small demo of client-side routing using <strong>react-router-dom</strong>.</p>

            <div style={{ marginTop: 16 }}>
                <Link to="/dashboard" className="btn">Go to Dashboard</Link>
                <Link to="/users" className="btn ghost" style={{ marginLeft: 8 }}>Users</Link>
            </div>
        </div>
    );
}
