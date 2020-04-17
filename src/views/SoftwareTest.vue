<template>
  <div class="software-test">
    <page-header
      :src="require('../assets/img/banner-img02-31.jpg')"
      title="软件测试及第三方认证测试"
      content="国家级软件检测资质，公平、公正、专业的第三方检测团队，多领域的行业测试经验，为软件产品质量保驾护航。"
    />
    <briefing
      title="中心简介"
      :content="content"
      :src="require('../assets/img/software_test.png')"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";
import Briefing from "@/components/Briefing.vue";
@Component({ components: { PageHeader, Briefing } })
export default class SoftwareTest extends Vue {
  private content: string[] = [
    "河南八六三软件评测中心(以下简称:中心)成立于2001年，是经政府授权成立的计算机软件产品质量检测机构，同时也是河南省最早从事第三方软件测试的专业机构。2007年通过中国合格评定国家认可委员会国家级软件测试实验室的认可，具备了开展公平、公正、独立的第三方软件评测资质。评测中心出具的测试报告不但在国内具有法律效力和权威性，而且在与CNAS签署互认协议的世界70多个国家和地区同样有效。",
    "中心是中国软件测评联盟常务理事单位、是中国软件评测中心河南分中心机构。中心作为具有独立法人资格的第三方测评机构，经过十几年的发展，已经建立起了一套科学、完善的质量管理体系。",
    "中心目前具有80多名以上专业的中高级软件测试工程师，拥有国内一流的软件测试技术和评测环境，配备了先进的软件功能测试工具及性能测试工具、故障诊断与分析工具、软件测试管理工具、网络协议分析仪等测试设备，建立了软件测试、软件中试及网络测试等专用实验室。",
    "中心自成立以来，承担了数千个信息系统的测评项目，为客户方控制项目质量和保证项目投资收益保驾护航。中心经过多年发展，在技术团队、服务规范、案例经验和业务规模方面取得了长足发展，已经成为了测评行业的中坚力量。",
    "中心业务范围涉及电子政务、烟草、电力、医疗、交通、制造业、水利、物流、金融、互联网电子商务等行业。目前合作的客户有：微软、IBM、阿里巴巴、东软国际、上汽集团、恒生电子、中国银行、中国移动、中国联通、文思海辉、日本NEC、郑州宇通、郑州银行、中原银行、河南移动、河南电力、河南烟草、高等院校及科研机构等等。",
    "中心负责历届河南省青年创新软件设计大赛入围决赛作品的测试工作。"
  ];
}
</script>
<style lang="less" scoped></style>
