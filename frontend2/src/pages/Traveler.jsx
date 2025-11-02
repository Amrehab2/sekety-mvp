import React, { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "../components/TripCard";
import FeedbackForm from "../components/FeedbackForm";

export default function Traveler() {
  const [trips, setTrips] = useState([]);

  useEffect(() => { fetchTrips(); }, []);

  const fetchTrips = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/trips");
    setTrips(res.data);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Available Trips</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {trips.map((t) => <TripCard key={t.id} trip={t} />)}
      </div>
      <FeedbackForm />
    </div>
  );
}
