import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SlideMenu.css";

const SlideMenu = () => {
  const location = useLocation();

  return (
    <div className="slide-menu" aria-hidden="false">
      <div className="slide-tab">☰ Menu</div>

      <div className="slide-content">
        <Link
          to="/"
          className={`slide-link ${location.pathname === "/" ? "active" : ""}`}
        >
          🏠 Home
        </Link>

        <Link
          to="/bus-routes"
          className={`slide-link ${
            location.pathname === "/bus-routes" ? "active" : ""
          }`}
        >
          🗺️ Bus Routes
        </Link>

        <Link
          to="/timetable"
          className={`slide-link ${
            location.pathname === "/timetable" ? "active" : ""
          }`}
        >
          ⏰ Timetable
        </Link>

        <Link
          to="/about"
          className={`slide-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          ℹ️ About
        </Link>
      </div>
    </div>
  );
};

export default SlideMenu;

