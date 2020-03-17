<template>
  <div class="top_title">
  </div>
</template>

<script>
export default {
    name:'topTitle'
}
</script>

<style>
.top_title{
    z-index: 99;
    position: absolute;
    top: 10px;
    width: 1280px;
    height: 56px;
    margin:0 auto;
    left: 50%;
    transform: translate(-50%,0);
    background: url(../../assets/image/lg_title.png) 0 0 no-repeat;
    background-size: 100% 100%;

}
</style>