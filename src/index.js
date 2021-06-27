import ReactDOM from 'react-dom'
import React from 'react'
import Counter from './Counter'
import { StrictMode } from "react";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
     <Counter/>
  </StrictMode>,
  rootElement
);