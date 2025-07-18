import RelationshipQuery from "@arcgis/core/rest/support/RelationshipQuery.js";

export async function getRelatedFeatures(layer, objectid) {
  const relationshipId = layer.relationships[0].id;

  const query = new RelationshipQuery({
    outFields: ["*"],
    num: 10,
    objectIds: [objectid],
    relationshipId,
    orderByFields: [`${layer.objectIdField} DESC`]
  });

  const queryResult = await layer.queryRelatedFeatures(query);
  const features = queryResult[objectid].features;
  return features;
}