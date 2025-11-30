import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="card">
      <h1>User {userId}</h1>
      <p>This is a demo user detail page. Fetch real user data here.</p>

      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}
