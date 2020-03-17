<template>
  <div class="lg_container">
    <topTitle />
    <bottomBtn v-if="this.lgshow==1" />
    <threbottoBtn v-if="this.lgshow==2" />
    <div class="switch3">
      <ul>
       <li @click="Switch(1)" :class="{active:forceColor == 1}">二维地图</li>
      <li @click="Switch(2)" :class="{active:forceColor == 2}">三维地图</li>
      </ul>
    </div>
    <lgmap v-if="this.lgshow==1" ref="lgArcgis"/>
    <sence v-if="this.lgshow==2" ref="lgSence"/>
  </div>
</template>

<script>
import lgmap from "./components/lgmap.vue";
import topTitle from "../common/topTitle"
import bottomBtn from '../common/bottomButton'
import sence from "./components/sence.vue"
import threbottoBtn from "../common/threebottomButton"

export default {
  name: "lgCim",
  data() {
    return {
      forceColor:2,
      lgshow:2
    };
  },
  components: {
    lgmap,
    topTitle,
    bottomBtn,
    sence,
    threbottoBtn
  },
  methods:{
    Switch(val){
      console.log(val)
      this.forceColor = val;
      this.lgshow =val
    }
  }
};
</script>

<style>
.lg_container{
 width: 100%;
    height: 100%;
}

.switch3 {
  z-index: 100;
  position: absolute;
  top: 20%;
  right: 10%;}

    .switch3 li {
      position: relative;
      height: 40px;
      line-height: 40px;
      list-style: none;
      float: left;
      background-color: #243968;
      border: 1px solid #05fff8;
      margin-left: 5px;
      padding: 0 10px;
      cursor: pointer;
      overflow: hidden;
      }


   .switch3 li:hover {
          background-color: #0754e2;
          color: #fff;
          cursor:pointer;
        }
      
    

</style>