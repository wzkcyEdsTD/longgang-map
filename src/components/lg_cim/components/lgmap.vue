<template>
  <div id="lgmap"></div>
</template>

<script>
import { loadModules } from "esri-loader";
import { dobaseVectorLayer, doDataVectorLayer, doImageLayer } from "./lgmap.js";

const OPTION = {
  url:
    "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js"
};

const baseurl =
  "https://services.wzmap.gov.cn/server/rest/services/Hosted/PC/VectorTileServer";
const dataurl =
  "http://services.wzmap.gov.cn/server/rest/services/Hosted/DSJ/VectorTileServer";
const yxurl =
  "https://services.wzmap.gov.cn/server/rest/services/TDT/YX_2018/MapServer/";

export default {
  name: "lgmap",
  data() {
    return {};
  },
  async mounted() {
    await this.createMap();
  },
  methods: {
    createMap() {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(
          ["esri/Map", "esri/views/MapView", "esri/layers/VectorTileLayer"],
          OPTION
        )
          .then(([Map, MapView, VectorTileLayer]) => {
            const baseLayer = new VectorTileLayer({
              id: "baseLayer",
              url: baseurl
            });

            that.map = new Map();
            that.map.add(baseLayer);

            that.view = new MapView({
              container: "lgmap",
              map: that.map,
              zoom: 10,
              center: [120.67819448808013, 28.039695289562555]
            });

            resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    async switchLayer(val) {
      if (val == 0) {
        await dobaseVectorLayer(this, { id: "baseLayer", url: baseurl });
      }
      if (val == 1) {
        await doDataVectorLayer(this, { id: "dataLayer", url: dataurl });
      }
      if (val == 2) {
        await doImageLayer(this, { id: "imgLayer", url: yxurl });
      }
    }
  }
};
</script>

<style>
@import url("https://js.arcgis.com/4.14/esri/css/main.css");

#lgmap {
  height: 100%;
  width: 100%;
}
</style>