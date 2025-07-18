import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
// CDN hosted assets
defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/3.2.1/assets"
});

// Mount the app
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
