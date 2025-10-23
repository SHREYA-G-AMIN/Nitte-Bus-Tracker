import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <aside 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="sidebar-toggle">
        <span className="toggle-icon">≡</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <span className="icon">🏠</span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/routes" className={location.pathname === "/routes" ? "active" : ""}>
              <span className="icon">🚌</span>
              <span className="text">Bus Routes</span>
            </Link>
          </li>
          <li>
            <Link to="/timetable" className={location.pathname === "/timetable" ? "active" : ""}>
              <span className="icon">🕒</span>
              <span className="text">Timetable View</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              <span className="icon">ℹ️</span>
              <span className="text">About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
