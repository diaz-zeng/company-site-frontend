<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img06.jpg')"
      title="联系我们"
      content="为客户提供专业、优质的服务"
    />
    <div class="row-content">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="24">
          <div class="big-icon">
            <i class="el-icon-phone-outline"></i>
          </div>
          <p class="text-content">
            <b class="b">|</b>
            韩女士
          </p>
          <p style="color:#999;">电话：021-64026685</p>
          <p style="color:#999;">邮箱：dataplus@863soft.com</p>
        </el-col>
      </el-row>
    </div>

    <div class="map">
      <div class="map-text">
        <p class="text-top"><b class="b">|</b> 公司地址</p>
        <p class="text">上海市闵行区陈行公路2388号浦江科技广场5号楼11层W08</p>
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
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
  .row-content {
    padding: 40px 150px 30px 150px;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #ededed;
  }

  .big-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
    i {
      font-size: 70px;
      line-height: 120px;
      width: 120px;
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
