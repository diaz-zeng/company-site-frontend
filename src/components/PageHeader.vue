<template>
  <div class="banner" :style="{ backgroundImage: `url(${src})` }">
    <div class="content-area">
      <div>
        <slot name="content-area">
          <h1 class="title">{{ title }}</h1>
          <p class="content">{{ content }}</p>
        </slot>
      </div>
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
  height: 420px;
  padding: @content-area-padding;
  width: @content-area-width;
  .content-area {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
