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
    <div class="service-area">
      <p class="title">涉及领域</p>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-shopping-bag-1" />
          <p class="font">环保</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">电子政务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-c-scale-to-original" />
          <p class="font">电子商务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-shopping-bag-1" />
          <p class="font">互联网药品行业</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-mobile-phone" />
          <p class="font">通信</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-data-board" />
          <p class="font">移动APP</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-link" />
          <p class="font">网站</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-smoking" />
          <p class="font">烟草</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-refresh" />
          <p class="font">环保</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-money" />
          <p class="font">金融</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-connection" />
          <p class="font">电力</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-crop" />
          <p class="font">广电</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-fork-spoon" />
          <p class="font">餐饮</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-set-up" />
          <p class="font">通用ERP</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-turn-off" />
          <p class="font">其他</p>
        </el-col>
      </el-row>
    </div>

    <div class="scope">
      <p class="title">服务范围</p>
      <div class="tab-view">
        <div class="tabs">
          <div
            class="tab1"
            :class="tabViewIndex === 0 ? 'active' : ''"
            @click="tabViewIndex = 0"
          >
            <div class="tab-item">
              <i class="el-icon-trophy icon"></i>
              <p class="tab-title">软件产品登记测试</p>
            </div>
          </div>
          <div
            class="tab2"
            :class="tabViewIndex === 1 ? 'active' : ''"
            @click="tabViewIndex = 1"
          >
            <div class="tab-item">
              <i class="el-icon-document-checked icon"></i>
              <p class="tab-title">科技成果鉴定、评价测试</p>
            </div>
          </div>
          <div
            class="tab3"
            :class="tabViewIndex === 2 ? 'active' : ''"
            @click="tabViewIndex = 2"
          >
            <div class="tab-item">
              <i class="el-icon-reading icon"></i>
              <p class="tab-title">测试体系咨询和培训</p>
            </div>
          </div>
        </div>
        <div class="tab-content">
          <p
            class="content-item"
            v-for="(item, index) in tabViewContent[tabViewIndex]"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
    <div class="test"></div>
    <div class="advantages">
      <p class="title">第三方测试的特点与优势</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-medal"></i>
          </div>
          <p class="text-content">管理成本降低</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-copy-document"></i>
          </div>
          <p class="text-content">公平公正性、独立客观性</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-discover"></i>
          </div>
          <p class="text-content">专业项目监理</p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#597cff;">
            <i class="el-icon-user"></i>
          </div>
          <p class="text-content">客观专业的测试结果</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#fdbf3a;">
            <i class="el-icon-trophy"></i>
          </div>
          <p class="text-content">专业的测试团队及测试服务</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-circle-check"></i>
          </div>
          <p class="text-content">项目成本控制</p>
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
export default class SoftwareTest extends Vue {
  private content: string[] = [
    "河南八六三软件评测中心(以下简称:中心)成立于2001年，是经政府授权成立的计算机软件产品质量检测机构，同时也是河南省最早从事第三方软件测试的专业机构。2007年通过中国合格评定国家认可委员会国家级软件测试实验室的认可，具备了开展公平、公正、独立的第三方软件评测资质。评测中心出具的测试报告不但在国内具有法律效力和权威性，而且在与CNAS签署互认协议的世界70多个国家和地区同样有效。",
    "中心是中国软件测评联盟常务理事单位、是中国软件评测中心河南分中心机构。中心作为具有独立法人资格的第三方测评机构，经过十几年的发展，已经建立起了一套科学、完善的质量管理体系。",
    "中心目前具有80多名以上专业的中高级软件测试工程师，拥有国内一流的软件测试技术和评测环境，配备了先进的软件功能测试工具及性能测试工具、故障诊断与分析工具、软件测试管理工具、网络协议分析仪等测试设备，建立了软件测试、软件中试及网络测试等专用实验室。",
    "中心自成立以来，承担了数千个信息系统的测评项目，为客户方控制项目质量和保证项目投资收益保驾护航。中心经过多年发展，在技术团队、服务规范、案例经验和业务规模方面取得了长足发展，已经成为了测评行业的中坚力量。",
    "中心业务范围涉及电子政务、烟草、电力、医疗、交通、制造业、水利、物流、金融、互联网电子商务等行业。目前合作的客户有：微软、IBM、阿里巴巴、东软国际、上汽集团、恒生电子、中国银行、中国移动、中国联通、文思海辉、日本NEC、郑州宇通、郑州银行、中原银行、河南移动、河南电力、河南烟草、高等院校及科研机构等等。",
    "中心负责历届河南省青年创新软件设计大赛入围决赛作品的测试工作。"
  ];
  private tabViewIndex = 0;
  private tabViewContent: string[][] = [
    [
      "本中心是中国软件评测中心河南分中心机构，双方目前就软件产品登记测试开展了合作，测试报告由中国软件评测中心出具并加盖公章",
      "软件产品登记测试是指检测机构按照委托方提供的测试功能点，对其指定的软件产品进行功能性的检测和验证，确保这些功能都得以实现并能正常运行。",
      "测试后出具的报告是申请软件企业认定和增值税退税政策的必须材料。"
    ],
    [
      "本中心受河南省科技厅委托，为各企业和大专院校的软件产品提供“科技成果鉴定”软件项目的测试服务。我中心对申报科技成果的软件产品从技术和应用的角度进行全面的质量评测，出具的测评报告作为申报科技成果的依据。",
      "软件项目在成果鉴定报科技部审核登记后，可以申请享受例如：奖项申报、减免税、科技贷款、高新技术企业等国家优惠政策。"
    ],
    [
      "首先，对客户测试团队的人员、业务、技术能力等多方面进行了解并分析；其次，针对客户测试团队（或者没有测试团队）的现状，制定测试体系建立的方案，并进行详细的分解；最后，根据和客户确认后的测试体系建立方案，进行人员的分工、测试技术培训、测试方法和测试流程的建立和实施，由客户方评定是否达到了方案的预期效果。"
    ]
  ];
}
</script>
<style lang="less" scoped>
.software-test {
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
  .scope {
    padding: 15px 18%;
    width: calc(100% - 36%);
    margin-bottom: 60px;
    background: url(../assets/img/bg-scopen.jpg) no-repeat;
    padding-bottom: 130px;
    height: 500px;
    text-align: center;
    color: white;
    .tab-view {
      width: 100%;
      height: calc(100% - 108px);
      background-color: white;
      display: flex;
      .tabs {
        display: inline-block;
        width: 25%;
        height: 100%;
        // position: absolute;
        // top: 0;
        // left: 0;
        flex: 0.25;
        .tab1,
        .tab2,
        .tab3 {
          height: calc(100% / 3);
          width: 100%;
          cursor: pointer;
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          .tab-item {
            display: block;
            flex: 1;
            height: initial;
            .icon {
              font-size: 32px;
              display: block;
            }
          }
        }
        .tab1,
        .tab3 {
          background-color: #2f4057;
        }
        .tab2 {
          background-color: #374b65;
        }
        .active {
          background: linear-gradient(to right, #0457b7, #1f99f7);
        }
      }
      .tab-content {
        height: 100%;
        flex: 0.75;
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
        justify-content: center;
        .content-item {
          font-size: 16px;
          line-height: 30px;
          color: #666;
          text-align: left;
          text-indent: 2em;
          padding: 0 30px;
        }
      }
    }
  }
  .test {
    background: url(../assets/img/test.png) no-repeat;
    height: 700px;
  }
  .advantages {
    padding: 15px 18%;
    width: calc(100% - 36%);
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
    .text-content {
      width: 100%;
      font-size: 16px;
      line-height: 34px;
      text-align: center;
    }
  }
}
</style>
