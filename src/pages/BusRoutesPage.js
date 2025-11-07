import React from "react";
import { useNavigate } from "react-router-dom";
import busesData from "../data/buses.json";
import "../styles/BusRoutesPage.css"; // we’ll add a simple CSS next

const BusRoutesPage = () => {
  const navigate = useNavigate();

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

