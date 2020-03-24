<template>
  <div class="sencemap">
    <div id="baseview" v-if="show==2"></div>
    <div id="senceview" v-if="show==0"></div>
    <div id="threeview" v-if="show==1"></div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
import { doMeshLayer, dobaseImageLayer } from "./sence.js";
import { baseurl, dataurl, yxurl,lgwgurl } from "../../../config/config";

const OPTION = {
  url:
    "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js"
};

const luxi_url =
  "http://10.36.213.3/server/rest/services/Hosted/luxidao_origin/SceneServer";

export default {
  data() {
    return {
      show: 0
    };
  },
  async mounted() {
    await this.init();
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
              id: "threeLayer",
              portalItem: {
                id: "4d4273e2d2874b34bb2262f6fd5c7115"
              }
            });
            //
            // console.log(that.map.allLayers)

            var template = {
              title: "房屋信息",
              content: `<div class="template">
              <div class="template_contnet">
          <ul><li>出租人：李明</li>
          <li>承租人：王刚</li>
          <li>电话联系：13745983567</li>
          <li>户籍地：李明</li>
          </ul>
          </div>  
          <div class="template_img"><img src="../../../static/images/ecode.png"></img></div>
          </div> `
            };
            // "170d2772d7a-layer-2"
            that.map.when(function() {
              that.map.layers.items.forEach(item => {
                if (item.id == "170d2772d7a-layer-2") {
                  item.popupTemplate = template;
                }
              });
            });

            that.sceneview = new SceneView({
              map: that.map,
              container: "senceview",
              camera: {
                position: {
                  x: 120.54914499,
                  y: 27.568205,
                  z: 50000
                },
                tilt: 0,
                heading: 0
              }
            });

            that.sceneview.ui.components = [];
            // that.sceneview.ui.remove('zoom')//清除放大缩小按钮
            // that.sceneview.ui.remove('attribution')//清楚底部powered by ESR

            resolve(true);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    /**
     * show
     * 2 基础地图
     * 0 白模
     * 1 倾斜三维
     * 
     * val 0 1 三维白模 三维倾斜
     * val 2 3 4 基础 大数据 影像
     * val 5 社区网格
     */
    async switchSenceLayer(val) {
      if (val == 0) {
        this.show = 0;
        await this.init();
      }
      if (val == 1) {
        this.show = 1;
        await doMeshLayer(this, { id: "MeshLayer", url: luxi_url });
      }
      if (val == 2) {
        this.show = 2;
        console.log("baseLayer");
        // await dobaseVectorLayer(this, { id: "baseLayer", url: baseurl });
      }
      if (val == 3) {
        this.show = 2;
        console.log("dataLayer");
        // await dobaseVectorLayer(this, { id: "dataLayer", url: dataurl });
      }
      if (val == 4) {
        this.show = 2;
      }
      if(val ==5){
        this.show = 0
        console.log("this数据",this)
        await dobaseImageLayer(this, { id: "gridLayer", url: lgwgurl });
      }
    }
  }
};
</script>

<style>
.sencemap {
  height: 100%;
  width: 100%;
}

#baseview {
  height: 100%;
  width: 100%;
}
#senceview {
  height: 100%;
  width: 100%;
}
#threeview {
  height: 100%;
  width: 100%;
}
</style>