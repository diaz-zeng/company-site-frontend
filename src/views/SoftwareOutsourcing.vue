<template>
  <div class="software-outsourcing">
    <page-header
      :src="require('../assets/img/banner-img02-2.jpg')"
      title="全球软件外包"
      content="在全球承接软件开发、测试、BPO服务等IT外包项目，在本地建立低成本的外包服务中心，提供全球范围内的外包服务。"
    />
    <briefing
      title="业务介绍"
      :content="content"
      :src="require('../assets/img/software_outsource.png')"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";
import Briefing from "@/components/Briefing.vue";
@Component({ components: { PageHeader, Briefing } })
export default class SoftwareOutsourcing extends Vue {
  private content: string[] = [
    "河南八六三软件股份有限公司是河南省服务外包示范企业、是中国内地最大的软件外包企业之一，拥有一支稳定的人才队伍。现有技术人员600多名，主要掌握Java系列(Java语言，J2EE等)开发技术、Microsoft系列(VC++，VB，C#，.Net，ASP等)开发技术、Android、iOS、PHP、COBOL以及Hadoop等技术。",
    "我们目前主要的业务范围有需求、设计、开发、测试、维护等工作，通过我公司提供的离岸、在岸作业，为客户提供软件服务，使客户的企业价值得到最大的发挥。",
    "随着公司业务规模的不断壮大和发展，目前已与诸多国内外知名企业建立了长期稳定的业务合作关系，主要客户有京瓷、NTT DATA、NEC、Hitachi、中信银行、中原银行、浦发银行、郑州大学、信息工程大学、宇通集团等。我们的外包项目组遍布日本、北京、上海、杭州、南京、无锡等地"
  ];
}
</script>
<style lang="less" scoped></style>
