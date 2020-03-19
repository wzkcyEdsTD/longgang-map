<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("../src/assets/css/common.css");
@import url('../src/assets/common/font/font.css');
* {
  padding: 0;
  margin: 0;
}
ol ul li {
  list-style: none;
}

#app {
  height: 100%;
}
.active {
  background-color: #0754e2;
  color: #fff;
}
/* @import url("../assets/css/common.css"); */
</style>
