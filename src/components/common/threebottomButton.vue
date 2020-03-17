<template>
  <div class="threebottomtn">
    <ul>
      <li @click="doSwitch(2)" :class="{active:forceColor == 2}">基础</li>
      <li @click="doSwitch(3)" :class="{active:forceColor == 3}">大数据</li>
      <li @click="doSwitch(4)" :class="{active:forceColor == 4}">影像</li>
      <li @click="doSwitch(0)" :class="{active:forceColor == 0}" >三维基模</li>
      <li @click="doSwitch(1)" :class="{active:forceColor == 1}">三维实模</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'threebottomBtn',
    data(){
        return{
            forceColor:0
        }
    },
    methods:{
        doSwitch(val){
            this.forceColor = val
            this.$parent.$refs.lgSence.switchSenceLayer(val)
        }
    }
};
</script>

<style>
.threebottomtn {
  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: 100;
}

.threebottomtn li {
  list-style: none;
  float: left;
  border: 1px solid #05fff8;
  line-height: 40px;
  height: 40px;
  background-color: #243968;
  padding: 0 10px;
  margin-left: 5px;
  overflow: hidden;
  cursor: pointer;
}

.threebottomtn li:hover {
  background-color: #0754e2;
  color: #fff;
}
</style>