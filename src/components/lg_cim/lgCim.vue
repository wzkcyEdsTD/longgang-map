<template>
  <div class="lg_container">
    <topTitle />
    <bottomBtn v-if="this.lgshow==1" />
    <threbottoBtn v-if="this.lgshow==2" />
    <div class="handel"></div>
    <div class="switch3">
      <ul>
        <li @click="Switch(1)" :class="{active:forceColor == 1}">
          <div class="btn_font">
            <span>二维地图</span>
            <span class="small-font">TWO DIMENSIONAl</span>
          </div>
          <div class="shadow"></div>
        </li>
        <li @click="Switch(2)" class="btn_positon" :class="{active:forceColor == 2}">
          <div class="btn_font">
            <span>三维地图</span>
            <span class="small-font">THREE DIMENSIONAl</span>
          </div>
          <div class="shadow"></div>
        </li>
      </ul>
    </div>
    <lgmap v-if="this.lgshow==1" ref="lgArcgis" />
    <sence v-if="this.lgshow==2" ref="lgSence" />
  </div>
</template>

<script>
import lgmap from "./components/lgmap.vue";
import topTitle from "../common/topTitle";
import bottomBtn from "../common/bottomButton";
import sence from "./components/sence.vue";
import threbottoBtn from "../common/threebottomButton";

export default {
  name: "lgCim",
  data() {
    return {
      forceColor: 2,
      lgshow: 2
    };
  },
  components: {
    lgmap,
    topTitle,
    bottomBtn,
    sence,
    threbottoBtn
  },
  methods: {
    Switch(val) {
      console.log(val);
      this.forceColor = val;
      this.lgshow = val;
    }
  }
};
</script>

<style>
.lg_container {
  width: 100%;
  height: 100%;
}

.handel {
  z-index: 100;
  background: url(../../assets/image/base/handel.png);
  background-size: 100% 100%;
  position: absolute;
  width: 148px;
  height: 266px;
  top: 140px;
  right: 0px;
}

/* .shadow{
  position:absolute;
    background: url(../../assets/image/base/shadow.png);
    background: 100%;
  width: 380px;
  height: 190px;
} */

.switch3 {
  z-index: 100;
  position: absolute;
  top: 194px;
  right: 58px;
  color: #39a1e2;
}

.switch3 li {
  position: relative;
  box-sizing: border-box;
  line-height: 28px;
  list-style: none;
  width: 380px;
  height: 190px;
  background: url(../../assets/image/base/three_no_active.png);
  background-size: 100% 100%;
  cursor: pointer;
  overflow: hidden;
}

.switch3 .btn_positon {
  position: absolute;
  top: 110px;
}

.switch3 li .btn_font {
  font-family: "ZZLH";
  position: absolute;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.switch3 .btn_font span {
  position: absolute;

  left: 60px;
  display: block;
  font-size: 12px;
}

.switch3 .btn_font span:nth-child(1) {
  left: 50%;
  transform: translate(-100%, 10%);
  bottom: 10px;
  font-size: 20px;
  letter-spacing: 6px;
}

.switch3 .btn_font span:nth-child(2) {
  letter-spacing: 2px;
  -webkit-transform-origin-x: 0;
}

.switch3 li:hover {
  background: url(../../assets/image/base/three_active.png);
  background-size: 100% 100%;
  color: #ffffff;

  cursor: pointer;
}

.switch3 .active {
  background: url(../../assets/image/base/three_active.png);
  background-size: 100% 100%;
  color: #ffffff;
}
</style>