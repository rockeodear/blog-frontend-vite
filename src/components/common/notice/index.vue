<template>
  <div class="notice side-item">
    <common-title label="公告信息" :level="1">
      <svg-icon name="notice" :size="20" />
      <span>&nbsp;</span>
      <span>公告信息</span>
    </common-title>
    <div class="content">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CommonTitle from 'components/common/title/index.vue'

const message = ref('韩非子有言,国小而不处卑,力少而不畏强,无礼而侮大邻,贪愎而拙交者,可亡也。')
</script>

<style lang="scss" scoped>
.notice {
  padding: 5px;

  .title {
    padding: 10px;
    font-weight: 550;
  }
  .content {
    padding: 5px;
    font-weight: 350;
    color: #4b4b4b;
    font-size: 0.9rem;
    line-height: 1.5;
  }
}
</style>
