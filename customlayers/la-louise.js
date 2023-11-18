const image = new ol.style.Circle({
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({ color: "red", width: 1 }),
});

const styles = {
  Point: new ol.style.Style({
    image: image,
  }),
  LineString: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "green",
      width: 10,
    }),
  }),
};

const styleFunction = function (feature) {
  return styles[feature.getGeometry().getType()];
};

const layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "data/2021-08-northabout-clean.geojson",
  }),
});

const source = layer.getSource();
source.on("featuresloadend", function () {
  const features = source.getFeatures();
  const points = features.map((feature) => {
    const geometry = feature.getGeometry();
    const coordinates = geometry.getCoordinates();
    const properties = feature.getProperties();

    return { coordinates, datetime: properties.Datetime };
  });

  const orderPoints = points.sort(function (a, b) {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  const test = orderPoints.map((newObject) => {
    return newObject.coordinates;
  });

  const line = new ol.Feature({
    geometry: new ol.geom.LineString(test),
  });

  source.addFeature(line);
});

const newLayer = new ol.layer.Vector({
  source: source,
  style: styleFunction,
});

new CustomLayer("la-louise", newLayer);
