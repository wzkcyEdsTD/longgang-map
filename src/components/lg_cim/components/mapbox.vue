<template></template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "mapbox",
  mounted() {},
  methods: {
    init() {
      this.mbgl.accessToken = "your token";

      //地图容器 底图 
      let map = new this.mbgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        style:{
            sources:{
                tiles:''//矢量切片的服务地址
            }
        },
        center: [-87.61694, 41.86625],
        zoom: 15.99,
        pitch: 40, //倾斜
        bearing: 1 //鼠标右键旋转
        //sprite: 用于渲染背景图案，填充图片，线条图案，点图标的图片url地址
        //glyphs： 字体库，字体样式资源url地址
        // layers:[] 需要绘制的图层，将按照顺序进行绘制
      });

    //layer的type的属性,background,fill,line,symbol,raster,circle,fill-extrusion
    
        //显示数据源
      map.on("load", function() {
        map.addLayer({
          id: "room-extrusion",
          type: "fill-extrusion",
          source: {
            type: "geojson",
            data:
              "https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson"
          },
          paint: {
            "fill-extrusion-color": ["get", "color"],
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "base_height"],
            "fill-extrusion-opacity": 0.6
          }
        });
      });
    }
  }
};
</script>

<style>
</style>