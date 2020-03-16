<template>
  <div class="threebottomtn">
    <ul>
      <li @click="doSwitch(0)" :class="{active:forceColor == 0}" >三维</li>
      <li @click="doSwitch(1)" :class="{active:forceColor == 1}">倾斜投影</li>
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