<template>
  <div class="index">
    <el-carousel class="carousel" trigger="click" :height="`${imgHeight}px`">
      <el-carousel-item
        class="carousel-item"
        v-for="item in 2"
        :key="item"
        arrow="never"
      >
        <el-image
          class="image"
          fit="none"
          :src="require(`../assets/img/banner-index-${item}.jpg`)"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="first-section">
      <p class="title">专业优质的软件与服务</p>
      <p class="sub-title">
        提供专业的软件外包、软件定制开发、第三方软件测试、移动信息化等服务
      </p>
      <el-row class="icons" :gutter="15" type="flex" justify="space-around">
        <el-col :span="6">
          <div class="icon-item">
            <div class="item-title">
              <i class="el-icon-suitcase-1 icon"></i>
              <div class="title-content">
                <p class="title">软件外包服务</p>
                <p class="sub-title">Software outsourcing</p>
              </div>
            </div>
            <p class="content">
              通过我公司提供的离岸、在岸作业，为客户提供软件服务，使客户的企业价值得到最大的发挥。
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon-item">
            <div class="item-title">
              <i class="el-icon-mouse icon"></i>
              <div class="title-content">
                <p class="title">定制开发</p>
                <p class="sub-title">Custom software</p>
              </div>
            </div>
            <p class="content">
              为客户提供从咨询、需求分析、设计、开发、测试、实施、培训、维护到跟踪支持等全程服务。
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon-item">
            <div class="item-title">
              <i class="el-icon-odometer icon"></i>
              <div class="title-content">
                <p class="title">软件测试服务</p>
                <p class="sub-title">Software test</p>
              </div>
            </div>
            <p class="content">
              河南省最早从事软件测试的专业机构，通过国家级软件测试实验室的认可，拥有公平、公正独立的第三方软件评测资质。
            </p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="icon-item">
            <div class="item-title">
              <i class="el-icon-cpu icon"></i>
              <div class="title-content">
                <p class="title">软件实训</p>
                <p class="sub-title">Software training</p>
              </div>
            </div>
            <p class="content">
              八六三软件已为IT行业输送了数万名优秀的软件人才，结业学员首份工作进入软件工程师行列的比例超过90%以上。
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="service-area">
      <p class="title">成熟、领先的产品与解决方案</p>
      <p class="sub-title">
        针对不同客户需求提供更多个性化服务，以此保证产品在技术和用户体验上的领先地位，为客户创造核心价值
      </p>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">大数据</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-money" />
          <p class="font">金融</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-fork-spoon" />
          <p class="font">餐饮</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-first-aid-kit" />
          <p class="font">医疗</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-reading" />
          <p class="font">教育</p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <i class="icon el-icon-office-building" />
          <p class="font">智慧城市</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-data-board" />
          <p class="font">会展服务</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-truck" />
          <p class="font">物流</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-sell" />
          <p class="font">电商</p>
        </el-col>
        <el-col :span="4" class="item">
          <i class="icon el-icon-suitcase-1" />
          <p class="font">电子政务</p>
        </el-col>
      </el-row>
    </div>
    <div class="row">
      <p class="title">专业、可靠的合作伙伴</p>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb01.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb02.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb03.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb04.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb05.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb06.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb07.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb08.jpg" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb09.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb10.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb11.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb12.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb13.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb14.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb15.jpg" />
        </el-col>
        <el-col :span="4" class="item">
          <img src="../assets/img/img-hb16.jpg" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Index extends Vue {
  get imgHeight(): number {
    const screenHeight: number =
      document.documentElement.clientHeight || document.body.clientHeight;
    const result: number = screenHeight * (420 / 1080);
    console.log(result);
    return result;
  }
}
</script>
<style lang="less" scoped>
@import "../less/variables.less";
.index {
  .carousel {
    .carousel-item {
      .image {
        height: inherit;
        width: 100%;
        background-color: black;
      }
    }
  }
  .row {
    padding: 40px 150px 30px 150px;
  }
  .title {
    line-height: 48px;
    font-size: 36px;
    text-align: center;
    margin-bottom: 60px;
  }
  .sub-title {
    text-align: center;
    color: #606266;
    padding-bottom: 30px;
  }
  .first-section {
    padding: @content-area-padding;
    padding-bottom: 15px;
    .icons {
      .icon-item {
        display: block;
        i.icon {
          display: inline-block;
          width: initial;
          margin-right: 10px;
        }
        .content {
          font-size: 14px;
          line-height: 24px;
          color: #666;
          // text-indent: 2em;
        }
        .item-title {
          .icon {
            font-size: 48px;
            color: #0457b7;
            display: inline-block;
            line-height: 100%;
            margin: 4px auto;
            margin-right: 10px;
          }
          .title-content {
            display: inline-block;
            width: initial;
            .title,
            .sub-title {
              padding: 0;
              margin: 0;
              text-align: left;
            }
            .title {
              font-size: 18px;
              line-height: 36px;
            }
            .sub-title {
              font-size: 14px;
              line-height: 18px;
            }
          }
        }
      }
    }
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
}
</style>
