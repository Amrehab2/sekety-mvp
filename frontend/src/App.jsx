import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20%",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Sekety — سكتك سالكة</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Smart Mobility Powered by Data
      </p>
      <button
        style={{
          padding: "10px 25px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => navigate("/search")}
      >
        Search Route
      </button>
    </div>
  );
}

export default App;
