import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>🚍 Nitte Bus Tracker</h1>
        <p>Smart, real-time bus tracking system for campus transport.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>🎯 Project Overview – Nitte Bus Tracker</h2>
          <p>
            The <strong>Nitte Bus Tracker</strong> is a web-based application designed to help students and staff easily access information about campus bus routes and schedules. It provides a visual representation of each route, showing the path between the starting and destination points, along with detailed stop information and timetables.
<br />
Built with a clean and responsive interface, the system aims to make campus transportation more organized, accessible, and user-friendly, helping users quickly find the right bus and route information anytime.
          </p>
        </section>

        <section className="about-section">
          <h2>💡 Key Features</h2>
          <ul>
            <li>🗺️ <strong>Route Visualization:</strong> Displays bus routes on a map with start and end points for clear travel paths.</li>
            <li>🚏 <strong>Stop Details:</strong> View detailed stop information for each bus, including timings and route flow.</li>
            <li>⏰ <strong>Interactive Timetable:</strong> Check departure and arrival times for all buses in a simple, accessible layout.</li>
            <li>💻 <strong>Modern & Responsive UI:</strong> A clean, glass-style interface that works seamlessly across desktop and mobile devices.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🧠 Technologies Used</h2>
          <div className="tech-stack">
            <span>React.js</span>
            <span>Leaflet.js</span>
            <span>React Router</span>
            <span>JSON Data</span>
            <span>CSS3</span>
          </div>
        </section>

        <section className="about-section">
          <h2>👥 Our Team</h2>
          <p>
            This project was built by an enthusiastic team of students from
            <strong> NMAMIT</strong> as part of the{" "}
            <strong>Front-End Web Development Mini Project</strong>.
          </p>
          <ul className="team-list">
            <li>⚙️ Ishta P Jain </li>
            <li>⚙️ Melisha Viola Dsouza</li>
            <li>⚙️ Shreya G Amin</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>📬 Contact Us</h2>
          <p>
            Have suggestions or feedback? Reach us at: <br />
            <a
              href="mailto:nnm24cs352@nmamit.in"
              className="email-link"
            >
              nnm24cs352@nmamit.in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

