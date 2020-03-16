import { loadModules } from "esri-loader";


export const doMeshLayer = (context, { url, id }) => {

    return new Promise((resolve, reject) => {
        loadModules(["esri/Map",
            "esri/layers/VectorTileLayer",
            "esri/layers/SceneLayer",
            "esri/layers/IntegratedMeshLayer",
            "esri/views/SceneView",]).then(([Map, VectorTileLayer, SceneLayer, IntegratedMeshLayer,SceneView]) => {
                const Meshlayer = new IntegratedMeshLayer({
                    id:id,
                    url: url,   //鹿西岛倾斜数据
                    copyright: "VRICON"
                });

                //加载矢量切片
                const vecLayer = new VectorTileLayer({
                    url:
                        "http://10.36.213.24/server/rest/services/Hosted/dt_dsjdt/VectorTileServer"    //d洞头大数据分地图
                });

                context.map = new Map();

                context.map.add(vecLayer);
                context.map.add(Meshlayer);

                context.sceneview = new SceneView({
                    container: "threeview",
                    map: context.map,
                    camera: {
                      position: {
                        x: 121.1656379700,
                        y: 27.9834116000,
                        z: 200,
                        spatialReference: {
                          wkid: 4490
                        }
                      },
                      tilt: 84,
                      heading: 85
                    }
                  });

                  context.sceneview.on("click",evt=>{
                      console.log(evt)
                  })

                resolve(true);
            }).catch()
    })
}
