import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SlideMenu from "./SlideMenu"; // ✅ Add this
import { AppUIProvider } from "../context/AppUIContext";
import "../styles/Dashboard.css";

const Layout = () => {
  return (
    <AppUIProvider>
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <Topbar />
          <Outlet />
        </main>
        <SlideMenu /> {/* ✅ Moved here */}
      </div>
    </AppUIProvider>
  );
};

export default Layout;
