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
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-medal"></i>
          </div>
          <p class="text-content">
            稳定敬业的人才队伍
          </p>
          <p class="text-content">
            从事外包业务人员流失率每年都小于6%，且项目进行中没有出现过人员流失的现象。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-copy-document"></i>
          </div>
          <p class="text-content">
            专业的需求分析和系统设计能力
          </p>
          <p class="text-content">
            技术以Java、.NET为主流开发语言，除一般的商业应用外，也多次成功主导框架、基盘的设计构建。
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#f2764b;">
            <i class="el-icon-discover"></i>
          </div>
          <p class="text-content">
            缜密的安全管理体系
          </p>
          <p class="text-content">
            按照IS027001标准的要求，严格实施信息安全监察制度，提高员工安全意识教育，充分保障了公司在开...
          </p>
        </el-col>
      </el-row>
      <el-col :span="8">
        <div class="big-icon" style="background-color:#597cff;">
          <i class="el-icon-user"></i>
        </div>
        <p class="text-content">
          专业的对日软件外包团队
        </p>
        <p class="text-content">
          拥有一批在日工作多年，熟悉日本文化和软件开发管理流程的资深人员。相近的思维方式和流畅的沟通，使得对...
        </p>
      </el-col>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#fdbf3a;">
            <i class="el-icon-trophy"></i>
          </div>
          <p class="text-content">
            有保障的后备人才来源
          </p>
          <p class="text-content">
            公司设有专门的岗前实训业务，学员均已具备专科以上学历，经过短期的软件开发技术和专业日语培训后择优录...
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-circle-check"></i>
          </div>
          <p class="text-content">
            高效的人才对应体系
          </p>
          <p class="text-content">
            拥有一支高效对应及专长能力的开发团队，对于有迫切需求及需求种类多样的客户，我们会第一时间予以满意的...
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-circle-check"></i>
          </div>
          <p class="text-content">
            高运营成本低
          </p>
          <p class="text-content">
            郑州市通讯基础条件位居中国各大城市前列，到北京和上海的飞行时间不超过80分钟，企业的运营成本平均比...
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-circle-check"></i>
          </div>
          <p class="text-content">
            严格的过程与质量管理体系
          </p>
          <p class="text-content">
            参照CMMI规范及日本软件开发特点，制定符合离岸开发的质量管理体系、科学管理项目流程，并具备品质第...
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
export default class SoftwareOutsourcing extends Vue {
  private content: string[] = [
    "河南八六三软件股份有限公司是河南省服务外包示范企业、是中国内地最大的软件外包企业之一，拥有一支稳定的人才队伍。现有技术人员600多名，主要掌握Java系列(Java语言，J2EE等)开发技术、Microsoft系列(VC++，VB，C#，.Net，ASP等)开发技术、Android、iOS、PHP、COBOL以及Hadoop等技术。",
    "我们目前主要的业务范围有需求、设计、开发、测试、维护等工作，通过我公司提供的离岸、在岸作业，为客户提供软件服务，使客户的企业价值得到最大的发挥。",
    "随着公司业务规模的不断壮大和发展，目前已与诸多国内外知名企业建立了长期稳定的业务合作关系，主要客户有京瓷、NTT DATA、NEC、Hitachi、中信银行、中原银行、浦发银行、郑州大学、信息工程大学、宇通集团等。我们的外包项目组遍布日本、北京、上海、杭州、南京、无锡等地"
  ];
}
</script>
<style lang="less" scoped>
.software-outsourcing {
  .title {
    line-height: 48px;
    font-size: 36px;
    text-align: center;
    margin-bottom: 60px;
  }
  .service-area {
    padding: 15px 18%;
    width: calc(100% - 36%);
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
