<template>
  <div class="threebottomtn">
    <ul>
      <li @click="doSwitch(2)" :class="{active:forceColor == 2}">
        <div class="btn_font">
          <span>基础</span>
          <span class="small-font">BASIS</span>
        </div>
      </li>
      <li @click="doSwitch(3)" :class="{active:forceColor == 3}">
        <div class="btn_font">
          <span>大数据</span>
          <span class="small-font">BIG DATA</span>
        </div>
      </li>
      <li @click="doSwitch(4)" :class="{active:forceColor == 4}">
        <div class="btn_font">
          <span>影像</span>
          <span class="small-font">IMAGE</span>
        </div>
      </li>
      <li @click="doSwitch(0)" :class="{active:forceColor == 0}">
        <div class="btn_font">
          <span>三维基模</span>
          <span class="small-font">BASE MODEL</span>
        </div>
      </li>
      <li @click="doSwitch(1)" :class="{active:forceColor == 1}">
        <div class="btn_font">
          <span>三维实模</span>
          <span class="span_font small-font">REAL MODEL</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "threebottomBtn",
  data() {
    return {
      forceColor: 0
    };
  },
  methods: {
    doSwitch(val) {
      this.forceColor = val;
      this.$parent.$refs.lgSence.switchSenceLayer(val);
    }
  }
};
</script>

<style>
.threebottomtn {
  position: absolute;
  bottom: 5%;
  right: 58px;
  z-index: 100;
  color: #39a1e2;
}

.threebottomtn li {
  position: relative;
  box-sizing: border-box;
  list-style: none;
  float: left;
  width: 180px;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  background: url(../../assets/image/base/base_no_active.png);
  background-size: 100% 100%;
}

.threebottomtn li .btn_font {
  position: relative;
  font-family: "ZZLH";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.threebottomtn li .btn_font span {
  font-size: 12px;
  display: block;
  white-space: nowrap;
}

.threebottomtn li:hover {
  background: url(../../assets/image/base/base_active.png);
  background-size: 100% 100%;
  color: #ffffff;
}

.threebottomtn .active {
  background: url(../../assets/image/base/base_active.png);
  background-size: 100% 100%;
  color: #ffffff;
}
</style>