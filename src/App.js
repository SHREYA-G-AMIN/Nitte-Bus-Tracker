import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BusDetailPage from "./pages/BusDetailPage";
import BusRoutesPage from "./pages/BusRoutesPage";
import TimetablePage from "./pages/TimetablePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout";
import SlideMenu from "./components/SlideMenu";

function App() {
  return (
    <div className="app-root">
      <SlideMenu />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="bus/:busId" element={<BusDetailPage />} />
          <Route path="bus-routes" element={<BusRoutesPage />} />
          <Route path="timetable" element={<TimetablePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
