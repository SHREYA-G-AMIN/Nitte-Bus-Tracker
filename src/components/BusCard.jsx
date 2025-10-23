import React from "react";
import { Link } from "react-router-dom";
import "../styles/BusCard.css";

const BusCard = ({ bus, onClick }) => {
  return (
    <div
      className="bus-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className="bus-info">
        <h3>🚌 {bus.name}</h3>
        <p>From: {bus.from} → {bus.to}</p>
        <p>Travel Time: {bus.travelTime}</p>
        <div className="bus-times">
          <p>Departure: {bus.departure}</p>
          <p>Arrival: {bus.arrival}</p>
        </div>
        <div className="seats-info">
          <span>Seats: {bus.seatsAvailable}</span>
          <span className="view-details-btn" onClick={(e) => { e.stopPropagation(); onClick(); }}>
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusCard;
