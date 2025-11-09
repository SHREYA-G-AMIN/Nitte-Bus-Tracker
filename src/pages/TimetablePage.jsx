import React from 'react';
import busesData from "../data/buses.json";
import '../styles/TimetablePage.css';

const TimetablePage = () => {
  return (
    <div className="timetable-container">
      <h2 className="page-title">🕒 Bus Timetable</h2>
      <p className="page-subtitle">View detailed arrival and departure timings for all campus buses</p>

      <div className="timetable-list">
        {busesData.map((bus) => (
          <div key={bus.busId} className="timetable-card">
            <h3 className="bus-title">{bus.name}</h3>
            <p className="bus-route">Route: {bus.from} → {bus.to} | Total Stops: {bus.stops.length}</p>

            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Stop No</th>
                  <th>Stop Name</th>
                  <th>Arrival</th>
                  <th>Departure</th>
                </tr>
              </thead>
              <tbody>
                {bus.stops.map((stop) => (
                  <tr key={stop.stopNo}>
                    <td>{stop.stopNo}</td>
                    <td>{stop.name}</td>
                    <td>{stop.arrival}</td>
                    <td>{stop.departure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetablePage;
