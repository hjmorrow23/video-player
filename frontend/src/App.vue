<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: $font;
  }
</style>
