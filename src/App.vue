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
* {
  padding: 0;
  margin: 0;
}
ol ul li {
  list-style: none;
}

html,
body {
  height: 100%;
  font-size: 16px;
  overflow: auto;
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
