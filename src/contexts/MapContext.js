import * as React from "react";
import { createContext, useContext, useReducer } from "react";
import locations from "#data/data.json";

// Create a context to hold the state
const MapContext = createContext();

// Define the initial state
const currentMonth = new Date().getMonth();
const currentLocation = locations[currentMonth];
const initialState = {
  location: currentLocation,
};

// Define the reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "RESET_LOCATION":
      return {
        ...initialState,
      };
    case "SET_LOCATION":
      return {
        ...state,
        location: locations[action.payload.month],
      };
    default:
      return state;
  }
};

// Create a component that will provide the context
// MapProvider takes in an argument called children
export const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // In this return value, we passed-in children as the CONSUMER of the PROVIDER
  // This will able children components to access the data inside the context
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};

// Create a function that invokes the context
export const useMapContext = () => {
  return useContext(MapContext);
};
