<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/img2.png')"
      title="关于我们"
      content="创新 · 发展 · 合作 · 共赢"
    />
    <briefing
      title="企业介绍"
      :content="content"
      :src="require('../assets/img/20200408161642.png')"
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
    "数和信息技术（上海）有限公司是河南八六三软件股份有限公司的全资子公司。",
    "数和信息秉持【数字化+】的理念，将公司深厚的行业产品方案能力与集团公司的优势资源和资质相结合，为行业客户提供领先的企业数字化解决方案和实施服务。",
    "数和信息秉持以【专业】的能力，基于公司的客户服务基准为行业客户提供领先的数字化解决方案和系统集成服务：",
    "一、 业务流程自动化",
    "公司具有长年从事业务流程管理和流程机器人相关业务的专业咨询与技术人员，能够为客户提供从业务流程梳理、问题分析、业务流程自动化改善及实施相关的整体服务。",
    "二、工控设备相关的物联网服务",
    "数和信息以智能网关+SaaS平台产品为基础，面向设备厂商及设备使用方提供一键式快捷的工控设备上网服务，能够提供基于主流PLC的工控设备数据采集、远程监控、PLC远程控制、组态展、报表服务等相关设备物联网服务。",
    "SaaS平台的扩展性还能够针对客户设备管理的进一步数字化需求提供开发性的可扩展平台，方便对接或者开发资产管理、配件采购与管理等业务功能。",
    "三、系统集成&软件外包服务",
    "数和信息及八六三集团拥有CMMI 5、ISO90001、ISO27000、CNAS等国际专业的系统集成，软件开发，软件测试资格认证。能够为客户提供从项目招投标，软件项目整包，软件项目委托开发，软件技术人员派遣等全方位的软件系统集成服务。"
  ];
}
</script>
<style lang="less" scoped></style>
