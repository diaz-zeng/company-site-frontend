<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img05.jpg')"
      title="工控设备物联网"
      content="数据采集 · 远程监控 · 资产管理 · 数据分析"
    />
    <briefing
      title="业务介绍"
      :content="content"
      :src="require('../assets/img/proposal5.png')"
    />
    <div class="advantages">
      <p class="title">产品特性</p>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#77dce7;">
            <i class="el-icon-coordinate"></i>
          </div>
          <b class="text-content">多协议</b>
          <p class="text-content">兼容主流PLC、HMI、仪器仪表 等通讯协议</p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#59afff;">
            <i class="el-icon-monitor"></i>
          </div>
          <b class="text-content">远程诊断</b>
          <p class="text-content">
            支持对主流PLC、HMI等网络设备进行远程上下载程序、远程调试
          </p>
        </el-col>
        <el-col :span="8">
          <div
            class="big-icon"
            style="background-color:rgba(236, 69, 69, 0.85);"
          >
            <i class="el-icon-monitor"></i>
          </div>
          <b class="text-content">整体感知</b>
          <p class="text-content">
            可以利用射频识别、二维码、智能传感器等感知设备感知获取物体的各类信息
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="big-icon" style="background-color:#597cff;">
            <i class="el-icon-mobile"></i>
          </div>
          <b class="text-content">边缘计算</b>
          <p class="text-content">
            数据按需发送，且经过严格的数据压缩，极大的降低了数据流量，提高了刷新效率
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#fdbf3a;">
            <i class="el-icon-bell"></i>
          </div>
          <b class="text-content">数据安全</b>
          <p class="text-content">
            硬件密钥身份识别、P2P远程安全通讯、RSA数据加密
          </p>
        </el-col>
        <el-col :span="8">
          <div class="big-icon" style="background-color:#5fdb7e;">
            <i class="el-icon-star-off"></i>
          </div>
          <b class="text-content">数据开放</b>
          <p class="text-content">支持通过MQTT协议对接第三方平台</p>
        </el-col>
      </el-row>
    </div>
    <div class="row-content">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="12" class="border">
          <p class="text-content">
            <i class="el-icon-edit icon"></i>
            <b class="b">|</b>
            数据采集
          </p>
          <p style="color:#999;">
            集成多种PLC、HMI等设备协议的数据采集网关，用于采集、处理数据并传送至服务器端
          </p>
        </el-col>
        <el-col :span="12" class="border">
          <p class="text-content">
            <i class="el-icon-help icon"></i>
            <b class="b">|</b>
            大数据分析平台
          </p>
          <p style="color:#999;">
            交互式的统计分析报表引擎，只需拖、拉、拽即可完成丰富多样的统计分析报表
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="12" class="border">
          <p class="text-content">
            <i class="el-icon-setting icon"></i>
            <b class="b">|</b>
            故障诊断、维护平台
          </p>
          <p style="color:#999;">
            采用P2P的数据通讯技术，轻松的实现对PLC、HMI等设备进行远程上下载程序、远程诊断、维护等
          </p>
        </el-col>
        <el-col :span="12" class="border">
          <p class="text-content">
            <i class="el-icon-scissors icon"></i>
            <b class="b">|</b>
            DIY数据展示平台
          </p>
          <p style="color:#999;">
            根据自身实际需求，可随意DIY自己想要的监控画面，只需拖、拉、拽即可完成丰富多样的信息化展示界面
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="kuan">
      <div class="rows">
        <el-row :gutter="30" type="flex" justify="space-around">
          <el-col :span="12" class="border">
            <div class="img">
              <img src="../assets/img/img-affairs03.jpg" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="wenben">
              <p>
                <b class="b">|</b>
                智能网关是作为连接设备入网的边缘计算网关，是物联网平台中的远程通讯设备，用于实现自动化设备的数据采集、远程PLC程序下载及故障诊断等。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="rows">
        <el-row :gutter="30" type="flex" justify="space-around">
          <el-col :span="12" class="border">
            <div class="img">
              <img src="../assets/img/img-affairs02.jpg" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="wenben">
              <p>
                <b class="b">|</b>
                SaaS云平台是一个以设备数据采集、企业业务集成为目标，实现设备管理、运维，在线诊断等多维度、多元数据的融合应用，提供设备监控，数据建模，数据分析、数字化业务集成，组态应用开发和分析服务，以集成化、数字化、智能化赋能于企业数字化的智慧平台
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
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
    "为客户提供基于“数据采集网关”、“协议驱动”、“边缘计算引擎”产品的设备上网服务为客户提供基于“数据采集网关”、“协议驱动”、“边缘计算引擎”产品的设备上网服务。基于SaaS云平台为客户提供包括设备远程监控，数据分析等基础服务，帮助客户迅速实现设备上云，数据上云的业务目标。提供基于SaaS云平台的可选业务增值服务（固定资产管理，智能维保等），助力客户实现数据驱动的全业务流程的数字化转型目标。"
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
  .kuan {
    width: @content-area-width;
    padding: @content-area-padding;
    margin: 50px 0;
    .rows {
      margin: 30px 0;
      .wenben {
        width: 100%;
        font-size: 16px;
        height: 100%;
        line-height: 24px;
        color: #999;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-flow: column;
      }
      .img {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-content: center;
      }
    }
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
    background-color: #f3f3f3;

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
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 34px;
      text-align: center;
    }
  }
  .row-content {
    padding: @content-area-padding;
    border-right: 1px solid #eee;
  }
  .big-icon {
    width: 30px;
    height: 30px;
    margin: inherit;
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 36px;
      line-height: 40px;
      width: 120px;
      text-align: left;
      color: #0457b7;
    }
    .text-content {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  }
  .border {
    border-left: 1px solid #eee;
  }
  .b,
  .icon {
    color: #0457b7;
  }
  .text-content {
    width: 100%;
    font-size: 24px;
    text-align: left;
    line-height: 32px;
    .icon {
      font-size: 24x;
    }
    b {
      font-size: 32px;
    }
  }
}
</style>
