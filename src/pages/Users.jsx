import React from "react";
import { Link } from "react-router-dom";

const users = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Smith" },
    { id: "3", name: "Charlie Lee" },
];

export default function Users() {
    return (
        <div>
            <h1>Users</h1>
            <div className="grid">
                {users.map((u) => (
                    <Link key={u.id} to={u.id} className="card-link">
                        <div className="card small">
                            <div className="card-title">{u.name}</div>
                            <div className="card-sub">View profile →</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
