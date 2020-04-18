<template>
  <router-view />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {}
</script>

<style lang="less">
@import "less/variables.less";
// * {
//   font-family: "Meiryo UI Bold Italic", "Meiryo UI Regular", "Meiryo UI" !important;
// }
body {
  margin: 0 !important;
}
</style>
