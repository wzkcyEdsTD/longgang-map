import { loadModules } from "esri-loader";


export const dobaseVectorLayer = (context, { url, id }) => {
  if (context.map.findLayerById(id)) {
    context.map.findLayerById(id).visible = true
    context.map.findLayerById("dataLayer") && (context.map.findLayerById("dataLayer").visible = false);
    context.map.findLayerById("imgLayer") && (context.map.findLayerById("imgLayer").visible = false);
    return
  }
  return new Promise((resolve, reject) => {
    loadModules(["esri/layers/VectorTileLayer"]).then(([VectorTileLayer]) => {
      const option = { url, id };
      const baseVector = new VectorTileLayer(option);
      context.map.add(baseVector, 1);
      resolve(true);
    });
  });
};


export const doDataVectorLayer = (context, { url, id }) => {
  if (context.map.findLayerById(id)) {
    context.map.findLayerById(id).visible = true
    context.map.findLayerById("baseLayer") && (context.map.findLayerById("baseLayer").visible = false);
    context.map.findLayerById("imgLayer") && (context.map.findLayerById("imgLayer").visible = false);
    return
  }
  return new Promise((resolve, reject) => {
    loadModules(["esri/layers/VectorTileLayer"]).then(([VectorTileLayer]) => {
      const option = { url, id };
      const dataVector = new VectorTileLayer(option);
      context.map.add(dataVector, 2);
      resolve(true);
    });
  });
};

export const doImageLayer = (context, { url, id }) => {
  if (context.map.findLayerById(id)) {
    context.map.findLayerById(id).visible = true
    context.map.findLayerById("baseLayer") && (context.map.findLayerById("baseLayer").visible = false);
    context.map.findLayerById("dataLayer") && (context.map.findLayerById("dataLayer").visible = false);
    return
  }
  return new Promise((resolve, reject) => {
    loadModules(["esri/layers/TileLayer"]).then(([TileLayer]) => {
      const option = { url, id, opacity: 1 };
      const img = new TileLayer(option);
      context.map.add(img, 3);
      resolve(true);
    });
  });
};


