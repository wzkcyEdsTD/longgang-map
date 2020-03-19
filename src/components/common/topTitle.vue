<template>
  <div>
    <div class="top_title"></div>
    <div class="top_title_font"></div>
  </div>
</template>

<script>
export default {
  name: "topTitle"
};
</script>

<style>
.top_title {
  z-index: 99;
  position: absolute;
  top: 10px;
  width: 100%;
  height: 85px;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, 0);
  background: url(../../assets/image/lg_title.png) 0 0 no-repeat;
  background-size: 100% 100%;
}

.top_title_font {
  z-index: 120;
  position: absolute;
  top: 22px;
  width: 591px;
  height: 38px;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, 0);
  background: url(../../assets/image/lg_title_font.png) 0 0 no-repeat;
  background-size: 100% 100%;
}
</style>