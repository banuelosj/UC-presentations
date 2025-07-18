const RelatedFeaturesList = ({ features }) => {

  function displayFeatureListItems(features) {
    const featuresList = features.map((feature) => {
      return (
        <calcite-card key={feature.attributes["SiteName"]}>
          <span slot="heading">{feature.attributes["NTAName"]}</span>
          <span slot="description">{feature.attributes["SiteName"]}</span>
          <span slot="description">{feature.attributes["Day_Hours"]}</span>
        </calcite-card>
      );
    });
    return featuresList;
  }

  return (
    <calcite-list>
      {displayFeatureListItems(features)}
    </calcite-list>
  )
};

export default RelatedFeaturesList;