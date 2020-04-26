<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img06.jpg')"
      title="联系我们"
      content="为客户提供专业、优质的服务"
    />
    <div class="row-content">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="24">
          <p class="title">
            <b class="b">|</b>
            韩女士
          </p>
          <p class="content">
            电话：021-64026685
            <i class="el-icon-phone"></i>
          </p>
          <p class="content">
            邮箱：dataplus@863soft.com
            <i class="el-icon-message"></i>
          </p>
        </el-col>
      </el-row>
    </div>

    <div class="map">
      <div class="map-text">
        <p class="text-top"><b style="color: #0457b7;">|</b> 公司地址</p>
        <p class="text">上海市闵行区陈行公路2388号浦江科技广场5号楼11层W08</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";
import Briefing from "@/components/Briefing.vue";
@Component({ components: { PageHeader, Briefing } })
export default class CustomSoftware extends Vue {
  private content: string[] = [];
}
</script>
<style lang="less" scoped>
@import "../less/variables.less";
.custom-software {
  .map {
    margin: @content-area-padding;
    // margin-bottom: 60px;
    // margin-top: 50px;
    // margin-left: 10%;
    background-image: url(../assets/img/map.png);
    height: 400px;
    position: relative;
    .map-text {
      background-color: white;
      position: absolute;
      padding: 0 10px;
      width: 40%;
      height: 35%;
      top: 20%;
      right: 30%;
      // height: 150px;
      // width: 250px;
      // margin-top: 50px;
      .text-top {
        display: block;
        font-size: 20px;
        text-align: left;
      }
    }
  }

  .text {
    display: block;
    font-size: 15px;
    text-align: left;
  }
  .border {
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  .row-content {
    padding: @content-area-padding;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #ededed;
    .title {
      width: 100%;
      font-size: 24px;
      text-align: left;
      .b {
        color: #0457b7;
        font-size: 36px;
      }
    }
    .content {
      text-indent: 1em;
      color: #999;
      font-size: 16px;
      line-height: 24px;
      i {
        color: #0457b7 !important;
      }
    }
  }

  .big-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 70px;
      line-height: 120px;
      width: 120px;
      text-align: center;
      color: #0457b7;
    }
  }
}
</style>
