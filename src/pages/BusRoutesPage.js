import React from "react";
import { useNavigate } from "react-router-dom";
import busesData from "../data/buses.json";
import "../styles/BusRoutesPage.css";
console.log("✅ BusRoutesPage mounted");

const BusRoutesPage = () => {
  const navigate = useNavigate();

  // Safety check to avoid blank screen if data fails
  if (!Array.isArray(busesData) || busesData.length === 0) {
    return (
      <div className="bus-routes-container">
        <div style={{
  background: 'lightblue',
  height: '100vh',
  color: 'black',
  fontSize: '24px',
  textAlign: 'center',
  paddingTop: '50px'
}}>
  ✅ Bus Routes Loaded
</div>

        <h2>No Bus Data Available</h2>
        <p>Please check if buses.json is properly placed in src/data/.</p>
      </div>
    );
  }

  return (
    <div className="bus-routes-container">
      <h2 className="page-title">🚌 All Bus Routes</h2>
      <p className="page-subtitle">
        View all campus bus routes and their destinations
      </p>

      <div className="routes-grid">
        {busesData.map((bus) => (
          <div
            key={bus.busId}
            className="route-card"
            onClick={() => navigate(`/bus/${bus.busId}`)}
          >
            <h3>{bus.name}</h3>
            <p>
              <strong>Route:</strong> {bus.from} → {bus.to}
            </p>
            <p>
              <strong>Total Stops:</strong> {bus.stops.length}
            </p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusRoutesPage;

