<template>
  <div class="bottombtn">
    <ul >
      <li @click="doSwitch(0)" :class="{active:forceColor == 0}">基础版</li>
      <li @click="doSwitch(1)" :class="{active:forceColor == 1}">大数据</li>
      <li @click="doSwitch(2)" :class="{active:forceColor == 2}">影像</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'bottomBtn',
  data() {
    return {
      forceColor: 0
    };
  },
  methods: {
    doSwitch(val) {
      this.forceColor = val;
      this.$parent.$refs.lgArcgis.switchLayer(val);
    }
  }
};
</script>

<style>

.bottombtn {
  z-index: 100;
  position: absolute;
  bottom: 10%;
  right: 10%;}

    .bottombtn li {
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


   .bottombtn li:hover {
          background-color: #0754e2;
          color: #fff;
          cursor:pointer;
        }
      
    
      
</style>