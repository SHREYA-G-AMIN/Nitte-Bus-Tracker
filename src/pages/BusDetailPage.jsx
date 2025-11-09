import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import busesData from "../data/buses.json";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLocation } from "react-router-dom";
import "../styles/BusDetail.css";


// Fix default marker icon issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const BusDetailPage = () => {
  const { busId } = useParams();
  const navigate = useNavigate();
const location = useLocation();
const nearestStop = location.state?.nearestStop || "";

  const bus = busesData.find((b) => b.busId === busId);

  if (!bus) {
    return <h2>Bus not found!</h2>;
  }

  // 🗺 Map Section
<div style={{ height: "400px", margin: "20px 0", borderRadius: "10px", overflow: "hidden" }}>
  <MapContainer
    center={[bus.mapCoordinates[0].lat, bus.mapCoordinates[0].lng]}
    zoom={12}
    style={{ height: "100%", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />

    {/* Draw polyline for bus route */}
    <Polyline
      positions={bus.mapCoordinates.map(coord => [coord.lat, coord.lng])}
      color="blue"
      weight={4}
    />

    {/* Stops */}
    {bus.mapCoordinates.map((coord, idx) => {
      const stop = bus.stops[idx];
      const isNearest = stop.name === nearestStop;

      return (
        <Marker
          key={idx}
          position={[coord.lat, coord.lng]}
          icon={
            new L.Icon({
              iconUrl: isNearest
                ? require("../assets/marker-icon-red.png")
                : require("leaflet/dist/images/marker-icon.png"),
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>{stop.name}</Popup>
        </Marker>
      );
    })}
  </MapContainer>
</div>

  return (
    <div className="bus-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h2>🚌 {bus.name}</h2>
      <p>
        Route: {bus.from} → {bus.to} | Total Stops: {bus.stops.length} | Travel Time: {bus.travelTime}
      </p>

      <div className="map-section">
        <MapContainer
          center={[bus.mapCoordinates[0].lat, bus.mapCoordinates[0].lng]}
          zoom={12}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline
            positions={bus.mapCoordinates.map(c => [c.lat, c.lng])}
            color="blue"
          />
          {bus.mapCoordinates.map((coord, idx) => (
            <Marker key={idx} position={[coord.lat, coord.lng]}>
              <Popup>{bus.stops[idx] ? bus.stops[idx].name : "Stop"}</Popup>
            </Marker>
          ))}
          
        </MapContainer>
      </div>

      <div className="timetable-section">
        <h3>🕒 Timetable</h3>
        <table>
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
    </div>
  );
};

export default BusDetailPage;
