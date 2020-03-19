<template>
  <div class="bottombtn">
    <ul>
      <li @click="doSwitch(0)" :class="{active:forceColor == 0}">
        <div class="btn_font">
          <span>基础版</span>
          <span class="small-font">BASIS</span>
        </div>
      </li>
      <li @click="doSwitch(1)" :class="{active:forceColor == 1}">
        <div class="btn_font">
          <span>大数据</span>
          <span class="small-font">BIG DATA</span>
        </div>
      </li>
      <li @click="doSwitch(2)" :class="{active:forceColor == 2}">
        <div class="btn_font">
          <span>影像</span>
          <span class="small-font">IMAGE</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bottomBtn",
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
  bottom: 5%;
  right: 58px;
  color: #39a1e2;
}

.bottombtn li {
  position: relative;
  list-style: none;
  float: left;
  /* line-height: 20px; */
  width: 180px;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  background: url(../../assets/image/base_no_active.png);
  background-size: 100% 100%;
}

.bottombtn li .btn_font {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.bottombtn li .btn_font span {
  font-family: "ZZLH";
  font-size: 8px;
  display: block;
  white-space: nowrap;
}

.bottombtn li:hover {
  background: url(../../assets/image/base_active.png);
  background-size: 100% 100%;

  color: #ffffff;
}

.bottombtn .active {
  background: url(../../assets/image/base_active.png);
  background-size: 100% 100%;
  color: #ffffff;
}
</style>