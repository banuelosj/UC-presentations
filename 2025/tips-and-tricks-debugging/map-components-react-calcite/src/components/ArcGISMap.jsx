import { useState } from "react";

// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "@arcgis/map-components/components/arcgis-editor";
import "@arcgis/map-components/components/arcgis-expand";

// functions import
import { getRelatedFeatures } from "../functions/get-related-features";

//{/* <arcgis-map item-id="02b37471d5d84cacbebcccd785460e94" onarcgisViewReadyChange={handleViewReady}> */}

const ArcGISMap = ({ handleChange }) => {
  function handleViewReady(event) {
    const viewElement = event.target;
    const layers = viewElement.map.layers;
    const countiesLayer = layers.find((layer) => layer.title === "counties");
    setSearchSource(countiesLayer, ["NAME", "GlobalID"]);
  }

  async function setSearchSource(searchLayer, fields) {
    const search = document.querySelector("arcgis-search");
    search.sources = [
      {
        layer: searchLayer,
        searchFields: [fields[0]],
        displayField: fields[0],
        exactMatch: false,
        outFields: fields,
        name: "Counties",
        placeholder: "example: Bronx"
      }
    ];
  }

  async function handleSearchComplete(event) {
    const { results } = event.detail.results[0];
    const layer = results[0].feature.layer;
    const oid = results[0].feature.attributes[layer.objectIdField];
    const features = await getRelatedFeatures(layer, oid);
    handleChange(features);
    //console.log("features: ", features);
  }

  return (
    <arcgis-map item-id="0974d9c949d9478597a8e90312dd0f7e" onarcgisViewReadyChange={handleViewReady}>
      <arcgis-zoom position="top-left" />
      <arcgis-search 
        position="top-right"
        all-placeholder="Search for a county"
        include-default-sources-disabled
        onarcgisSearchComplete={handleSearchComplete}
      />
      <arcgis-expand 
        position="bottom-left" 
        mode="floating"
      >
        <arcgis-legend />
      </arcgis-expand>
    </arcgis-map>
  )
};

export default ArcGISMap;