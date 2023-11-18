/* const layer = new ol.layer.Image({
  extent: [-12.030029, 39.722768, 14.337158, 52.387963],
  source: new ol.source.ImageWMS({
    url: "https://services.data.shom.fr/ncwms2/cached_wms",
    params: {
      SERVICE: "WMS",
      VERSION: "1.3.0",
      REQUEST: "GetMap",
      FORMAT: "image/png",
      TRANSPARENT: "true",
      LAYERS: "HYDRODYN-SURF_HYCOM3D-SURF_R1000_MANGASC/salinity",
      BBOX: "-1252344.271424327,5009377.085697312,6.984919309616089e-10,6261721.35712164",
      TIME: "2023-11-18T21:00:00.000Z",
      STYLES: "default-scalar/salinite",
      COLORSCALERANGE: "33,39",
      ABOVEMAXCOLOR: "extend",
      BELOWMINCOLOR: "extend",
      NUMCONTOURS: "10",
      NUMCOLORBANDS: "30",
      WIDTH: "512",
      HEIGHT: "512",
    },
    ratio: 1,
    serverType: "geoserver",
  }),
}); */

/* const layer = new ol.layer.Image({
  extent: [-13884991, 2870341, -7455066, 6338219],
  source: new ol.source.ImageWMS({
    url: "https://ahocevar.com/geoserver/wms",
    params: { LAYERS: "topp:states" },
    ratio: 1,
    serverType: "geoserver",
  }),
}); */

/*const raster = new TileLayer({
  source: new XYZ({
    attributions: attributions,
    url: "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" + key,
    maxZoom: 20,
  }),
}); */

/* var projection = ol.proj.get("EPSG:3857");
var origin = [-1000000, 10000000];
var resolutions = [
  8960, 4480, 2240, 1120, 560, 280, 140, 70, 28, 14, 7, 2.8, 1.4, 0.7, 0.28, 0.14, 0.07,
];
var key = "hucvn5h49t93kbsf4dcgcoig";
var matrixIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var urlTemplate =
  "https://services.data.shom.fr/" +
  key +
  "/wmts?layer=RASTER_MARINE_3857_WMTS&style=normal&tilematrixset=3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix={TileMatrix}&TileCol={TileCol}&TileRow={TileRow}";
var layer = new ol.layer.Tile({
  source: new ol.source.WMTS({
    url: urlTemplate,
    requestEncoding: "REST",
    projection: projection,
    tileGrid: new ol.tilegrid.WMTS({
      origin: origin,
      resolutions: resolutions,
      matrixIds: matrixIds,
    }),
  }),
}); */

var key = "hucvn5h49t93kbsf4dcgcoig";

var urlTemplate =
  "https://services.data.shom.fr/hucvn5h49t93kbsf4dcgcoig/wmts?VERSION=1.0.0&REQUEST=GetTile&SERVICE=WMTS&FORMAT=image/png&LAYER=RASTER_MARINE_3857_WMTS&TILEMATRIXSET=3857&STYLE=normal&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";

var layer = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: urlTemplate,
  }),
});

/*

<theme name="Donnée Océanographie">
            <layer
                id="salinity"
                name="Salinity"
                url="customlayers/salinity-shom.js"
                type="customlayer"
                visible="true"
                />
        </theme> */

new CustomLayer("salinity", layer);
