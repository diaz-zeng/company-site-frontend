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
    <div class="service-area">
      <p class="title">成熟、领先的产品与解决方案</p>
      <p
        style="
      text-align: center; color:#606266;padding-bottom:30px"
      >
        针对不同客户需求提供更多个性化服务，以此保证产品在技术和用户体验上的领先地位，为客户创造核心价值
      </p>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">大数据</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-money" />
          <p class="font">金融</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-fork-spoon" />
          <p class="font">餐饮</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-first-aid-kit" />
          <p class="font">医疗</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-reading" />
          <p class="font">教育</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-office-building" />
          <p class="font">智慧城市</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-data-board" />
          <p class="font">会展服务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-truck" />
          <p class="font">物流</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-sell" />
          <p class="font">电商</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">电子政务</p>
        </el-col>
      </el-row>
    </div>
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
.title {
  line-height: 48px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
}

.service-area {
  padding: 15px 18%;
  width: calc(100% - 36%);
  height: 460px;
  background-color: #f3f3f3;

  .item {
    .icon,
    .font {
      color: #74808f;
    }
    .icon {
      display: block;
      font-size: 40px;
      width: 100%;
      text-align: center;
    }
    .font {
      width: 100%;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>
