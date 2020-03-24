<template>
  <div class="mapbox">
    <div class="map" :id="mapId"></div>
  </div>
</template>

<script>
import Vue from "vue";
import mapboxgl from "mapbox-gl"
import {mapMutations,mapActions} from "vuex"

export default {
  name: "mapbox",
  props: ["styledata"],
  computed: {
    // ...mapState({
    //   config:config=>state.config
    // })
    config() {
      return this.$store.state.config;
    }
  },
  data() {
    return {
      mapId: Math.random()
        .toString(36)
        .substr(2)
    };
  },
  watch: {
    config() {
      this.setView();
    },
    styledata() {
      /* 不能直接将this.styledata赋给map。
        可能是这个js内部加入水印修改了this.styledata，
        而Vuex是禁止直接从外部修改的
      */
      const styledata = JSON.parse(JSON.stringify(this.styledata));
      this.map.setStyle(styledata, { diff: false });
    }
  },
   mounted() {
    this.fetchConfig()
    this.load().then(() => {
      this.init();
    });
  },
  // mounted(){
  //   this.init()
  // },
  methods: {
    ...mapActions(["fetchConfig"]),
    load() {
      return new Promise((resolve, reject) => {
        if (window.mapboxgl) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.setAttribute("src", "/lib/mapbox-gl.js");
        document.body.appendChild(script);

        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "/lib/mapbox-gl.css");

        document.head.appendChild(link);

        script.onload = resolve;
      });
    },
    init() {
      const { center, zoom, key, tdtcode } = this.getConfigView();

      this.map = new mapboxgl.Map({
        container: this.mapId,
        minZoom: 6,
        maxZoom: 18,
        zoom,
        center,
        renderWorldCopies: false,
        repaint: true,
        trackResize: true,
        attributionControl: false,
        transformRequest: (url, resourceType) => {
          if (resourceType === "Tile") {
            url += `&domain=${location.host}`;

            if (url.includes("{key}")) {
              return {
                url: url.replace("{key}", key)
              };
            }

            if (url.includes("{tdtcode}")) {
              return {
                url: url.replace("{tdtcode}", tdtcode)
              };
            }
          }
        }
      });
      console.log("this.map",this.map)

      this.map.addControl(
        new mapboxgl.NavigationControl({ visualizePitch: true }),
        "bottom-right"
      );
      this.mapbox = this.map;

      // this.$emit("init");
    },
    getConfigView() {
      const center = [
        (this.config && this.config.map_x) || 120,
        (this.config && this.config.map_y) || 30
      ];
      const zoom = (this.config && this.config.map_scale) || 7;
      const key =
        (this.config && this.config.map_server_key) ||
        "85b88ce10c15f390ee75bf571688b3b7";
      const tdtcode = (this.config && this.config.tdtCode) || "zhejiang";
      return { center, zoom, key, tdtcode };
    },
    setView() {
      if (!this.map) {
        return;
      }
      const { center, zoom, key, tdtcode } = this.getConfigView();
      this.map.easeTo({ center, zoom });
    }
  }
};
</script>

<style>
.mapbox {
  position: relative;
  width: 100%;
  height: 100%;

  }
  .map {
    width: 100%;
    height: 100%;
  }

  .mapboxgl-ctrl-bottom-right .mapboxgl-ctrl {
    margin: 0 10px 64px 0;
    float: right;
    box-shadow: 0 0 10px 2px rgba(31, 51, 73, 0.1);
  }
/* #map {
  height: 100%;
  width: 100%;
  background-color: aqua;
} */
</style>