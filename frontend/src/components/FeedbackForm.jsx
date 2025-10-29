import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [msg, setMsg] = useState("");

  const submitFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/feedback", {
        user_name: name,
        comment,
        rating: parseInt(rating),
      });
      setMsg("Thank you for your feedback ✅");
      setName(""); setComment(""); setRating(5);
    } catch {
      setMsg("Error submitting feedback");
    }
  };

  return (
    <form onSubmit={submitFeedback} className="bg-white p-4 rounded shadow mt-4">
      <h2 className="font-bold mb-2">Send Feedback</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Your name"
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Your comment"
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)} className="border p-2 w-full mb-2">
        {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <button className="bg-blue-600 text-white px-3 py-1 rounded">Submit</button>
      {msg && <p className="mt-2 text-green-600">{msg}</p>}
    </form>
  );
}
