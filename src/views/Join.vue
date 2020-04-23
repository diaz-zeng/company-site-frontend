<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img03-1.jpg')"
      title="加入我们"
      content="专业的职业生涯规划、 明确的晋升通道及专业培训， 使您获得快速成长。与伯乐共谋， 与千里马共赢"
    />
    <div class="row-content">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon">
            <i class="icon el-icon-data-board"></i>
          </div>
          <p class="text-content">
            <b class="b">|</b>
            销售
          </p>
          <p style="color:#999;">联系方式：2222222</p>
        </el-col>
        <el-col :span="8" class="border">
          <div class="big-icon">
            <i class="el-icon-copy-document"></i>
          </div>
          <p class="text-content">
            <b class="b">|</b>
            Python技术
          </p>
          <p style="color:#999;">联系方式：2222222</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon">
            <i class="el-icon-upload"></i>
          </div>
          <p class="text-content">
            <b class="b">|</b>
            RPA技术
          </p>
          <p style="color:#999;">联系方式：2222222</p>
        </el-col>
      </el-row>
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
.custom-software {
  .map {
    padding: 13px 18%;
    margin-bottom: 60px;
    background: url(../assets/img/map.png) no-repeat;
    height: 400px;
    margin-top: 50px;
    margin-left: 10%;
    width: 600px;
  }
  .map-text {
    padding: 3px 8%;
    margin-bottom: 60px;
    background-color: white;
    height: 150px;
    width: 250px;
    margin-top: 50px;
  }
  .text-top {
    display: block;
    font-size: 20px;
    text-align: left;
  }
  .b {
    color: #0457b7;
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
    padding: 40px 150px 30px 150px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #ededed;
  }

  .big-icon {
    width: 120px;
    height: 120px;
    margin: 0 calc(50% - 60px);
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 70px;
      line-height: 120px;
      width: 120px;
      text-align: center;
      color: #0457b7;
    }
    .text-content {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
