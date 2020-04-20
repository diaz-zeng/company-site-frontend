<template>
  <div class="custom-software">
    <page-header
      :src="require('../assets/img/banner-img06.jpg')"
      title="联系我们"
      content="为客户提供专业、优质的服务"
    />
    <briefing title="什么是RPA" />
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
<style lang="less" scoped></style>
