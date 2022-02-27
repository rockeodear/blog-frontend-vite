<template>
  <div class="index">
    <div class="main-container">
      <component :is="Banner" class="banner" />
      <component :is="RecommendCategories" class="recommend-categories" />
      <component :is="ArticleColumn" class="article-column" />
    </div>
    <div class="side-container wow slideInLeft">
      <component :is="Profile" class="profile" />
      <component :is="Notice" class="profile" />
      <component :is="TimeCountdown" class="profile" />
    </div>
  </div>
</template>

<script setup>
import Banner from './components/banner.vue'
import RecommendCategories from './components/recommend-categories.vue'
import ArticleColumn from './components/article-column.vue'
import Profile from './components/profile.vue'
import Notice from './components/notice.vue'
import TimeCountdown from './components/time-countdown.vue'

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
    //background-color: #f8f8f8;
    //border-radius: 10px;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    //margin: 10px 5px;
    width: 25%;
  }
}
</style>
