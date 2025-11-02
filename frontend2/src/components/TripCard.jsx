import React from "react";

export default function TripCard({ trip }) {
    return (
        <div className="border rounded p-3 shadow-sm bg-white">
            <h3 className="font-bold">{trip.origin} ➜ {trip.destination}</h3>
            <p>Fare: {trip.fare} EGP</p>
            <p>Departure: {trip.departure_time}</p>
            {trip.station && <p>Station: {trip.station}</p>}
        </div>
    );
}
