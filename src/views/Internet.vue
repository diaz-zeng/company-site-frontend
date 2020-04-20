<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img05.jpg')"
      title="工控设备物联网"
      content="数据采集 · 远程监控 · 资产管理 · 数据分析"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageHeader from "@/components/PageHeader.vue";
import Briefing from "@/components/Briefing.vue";
@Component({ components: { PageHeader, Briefing } })
export default class CustomSoftware extends Vue {}
</script>
<style lang="less" scoped></style>
