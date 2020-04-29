<!--
 * @Date: 2020-04-29 09:49:20
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-04-29 14:56:34
 * @FilePath: \company-site-frontend\src\components\Briefing.vue
 -->
<template>
  <div class="briefing">
    <p class="title">{{ title }}</p>
    <div class="content-area">
      <div class="text">
        <p class="section" v-for="(item, index) in content" :key="index">
          {{ item }}
        </p>
      </div>
      <div class="img">
        <el-image :src="src" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Briefing extends Vue {
  @Prop()
  title!: string;

  @Prop()
  content!: string[];

  @Prop()
  src!: string;
}
</script>
<style lang="less" scoped>
@import "../less/variables.less";
.briefing {
  padding: @content-area-padding;
  width: @content-area-width;
  margin-bottom: 50px;
  .title {
    width: 100%;
    margin: 50px;
    text-align: center;
    font-size: @banner-title-size;
  }
  .content-area {
    width: 100%;
    height: initial;
    display: flex;
    .text {
      width: 70%;
      display: inline-block;
      margin-right: 1%;
      .section {
        margin: 20px 0;
        font-size: @banner-content-size;
        line-height: calc(@banner-content-size * 2);
        text-indent: 2em;
      }
    }
    .img {
      height: initial;
      width: 30%;
      justify-content: center;
      display: inline-flex;
      align-items: flex-start;
      padding-top: 30px;
    }
  }
}
</style>
