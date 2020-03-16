<template>
<div class="sencemap">
  <div id="senceview" v-if="show"></div>
  <div id="threeview" v-if="!show"></div>
</div>

</template>

<script>
import { loadModules } from "esri-loader";
import { doMeshLayer } from "./sence.js"

const OPTION = {
  url:
    "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js"
};

const luxi_url="http://10.36.213.3/server/rest/services/Hosted/luxidao_origin/SceneServer"

export default {
  data() {
    return {
      show:true
    };
  },
  async mounted(){
     await this.init()
  },
  methods: {
    init() {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(
          [
            "esri/WebScene",
            "esri/views/SceneView",
            "esri/config",
            "esri/widgets/Popup"
          ],
          OPTION
        )
          .then(([WebScene, SceneView, esriConfig, Popup]) => {
            esriConfig.portalUrl = "http://services.wzmap.gov.cn/portal";
            that.map = new WebScene({
              id:'threeLayer',
              portalItem: {
                id: "4d4273e2d2874b34bb2262f6fd5c7115"
              },
            });

            that.sceneview = new SceneView({
              map: that.map,
              container: "senceview"
            });

            resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
      async switchSenceLayer(val){
    if(val ==0){
      this.show=true
      await this.init()
    }
    if(val ==1){
      this.show=false
      await doMeshLayer(this,{id:"MeshLayer",url:luxi_url})
    }
  }
  },
};
</script>

<style>
.sencemap{
    height: 100%;
  width: 100%;
}

#senceview {
  height: 100%;
  width: 100%;
}
#threeview{
    height: 100%;
  width: 100%;
}
</style>