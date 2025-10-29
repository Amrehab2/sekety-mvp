import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [summary, setSummary] = useState({});
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getSummary();
    getFeedback();
  }, []);

  const getSummary = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/admin/summary");
    setSummary(res.data);
  };

  const getFeedback = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/feedback");
    setFeedback(res.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-100 p-4 rounded">Trips: {summary.total_trips}</div>
        <div className="bg-green-100 p-4 rounded">Feedback: {summary.total_feedback}</div>
        <div className="bg-yellow-100 p-4 rounded">Avg Rating: {summary.average_rating || "–"}</div>
      </div>
      <h3 className="font-bold mt-6 mb-2">Recent Feedback</h3>
      <ul className="space-y-2">
        {feedback.map((f) => (
          <li key={f.id} className="border p-2 rounded bg-white">
            <strong>{f.user_name}</strong>: {f.comment} ⭐{f.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
