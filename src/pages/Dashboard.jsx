import React from "react";
import { useNavigate } from "react-router-dom";
// Sidebar and Topbar are provided by Layout
import BusCard from "../components/BusCard";
import moment from "moment";
import { AppUIContext } from "../context/AppUIContext";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  // Use context instead of local state
  const { 
    buses, 
    searchText, 
    filterStatus, 
    nearestStop, 
    allStops 
  } = React.useContext(AppUIContext);

  // Handle clicking a bus card
 const handleBusClick = (busId) => {
  navigate(`/bus/${busId}`, { state: { nearestStop } });
};


  // Filter buses based on search, status, and nearest stop
  const filteredBuses = buses.filter((bus) => {
    // Search matches bus name, from, to, or any stop name
    const searchLower = searchText.toLowerCase();
    const matchesSearch = searchText === '' || 
      bus.from.toLowerCase().includes(searchLower) ||
      bus.to.toLowerCase().includes(searchLower) ||
      bus.name.toLowerCase().includes(searchLower) ||
      bus.stops.some(stop => stop.name.toLowerCase().includes(searchLower));

    // Filter by specific bus ID if selected
    const matchesStatus = !filterStatus || bus.busId === filterStatus;

    // Show only buses that stop at the selected nearest stop
    const matchesNearestStop = !nearestStop ||
      bus.stops.some(stop => stop.name === nearestStop);

    return matchesSearch && matchesStatus && matchesNearestStop;
  });

  // Sort buses by departure time at nearest stop
  const sortedBuses = [...filteredBuses].sort((a, b) => {
    if (!nearestStop) return 0; // No sorting if no nearest stop selected

    const aStop = a.stops.find((stop) => stop.name === nearestStop);
    const bStop = b.stops.find((stop) => stop.name === nearestStop);

    const aTime = moment(aStop?.departure, "HH:mm");
    const bTime = moment(bStop?.departure, "HH:mm");

    return aTime.diff(bTime);
  });

  return (
    <div>
      <header className="dashboard-header">
        <h2>Campus Bus Tracker</h2>
        <p className="dashboard-subtitle">Real-time bus schedules, stops, and availability</p>
      </header>

      <div className="bus-cards-grid">
        {sortedBuses.length > 0 ? (
          sortedBuses.map((bus) => (
            <BusCard key={bus.busId} bus={bus} onClick={() => handleBusClick(bus.busId)} />
          ))
        ) : (
          <p style={{ padding: "20px" }}>No buses found!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
