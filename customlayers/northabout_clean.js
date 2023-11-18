// {
//   mviewer.customLayers.northabout_clean = {};
//   mviewer.customLayers.northabout_clean.layer = new ol.layer.Vector({
//     source: new ol.source.Vector({
//       url: "data/2021-08-northabout-clean.geojson",
//       format: new ol.format.GeoJSON(),
//     }),
//     style: new ol.style.Style({
//       image: new ol.style.Circle({
//         fill: new ol.style.Fill({
//           color: "rgba(0, 118, 117,1.0)",
//         }),
//         stroke: new ol.style.Stroke({
//           color: "#ffffff",
//           width: 4,
//         }),
//         radius: 9,
//       }),
//     }),
//   });
//   mviewer.customLayers.northabout_clean.handle = false;
// }

console.log(window);

const layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "data/2021-11-capablanca-clean.geojson",
  }),
});

style: new ol.style.Style({
  image: new ol.style.Circle({
    fill: new ol.style.Fill({
      color: "red",
    }),
    stroke: new ol.style.Stroke({
      color: "rgba(255,0,0,0.2)",
      width: 4,
    }),
    radius: 9,
  }),
}),
  console.log(mviewer);

new CustomLayer("heatmap2", layer);
