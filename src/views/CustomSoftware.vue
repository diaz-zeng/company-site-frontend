<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img02-1.jpg')"
      title="定制软件开发"
      content="基于多年软件项目开发与管理经验，开发了一系列专业化软件产品，并不断提高产品的适应性与市场价值，针对不同客户需求提供更多个性化服务"
    />
    <briefing
      title="业务介绍"
      :content="content"
      :src="require('../assets/img/custom_software.png')"
    />
    <div class="service-area">
      <p class="title">涉及领域</p>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-shopping-bag-1" />
          <p class="font">电商</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">电子政务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-s-data" />
          <p class="font">大数据</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-office-building" />
          <p class="font">智慧城市</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-fork-spoon" />
          <p class="font">餐饮</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-data-board" />
          <p class="font">会展服务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-collection" />
          <p class="font">教育</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-first-aid-kit" />
          <p class="font">医疗</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-truck" />
          <p class="font">物流</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-money" />
          <p class="font">金融</p>
        </el-col>
      </el-row>
    </div>
    <div class="advantages">
      <p class="title">我们的优势</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-medal"></i>
          </div>
          <p class="text-content">
            我们的技术服务队伍均具备丰富的大型项目成功实施经验，使我们为您提供的解决方案有很高的专业水准。
          </p>
        </el-col>
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-copy-document"></i>
          </div>
          <p class="text-content">
            在我们覆盖的行业及应用中，我们具备成熟的解决方案或第三方解决方案集成和实施服务能力。
          </p>
        </el-col>
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-discover"></i>
          </div>
          <p class="text-content">
            在我们擅长的行业中，均拥有多年的行业经验和应用原型积累，可以提供最合适您的量身定做的解决方案服务。
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#597cff;">
            <i class="el-icon-user"></i>
          </div>
          <p class="text-content">
            从客户利益出发把产品做好做精，为用户提供操作简单、功能强大、内容丰富的软件产品，客户使用我们开发的产品质量放心、商业机密安心、售后服务舒心。
          </p>
        </el-col>
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#fdbf3a;">
            <i class="el-icon-trophy"></i>
          </div>
          <p class="text-content">
            我们拥有经验丰富的工程师团队为客户提供从咨询、需求分析、设计、开发、测试、实施、培训、维护到跟踪支持等一条龙服务。
          </p>
        </el-col>
        <el-col :span="8" class="border">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-circle-check"></i>
          </div>
          <p class="text-content">
            严密的项目管理体系和以IS09001为标准的全程质量控制，使技术服务工作规范化和项目管理科学化，为我们解决方案的成功实施提供了有力的保证。
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
  private content: string[] = [
    "河南八六三软件股份有限公司可根据客户的个性化需求，为客户定制开发各种应用软件。经过多年的积累，八六三软件拥有一支分工合理、经验丰富的软件开发团队。团队成员包括项目经理、系统架构师、软件工程师、测试工程师、配置工程师、专业美工、技术支持工程师等。团队成员有丰富的项目实践经验，均参加过大型的JAVA、.NET、C++项目开发。",
    "软件开发团队在CMMI理论基础上，经过多年的实践，形成了一整套有效且独特的软件项目管理方法。项目实施能力已达到CMMI5的成熟度标准，可实现开发过程的透明化管理，客户能够监控整个开发过程。在质量控制方面，通过技术评审、过程检查、软件测试这三种质量活动来全面控制软件质量；在信息安全方面，通过硬件设备安全性维护，信息加密备份控制，信息灾难恢复体制等来保证客户信息安全，同时可根据客户需要设置特殊的封闭式开发环境。",
    "八六三软件能为客户提供从咨询、需求分析、设计、开发、测试、实施、培训、维护到跟踪支持等全程服务。客户使用我们开发的产品质量放心、商业机密安心、售后服务舒心。"
  ];
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
    height: 450px;
    background-color: #f3f3f3;

    .item {
      .icon,
      .font {
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
    .big-icon {
      width: 120px;
      height: 120px;
      margin: 0 calc(50% - 60px);
      border-radius: 50%;
      margin-bottom: 30px;
      i {
        font-size: 38px;
        line-height: 120px;
        width: 120px;
        text-align: center;
        color: white;
      }
    }
  }
  .text-content {
    width: 95%;
    font-size: 16px;
    line-height: 34px;
    text-align: center;
  }
}
</style>
