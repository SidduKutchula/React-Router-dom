import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

/**
 * Simple responsive sidebar layout:
 * - sidebar visible on desktop (left)
 * - toggles on mobile
 */
export default function Layout() {
    const [open, setOpen] = useState(false);

    const links = [
        { to: "/", label: "Home", end: true },
        { to: "/dashboard", label: "Dashboard" },
        { to: "/users", label: "Users" },
        { to: "/about", label: "About" },
    ];

    return (
        <div className="app">
            <aside className={`sidebar ${open ? "open" : ""}`}>
                <div className="brand">
                    <div className="logo">R</div>
                    <div>
                        <div className="brand-title">MyApp</div>
                        <div className="brand-sub">client routing</div>
                    </div>
                </div>

                <nav className="nav">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.end}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="avatar">S</div>
                    <div className="sidebar-meta">
                        <div className="name">Siddu</div>
                        <div className="role">Member</div>
                    </div>
                </div>
            </aside>

            <div className="main">
                <header className="topbar">
                    <button className="menu-btn" onClick={() => setOpen((s) => !s)}>
                        ☰
                    </button>
                    <div className="topbar-title">Simple Dashboard</div>
                </header>

                <main className="content">
                    <Outlet />
                </main>

                <footer className="footer">© {new Date().getFullYear()} MyApp</footer>
            </div>
        </div>
    );
}
