import { useEffect, useState } from "react";
import "./App.css";
import ArcGISMap from "./ArcGISMap";
import RelatedFeaturesList from "./RelatedFeaturesList";

const App = () => {
  const [features, setFeatures] = useState([]);

  function handleChange(results) {
    setFeatures(results);
  }

  return (
    <calcite-shell>
      <div className="grid-container">
        <calcite-panel
          id="map-panel"
          className="grid-map"
          description="Food Scraps Drop off Locations"
        >
          <ArcGISMap handleChange={handleChange} />
        </calcite-panel>
        <calcite-panel className="grid-panel" id="panel">
          <RelatedFeaturesList features={features} />
        </calcite-panel>
      </div>
    </calcite-shell>
  );
}

export default App;