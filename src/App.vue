<template>
  <div id="app">
    <router-view class="router_view_root"/>
  </div>
</template>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
.router_view_root{
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
}
</style>
