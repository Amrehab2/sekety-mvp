import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching route:\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nTime: ${time}`);
        navigate("/"); // go back home for now
    };

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "5%",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h2 style={{ marginBottom: "1rem" }}>Find Your Route</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ margin: "10px" }}>
                    <label>From: </label>
                    <input
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="Enter starting point"
                        required
                    />
                </div>

                <div style={{ margin: "10px" }}>
                    <label>To: </label>
                    <input
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="Enter destination"
                        required
                    />
                </div>

                <div style={{ margin: "10px" }}>
                    <label>Date: </label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div style={{ margin: "10px" }}>
                    <label>Time: </label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: "10px 25px",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#28a745",
                        color: "white",
                        cursor: "pointer",
                        marginTop: "10px",
                    }}
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchPage;
