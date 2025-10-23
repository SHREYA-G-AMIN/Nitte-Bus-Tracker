import React from "react";
import "../styles/SlideMenu.css";

const SlideMenu = () => {
  return (
    <div className="slide-menu" aria-hidden="false">
      <div className="slide-tab">Menu</div>
      <div className="slide-content">
        <a href="/" className="slide-link">Home</a>
        <a href="/routes" className="slide-link">Bus Routes</a>
        <a href="/timetable" className="slide-link">Timetable</a>
        <a href="/about" className="slide-link">About</a>
      </div>
    </div>
  );
};

export default SlideMenu;
