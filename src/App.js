import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BusDetailPage from "./pages/BusDetailPage";
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
