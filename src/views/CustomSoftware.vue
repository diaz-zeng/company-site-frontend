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
<style lang="less" scoped></style>
