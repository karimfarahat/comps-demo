import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";
// get root el
const el = document.getElementById("root");

// give control to ReactDOM
const root = ReactDOM.createRoot(el);

// render app in root
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
