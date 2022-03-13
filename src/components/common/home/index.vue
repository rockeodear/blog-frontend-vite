<template>
  <div class="index">
    <div class="main-container">
      <router-view></router-view>
    </div>
    <div class="side-container wow slideInLeft">
      <component :is="Profile" class="profile" />
      <component :is="Notice" class="profile" />
      <component :is="TimeCountdown" class="profile" />
    </div>
  </div>
</template>

<script setup>
import Profile from 'components/common/profile/index.vue'
import Notice from 'components/common/notice/index.vue'
import TimeCountdown from 'components/common/time-countdown/index.vue'

import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;
  width: 78%;

  .main-container {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: #f8f8f8;
    margin: 10px 5px;
    width: 75%;
  }

  .side-container {
    margin: 10px 5px;
    width: 25%;
  }
}
</style>
