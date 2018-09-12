<template>
  <div id="app">
      <div id="Top"></div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding:0px;
  margin:0px;
}
#app {
  width:100%;
  height:2000px;
  position: relative;
}
</style>
