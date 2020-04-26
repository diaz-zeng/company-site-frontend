<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img03-2.jpg')"
      title="一站式资产管理移动办公平台"
      content="平台系统 · 移动办公 · 物联网"
    />

    <div class="service-area">
      <p class="title">用户痛点</p>
      <div class="row-content">
        <el-row :gutter="10" type="flex" justify="space-around">
          <el-col :span="8" class="border">
            <div class="big-icon">
              <i class="el-icon-house" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              资产丢失
            </p>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-s-grid" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              批量管理
            </p>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-edit" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              手工盘点
            </p>
          </el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="space-around">
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-mobile" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              信息滞后
            </p>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-shopping-cart-full" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              重复购置
            </p>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-coin" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              账实不符
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="advantages">
      <p class="title">我们能为你做什么</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-news"></i>
          </div>
          <b class="text-content">资产管理</b>
          <p class="text-content">
            覆盖了企业各类型资产管理，如：固定资产、低值易耗、在建工程、无形资产等。从资产购置、入库、领用、登记、转移调拨、借用归还、报修维修、盘点统计、报废处置等，实现了资产全生命周期管理。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-money"></i>
          </div>
          <b class="text-content">流程管理</b>
          <p class="text-content">
            覆盖所有资产业务流程化管理，可以对资产每个业务流程节点自定义，可分不同流程类型：自由节点、用户节点、角色节点、部门领导等定义，系统提供流程代办提醒事宜。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-monitor"></i>
          </div>
          <b class="text-content">微信办公</b>
          <p class="text-content">
            移动应用集成企业微信，无需安装移动APP，不限移动端操作系统，与PC端业务同步，就可以马上内部工作协作，随时随地对资产进行管理，一目了然。
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-search"></i>
          </div>
          <b class="text-content">耗材管理</b>
          <p class="text-content">
            覆盖企业各种物品类型管理，如：办公用品、易耗品、礼品、物料等，从物品采购、入库领用、库存盘点等，各个业务统计查询分析等管理。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-paperclip"></i>
          </div>
          <b class="text-content">标识管理</b>
          <p class="text-content">
            资产管理通过标签（支持一维码、二维码、RFID电子标签）的形式，赋予给每个资产唯一身份标识，方便对资产扫描盘点及全过程环节查找追溯。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:rgb(253, 91, 38);">
            <i class="el-icon-view"></i>
          </div>
          <b class="text-content">移动盘点</b>
          <p class="text-content">
            采用手机端实时在线盘点，盘点查询、资产查询、盘点数据自动提交，可以全员参与盘点更方便，更高效，节约大量时间周期。
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="advantages">
      <p class="title">增值服务</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-mouse"></i>
          </div>
          <b class="text-content">定制开发</b>
          <p class="text-content">
            针对客户业务需求定制开发，满足企业个性化需求
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-finished"></i>
          </div>
          <b class="text-content">RPA自动化</b>
          <p class="text-content">
            利用RPA实现资产录入， 财务系统对接的自动化
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-discount"></i>
          </div>
          <b class="text-content">标签代打</b>
          <p class="text-content">
            提供面向用户企业打印资产标签服务，满足资产管理一物一码的要求
          </p>
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
@import "../less/variables.less";
.custom-software {
  .title {
    line-height: 48px;
    font-size: 36px;
    text-align: center;
    margin-bottom: 60px;
  }
  .service-area {
    padding: @content-area-padding;
    width: @content-area-width;
    height: 500px;

    .item {
      .icon,
      .font {
        color: #74808f;
      }
      .clr {
        color: #74808f;
      }
      .icon {
        display: block;
        font-size: 72px;
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
  .advantages {
    padding: @content-area-padding;
    padding-top: 15px;
    padding-bottom: 15px;
    width: @content-area-width;
    margin-bottom: 60px;
  }
  .big-icon {
    width: 120px;
    height: 120px;
    margin: 0 calc(50% - 60px);
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 36px;
      line-height: 120px;
      width: 120px;
      text-align: center;
      color: white;
    }
  }
  .text-content {
    width: 95%;
    font-size: 16px;
    text-align: center;
  }
  b.text-content {
    display: block;
  }
  .b {
    color: #0457b7;
  }

  element.style {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
