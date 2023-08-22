import ReactDOM from 'react-dom'
import React from 'react'
import { StrictMode } from "react";
import TripPlanner from './components/TripPlanner';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <TripPlanner/>
  </StrictMode>,
  rootElement
);