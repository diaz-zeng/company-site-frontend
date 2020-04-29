<template>
  <div class="banner">
    <el-image class="image" :src="src"></el-image>
    <div class="content-area">
      <slot name="content-area">
        <h1 class="title">{{ title }}</h1>
        <p class="content">{{ content }}</p>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PageHeader extends Vue {
  @Prop()
  title!: string;
  @Prop()
  content!: string;
  @Prop()
  src!: string;
}
</script>
<style lang="less" scoped>
@import "../less/variables.less";
.banner {
  height: initial;
  width: 100%;
  position: relative;
  .image {
    width: 100%;
    height: auto;
  }
  .content-area {
    position: absolute;
    top: 0;
    left: 0;
    padding: @content-area-padding;
    width: @content-area-width;
    height: 100%;
    z-index: 99;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    justify-content: center;
    .title,
    .content {
      color: white;
      width: 600px;
    }
    .title {
      font-size: @banner-title-size;
    }
  }
}
</style>
