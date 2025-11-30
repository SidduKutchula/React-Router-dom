import React from "react";
import banner from "../assets/banner.jpg"; // you can add your own image to src/assets

const stats = [
    { label: "Active Users", value: "4,382" },
    { label: "New Signups", value: "892" },
    { label: "Revenue", value: "₹24,500" },
    { label: "Growth", value: "12%" },
];

export default function Dashboard() {
    return (
        <div className="space">
            <div className="card banner">
                {/* If you don't have an image, comment the <img> and keep plain banner */}
                <img src={banner} alt="banner" className="banner-img" />
                <div className="banner-text">
                    <h2>Dashboard</h2>
                    <p>Summary of recent activity</p>
                </div>
            </div>

            <div className="grid stats">
                {stats.map((s) => (
                    <div key={s.label} className="card stat">
                        <div className="stat-label">{s.label}</div>
                        <div className="stat-value">{s.value}</div>
                    </div>
                ))}
            </div>

            <div className="card">
                <h3>Weekly performance</h3>
                <div className="chart-placeholder">
                    {/* Simple placeholder chart made with CSS bars */}
                    <div className="bars">
                        {[20, 35, 25, 45, 50, 40, 55].map((h, i) => (
                            <div key={i} className="bar" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
