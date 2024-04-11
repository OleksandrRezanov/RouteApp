import React, {createContext, useState} from 'react';
import routesFromServer from './api/routes.json';

const RouteContext = createContext();

export const RouteProvider = ({children}) => {
  const [routes, setRoutes] = useState(routesFromServer);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const value = {selectedRoute, setSelectedRoute, routes, setRoutes};

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default RouteContext;
