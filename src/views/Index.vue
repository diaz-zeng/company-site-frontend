<template>
  <div class="index">
    <el-carousel class="swiper" trigger="click" height="420px">
      <el-carousel-item
        class="swiper-item"
        v-for="item in 2"
        :key="item"
        arrow="never"
      >
        <el-image
          class="image"
          fit="none"
          :src="require(`../assets/img/banner-img02-${item}.jpg`)"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Index extends Vue {}
</script>
<style lang="less" scoped>
.index {
  .swiper {
    .swiper-item {
      .image {
        height: 420px;
      }
    }
  }
}
</style>
