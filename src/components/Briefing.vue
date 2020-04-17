<template>
  <div class="briefing">
    <p class="title">{{ title }}</p>
    <!-- <el-row :gutter="50">
      <el-col :span="16"></el-col>
      <el-col :span="8" class="img-col">
      </el-col>
    </el-row>-->
    <div class="content-area">
      <div class="text">
        <p class="section" v-for="(item, index) in content" :key="index">
          {{ item }}
        </p>
      </div>
      <div class="img">
        <el-image fit :src="src" />
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
      width: 66%;
      display: inline-block;
      margin-right: 1%;
      .section {
        margin: 20px 0;
        font-size: @banner-conent-size;
        line-height: calc(@banner-conent-size * 2);
      }
    }
    .img {
      height: inherit;
      width: 33%;
      justify-content: center;
      display: inline-flex;
      align-items: center;
    }
  }
}
</style>
