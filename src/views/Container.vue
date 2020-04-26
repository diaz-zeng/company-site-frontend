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
              <el-menu-item index="/solutions/rpa">业务流程自动化</el-menu-item>
              <el-menu-item index="/solutions/internet"
                >工控设备物联网</el-menu-item
              >
              <el-menu-item index="/solutions/sys"
                >流程行业系统集成</el-menu-item
              >
              <!-- <el-submenu index="3-4">
                <template slot="title">智慧产业</template>
                <el-menu-item index="3-4-1">智慧校园（中小学）</el-menu-item>
                <el-menu-item index="3-4-2">智慧园区</el-menu-item>
                <el-menu-item index="3-4-3">智慧水务</el-menu-item>
                <el-menu-item index="3-4-3">智慧环保</el-menu-item>
              </el-submenu> -->
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <span class="title">软件服务</span>
              </template>
              <el-menu-item index="/service/cooperation">联系我们</el-menu-item>
              <el-menu-item index="/service/join">加入我们</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="no-padding">
      <router-view />
    </el-main>
    <el-footer class="footer" height="300px">
      <el-row>
        <el-col :span="4">
          <p class="title">关于我们</p>
          <el-link class="link" type="info" :underline="false" href="/about"
            >企业介绍</el-link
          >
        </el-col>
        <el-col :span="4">
          <p class="title">软件服务</p>
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/service/custom_software"
            >软件定制开发</el-link
          >
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/service/software_outsourcing"
            >全球软件外包</el-link
          >
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/service/software_test"
            >软件测试及第三方认证测试</el-link
          >
        </el-col>

        <el-col :span="4">
          <p class="title">行业解决方案</p>
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/solutions/rap"
            >业务流程自动化</el-link
          >
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/solutions/internet"
            >工控设备物联网</el-link
          >
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/solutions/sys"
            >流程行业系统集成</el-link
          >
        </el-col>
        <el-col :span="4">
          <p class="title">软件服务</p>
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/service/cooperation"
            >联系我们</el-link
          >
          <el-link
            class="link"
            type="info"
            :underline="false"
            href="/service/join"
            >加入我们</el-link
          >
        </el-col>
      </el-row>
    </el-footer>
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
.el-menu.el-menu--horizontal {
  border-bottom: solid 1px #e6e6e6;
  width: 600px;
  left: 100px;
}
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
      margin: 10px 10%;
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
          margin-right: -20px;
          left: -20px;
          top: -5px;
        }
      }
    }
  }
  .footer {
    background-color: #2e3033;
    padding: @content-area-padding;
    padding-top: 15px;
    color: white;
    .el-col-4 {
      width: 25%;
    }
    .title {
      font-size: 16px;
      margin-bottom: 12px;
    }
    .link {
      display: block;
      line-height: 28px;
    }
  }
}
</style>
