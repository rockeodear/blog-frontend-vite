<template>
  <div class="notice side-item">
    <div class="title">
      <svg-icon name="notice" :size="24" />
      <span>公告信息</span>
    </div>
    <div class="content">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
