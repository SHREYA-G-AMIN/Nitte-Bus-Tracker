import React, { createContext, useState, useEffect } from 'react';
import busesData from '../data/buses.json';

export const AppUIContext = createContext(null);

export const AppUIProvider = ({ children }) => {
  const [buses, setBuses] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [nearestStop, setNearestStop] = useState('');

  useEffect(() => {
    setBuses(busesData);
  }, []);

  const allStops = [...new Set(buses.flatMap(bus => bus.stops.map(s => s.name)))];

  return (
    <AppUIContext.Provider value={{ buses, setBuses, searchText, setSearchText, filterStatus, setFilterStatus, nearestStop, setNearestStop, allStops }}>
      {children}
    </AppUIContext.Provider>
  );
};
