import { loadModules } from "esri-loader";


export const doMeshLayer = (context, { url, id }) => {

  return new Promise((resolve, reject) => {
    loadModules(["esri/Map",
      "esri/layers/VectorTileLayer",
      "esri/layers/SceneLayer",
      "esri/layers/IntegratedMeshLayer",
      "esri/views/SceneView",]).then(([Map, VectorTileLayer, SceneLayer, IntegratedMeshLayer, SceneView]) => {
        const Meshlayer = new IntegratedMeshLayer({
          id: id,
          url: url,   //鹿西岛倾斜数据
          copyright: "VRICON"
        });

        //加载矢量切片
        const vecLayer = new VectorTileLayer({
          url:
            "http://10.36.213.24/server/rest/services/Hosted/dt_dsjdt/VectorTileServer",   //d洞头大数据分地图
        });

        context.map = new Map();

        context.map.add(vecLayer);
        context.map.add(Meshlayer);

        context.sceneview = new SceneView({
          container: "threeview",
          map: context.map,
          camera: {
            position: {
              x: 121.1676389800,
              y: 27.9834116000,
              z: 1600,
              spatialReference: {
                wkid: 4490
              }
            },
            tilt: 0,
            heading: 0
          }
        });


        context.sceneview.on("click", evt => {

          context.sceneview.popup.open({
            title: "房屋信息 ",
            location: evt.mapPoint // Set the location of the popup to the clicked location
          });

          context.sceneview.popup.content =
          `<div class="template">
          <div class="template_contnet">
      <ul><li>出租人：李明</li>
      <li>承租人：王刚</li>
      <li>电话联系：13745983567</li>
      <li>户籍地：李明</li>
      </ul>
      </div>  
      <div class="template_img"><img src="../../../static/images/ecode.png"></img></div>
      </div> `
        })
        context.sceneview.ui.components = [];

        resolve(true);
      }).catch()
  })
}

/**
 * 三维里面的二维底图
 * @param {*} context 
 * @param {*} { url, id } 
 */

export const dobaseImageLayer = (context, { url, id }) => {
  // if (context.map.findLayerById(id)) {
  //   context.map.findLayerById(id).visible = true
  //   context.map.findLayerById("dataLayer") && (context.map.findLayerById("dataLayer").visible = false);
  //   context.map.findLayerById("imgLayer") && (context.map.findLayerById("imgLayer").visible = false);
  //   return
  // }

  // that.map.layers.items
  return new Promise((resolve, reject) => {
    loadModules([
      "esri/layers/MapImageLayer",
      "esri/views/SceneView"]).then(([MapImageLayer, SceneView]) => {
        const option = { url, id };
        const imglayer = new MapImageLayer(option);
        context.map.layers.add(imglayer);

        // console.log(" context.map.layers",context.map.layers)

        // context.sceneview= 
        // context.view = new SceneView({
        //   container: 'baseview',
        //   map: context.map,
        //   // camera: {
        //   //   position: {
        //   //     x: 120,
        //   //     y: 27.99,
        //   //     z: 200,
        //   //     spatialReference: {
        //   //       wkid: 4326
        //   //     }
        //   //   },
        //   //   tilt: 84,
        //   //   heading: 85
        //   // }
        // })
        context.sceneview.ui.components = [];

        resolve(true);
      });
  });
};
