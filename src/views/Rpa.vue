<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img03-3.jpg')"
      title="RPA业务流程自动化"
      content="RPA · AI · BPM"
    />、
    <div class="advantages">
      <p class="title">什么是RPA</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-rank"></i>
          </div>
          <b>软件机器人</b>
          <p class="text-content">
            RPA是基于计算机操作系统的工作桌面，自动识别
            UI、完成预先设定的工作流程的软件机器人。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-finished"></i>
          </div>
          <b>全自动</b>
          <p class="text-content">
            自动操作整个业务流程。用软件的方式代替人力，
            完成大量重复性的手工操作。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-s-platform"></i>
          </div>
          <b>模拟人的操作</b>
          <p class="text-content">
            通过模仿人的方式,执行一系列的业务流程 。
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="service-area">
      <p class="title">业务类型</p>
      <div class="row-content">
        <el-row :gutter="10" type="flex" justify="space-around">
          <el-col :span="8" class="border">
            <div class="big-icon">
              <i class="el-icon-copy-document" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              资金管理
            </p>
            <ol style="color:#999;">
              <li>资金管理</li>
              <li>对外收付款</li>
              <li>银行对账</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-edit-outline" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              税务管理
            </p>
            <ol style="color:#999;">
              <li>税务申报</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-sunrise" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              差旅与报销
            </p>
            <ol style="color:#999;">
              <li>报销单据核对</li>
              <li>费用自动</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-money" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              存货与成本
            </p>
            <ol style="color:#999;">
              <li>成本统计指标录入</li>
              <li>成本与费用</li>
            </ol>
          </el-col>
        </el-row>
        <el-row :gutter="10" type="flex" justify="space-around">
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-suitcase" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              销售到收款
            </p>
            <ol style="color:#999;">
              <li>自动开票</li>
              <li>应收账款对账与收款核销</li>
              <li>客户信用管理</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-mobile" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              采购到付款
            </p>
            <ol style="color:#999;">
              <li>发票处理</li>
              <li>账期处理及报</li>
              <li>供应商主数据管理</li>
              <li>发票校验</li>
              <li>付款执行</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-tickets" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              总账到报表
            </p>
            <ol style="color:#999;">
              <li>主数据管理</li>
              <li>凭证处理</li>
              <li>关联交易处理</li>
              <li>薪酬核算</li>
              <li>自动化报告</li>
            </ol>
          </el-col>
          <el-col :span="8">
            <div class="big-icon">
              <i class="el-icon-check" style="color:#0457b7;"></i>
            </div>
            <p class="text-content">
              <b class="b">|</b>
              资金管理
            </p>
            <ol style="color:#999;">
              <li>资金管理</li>
              <li>对外收付款</li>
              <li>银行对账</li>
            </ol>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="advantages">
      <p class="title">RPA特点</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-medal"></i>
          </div>
          <b class="text-content">
            执行规则
          </b>
          <p class="text-content">
            基于事先配置的规则进行匹配执行
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-receiving"></i>
          </div>
          <b class="text-content">
            数据抓取
          </b>
          <p class="text-content">
            模拟键盘鼠标操作，从各类系统界面，包括网页中抓取数据，过滤数据
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-notebook-2"></i>
          </div>
          <b class="text-content">
            审计日志
          </b>
          <p class="text-content">
            日志自动审查过滤与抽取
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#597cff;">
            <i class="el-icon-document-add"></i>
          </div>
          <b class="text-content">
            数据输入
          </b>
          <p class="text-content">
            跨系统自动输入，同步各类数据、内容
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#fdbf3a;">
            <i class="el-icon-printer"></i>
          </div>
          <b class="text-content">
            OCR识别
          </b>
          <p class="text-content">
            对文档、扫描件，利用多种光学字符识别工具进行扫描取值
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-folder-opened"></i>
          </div>
          <b class="text-content">
            文件处理
          </b>
          <p class="text-content">
            依照预先制定的桂萼，自动触发文件处理流程
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-c-scale-to-original"></i>
          </div>
          <b class="text-content">
            流程执行
          </b>
          <p class="text-content">
            既定条件下触发自动化流程
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:rgb(253, 91, 38);">
            <i class="el-icon-view"></i>
          </div>
          <b class="text-content">
            聊天与问答
          </b>
          <p class="text-content">
            称为用户的个人助理，回答经常需要重复回答的问题
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
    height: 700px;
    background-color: #f3f3f3;

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
    .text-content {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
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
