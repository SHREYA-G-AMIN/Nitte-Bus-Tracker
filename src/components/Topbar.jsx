import React, { useEffect, useState, useContext } from "react";
import "../styles/Topbar.css";
import nitteLogo from "../assets/images/nitte-logo.png";
import { AppUIContext } from '../context/AppUIContext';

const Topbar = () => {
  const { 
    buses, 
    searchText, 
    setSearchText, 
    filterStatus, 
    setFilterStatus, 
    nearestStop, 
    setNearestStop,
    allStops 
  } = useContext(AppUIContext);

  // Filter stops based on search text
  const [stopSearchText, setStopSearchText] = useState('');
  const filteredStops = allStops.filter(stop => 
    stop.toLowerCase().includes(stopSearchText.toLowerCase())
  );

  // Get the next departure time for a stop
  const getNextDeparture = (stopName) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const departures = buses
      .flatMap(bus => bus.stops
        .filter(stop => stop.name === stopName)
        .map(stop => ({
          time: stop.departure,
          busName: bus.name,
          minutes: parseInt(stop.departure.split(':')[0]) * 60 + parseInt(stop.departure.split(':')[1])
        }))
      )
      .sort((a, b) => a.minutes - b.minutes);

    const nextDeparture = departures.find(d => d.minutes > currentTime) || departures[0];
    return nextDeparture;
  };

  // Group buses by major routes
  const routeGroups = buses ? buses.reduce((groups, bus) => {
    const routeKey = `${bus.from} → ${bus.to}`;
    if (!groups[routeKey]) {
      groups[routeKey] = [];
    }
    groups[routeKey].push(bus);
    return groups;
  }, {}) : {};

  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      // if no stored preference, fallback to system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    // Apply theme attribute to html and body for maximum CSS selector coverage
    document.documentElement.setAttribute('data-theme', theme);
    try { document.body.setAttribute('data-theme', theme); } catch(e) {}
    try { localStorage.setItem('theme', theme); } catch(e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={nitteLogo} alt="Nitte Logo" className="nitte-logo" />
        <span className="brand-title">Nitte Campus</span>
      </div>
  <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen((s) => !s)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`controls search-container ${mobileOpen ? 'open' : ''}`}>
        {/* Search input - now properly connected to searchText state */}
        <div className="search-field">
          <input
            className="search-input"
            type="text"
            placeholder="Search bus name, from, or to... 🔍"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Filter by bus with enhanced route grouping */}
        <select 
          className="filter-btn" 
          value={filterStatus} 
          onChange={(e) => { 
            setFilterStatus(e.target.value); 
            // Clear search when selecting a specific bus
            if (e.target.value) setSearchText('');
            setMobileOpen(false); 
          }}
        >
          <option value="">All Buses 🚌</option>
          {buses && Object.entries(routeGroups).map(([route, groupBuses]) => (
            <optgroup key={route} label={route}>
              {groupBuses
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(bus => (
                  <option key={bus.busId} value={bus.busId}>
                    {bus.name} ({bus.departure})
                  </option>
                ))}
            </optgroup>
          ))}
        </select>

        {/* Nearest stop select with enhanced time info */}
        <select 
          className="nearest-stop-btn" 
          value={nearestStop} 
          onChange={(e) => { 
            setNearestStop(e.target.value);
            // Clear bus filter when selecting a stop
            if (e.target.value) setFilterStatus('');
            setMobileOpen(false); 
          }}
        >
          <option value="">Select Nearest Stop 🔘</option>
          {buses && [...new Set(buses.flatMap(b => b.stops.map(s => s.name)))].sort().map(stopName => {
            // Get all unique stops on this route
            const nextDeparture = getNextDeparture(stopName);
            const timeInfo = nextDeparture 
              ? ` (Next: ${nextDeparture.time} - ${nextDeparture.busName})`
              : '';
            
            return (
              <option 
                key={stopName}
                value={stopName}
                className={nextDeparture?.minutes < 30 ? 'upcoming-departure' : ''}
              >
                {stopName}{timeInfo}
              </option>
            );
          })}
        </select>

        <label className="switch" aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-checked={theme === 'dark'}
          />
          <span className="slider" />
          <span className="switch-label">{theme === 'dark' ? '🌙' : '☀️'}</span>
        </label>
      </div>
    </div>
  );
};

export default Topbar;

