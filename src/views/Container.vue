<template>
  <el-container class="container-main">
    <el-header class="header no-padding">
      <el-row class="header-rows">
        <el-col :span="4" class="logo-col">
          <el-image
            fit
            :src="require('@/assets/logo.png')"
            @click="gotoIndex"
            class="logo"
          />
        </el-col>
        <el-col :span="20">
          <el-menu
            mode="horizontal"
            text-color="#777777"
            active-text-color="#0457b7"
            router
          >
            <el-menu-item index="/about">
              <template slot="title">
                <span class="title">关于我们</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <span class="title">软件服务</span>
              </template>
              <el-menu-item index="/service/custom_software"
                >软件定制开发</el-menu-item
              >
              <el-menu-item index="/service/software_outsourcing"
                >全球软件外包</el-menu-item
              >
              <el-menu-item index="/service/software_test"
                >软件测试及第三方认证测试</el-menu-item
              >
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span class="title">行业解决方案</span>
              </template>
              <el-menu-item index="3-1"
                >业务流程自动化（RPA，AI，BPM）</el-menu-item
              >
              <el-menu-item index="3-2"
                >工控设备物联网（数据采集，远程监控，资产管理，数据分析）</el-menu-item
              >
              <el-menu-item index="3-3">流程行业系统集成</el-menu-item>
              <el-submenu index="3-4">
                <template slot="title">智慧产业</template>
                <el-menu-item index="3-4-1">智慧校园（中小学）</el-menu-item>
                <el-menu-item index="3-4-2">智慧园区</el-menu-item>
                <el-menu-item index="3-4-3">智慧水务</el-menu-item>
                <el-menu-item index="3-4-3">智慧环保</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="4">
              <template slot="title">
                <span class="title">行业案例</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5">
              <template slot="title">
                <span class="title">商务合作</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="no-padding">
      <router-view />
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Container extends Vue {
  gotoIndex(): void {
    if (this.$route.path !== "/") {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="less">
@import "../less/variables.less";
// * {
//   font-family: "Meiryo UI Bold Italic", "Meiryo UI Regular", "Meiryo UI" !important;
// }
body {
  margin: 0 !important;
}
.container-main {
  .no-padding {
    padding: 0 !important;
  }
  .header {
    margin-bottom: 20px;
    .header-rows {
      margin: 10px 18%;
      // font-weight: bold !important;
      .title {
        font-size: @header-font-size !important;
        margin: 0 10px;
      }
      .logo-col {
        .logo {
          :hover {
            cursor: pointer;
          }
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
