<template>
  <div class="not-found">
    <div class="content">
      <p class="code">404</p>
      <P>Resource Not Found</P>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class NotFound extends Vue {}
</script>
<style lang="less">
html,
body {
  height: 100% !important;
}
.not-found {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .content {
    width: 100%;
    p {
      min-width: 100%;
      text-align: center;
      font-size: 32px;
      color: #777777;
    }
    .code {
      font-size: 48px;
    }
  }
}
</style>
