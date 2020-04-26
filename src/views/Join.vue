<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img03-1.jpg')"
      title="加入我们"
      content="专业的职业生涯规划、 明确的晋升通道及专业培训， 使您获得快速成长。与伯乐共谋， 与千里马共赢"
    />
    <div class="row-content">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8" class="border">
          <div class="big-icon">
            <img src="../assets/img/用户3.png" />
          </div>
          <b class="text-content">
            <b class="b">|</b>
            大客户销售经理
          </b>
          <p style="font-weight:bold ">
            技能要求：
          </p>
          <p style="color:#999;  font-size: 13px;">行业经验，软件产品销售</p>
          <b>职位描述：</b>
          <ol style="color:#999;">
            <li>
              重点开拓业务流程自动化（RPA，OCR）相关行业客户；
            </li>
            <li>
              具有电商行业，金融行业，物流行业，或者制造业相关软件系统集成销售经验；
            </li>
            <li>
              熟练掌握客户开拓的销售业务流程；
            </li>
            <li>定期拜访客户，维护好客户关系，稳定跟客户的良好合作关系；</li>
            <li>完成个人年度计划业务指标（到账额、利润率、合同额）；</li>
            <li>完成主管领导分配的其他日常性工作。</li>
          </ol>
          <p style="font-weight:bold ">
            任职要求：
          </p>
          <ol style="color:#999;">
            <li>
              大学专科以上学历，计算机相关专业；
            </li>
            <li>本科学历，计算机相关专业，2年以上Python经验；</li>
            <li>精通Python相关技术；</li>
            <li>有RPA相关二次开发经验更好;</li>
            <li>熟悉java相关技术特别是spring mvc架构和spring cloud架构；</li>
            <li>熟悉js，jquery等相关脚本技术；</li>
            <li>团队意识强，有沟通能力。</li>
          </ol>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8" class="border">
          <div class="big-icon">
            <img src="../assets/img/用户2.png" />
          </div>
          <b class="text-content">
            <b class="b">|</b>
            PRA项目经理
          </b>
          <p style="font-weight:bold ">
            技能要求：
          </p>
          <p style="color:#999;  font-size: 13px;">
            需求分析，解决方案，数据库，过程管理，项目管理
          </p>
          <b>职位描述：</b>
          <ol style="color:#999;">
            <li>
              配合销售人员承接项目，负责与合作项目客户的沟通、协调工作，及时掌握客户动态及需求变更，项目开发中遇到的技术问题；
            </li>
            <li>
              领导所负责项目的开发工作，对项目开发成效（质量、进度、成本）及客户满意度负最终责任；
            </li>
            <li>
              实时收集、整理项目开发工作成效数据，为项目评估、项目计划、项目考核等方面的决策提供数据资源；
            </li>
            <li>参与公司新承接（或新立项）项目的工作量、工作难度评审工作；</li>
            <li>负责项目交付（纳品）工作，及售后服务的组织、协调工作。</li>
            <li>制定项目开发计划，领导项目组成员按计划完成开发任务；</li>
          </ol>
          <p style="font-weight:bold ">
            任职要求：
          </p>
          <ol style="color:#999;">
            <li>
              大学专科以上学历，计算机相关专业；
            </li>
            <li>本科学历，计算机相关专业，2年以上Python经验；</li>
            <li>精通Python相关技术；</li>
            <li>有RPA相关二次开发经验更好;</li>
            <li>熟悉java相关技术特别是spring mvc架构和spring cloud架构；</li>
            <li>熟悉js，jquery等相关脚本技术；</li>
            <li>团队意识强，有沟通能力。</li>
          </ol>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8" class="border">
          <div class="big-icon">
            <img src="../assets/img/用户.png" />
          </div>
          <b class="text-content">
            <b class="b">|</b>
            RPA开发、实施工程师
          </b>
          <p style="font-weight:bold ">
            技能要求：
          </p>
          <p style="color:#999;  font-size: 13px;">
            Python，docker，python爬虫，抓取，数据采集，JS
          </p>
          <b>职位描述：</b>
          <ol style="color:#999;">
            <li>
              负责RPA机器人流程自动化项目的开发、配置、实施工作，参与公司RPA相关项目
              ；
            </li>
            <li>负责python脚本的开发，以满足业务需求 ；</li>
            <li>负责项目需求前期沟通，并设计流程图形成需求文档 。</li>
          </ol>
          <p style="font-weight:bold ">
            任职要求：
          </p>
          <ol style="color:#999;">
            <li>
              大学专科以上学历，计算机相关专业；
            </li>
            <li>熟练掌握python编程语言；</li>
            <li>具备良好的分析和解决问题能力；</li>
            <li>有良好的程序流程设计理念；</li>
            <li>熟悉常用的linux命令，sql脚本命令；</li>
            <li>有RPA相关开发者经验优先；</li>
            <li>能够接受出差；</li>
          </ol>
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
    border-bottom: 1px solid #ededed;
    width: 80%;
  }
  .row-content {
    padding: 40px 150px 30px 150px;
  }
  .big-icon img {
    height: 70px;
    width: 70px;
    padding-top: 40px;
  }
  .big-icon {
    width: 120px;
    height: 120px;
    margin: 0px;
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 70px;
      line-height: 120px;
      width: 200px;
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
