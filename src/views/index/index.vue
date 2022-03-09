<template>
  <div class="index">
    <div class="main-container">
      <component :is="Banner" class="banner" />
      <component :is="RecommendCategories" class="recommend-categories" />
      <component :is="ArticleColumn" class="article-column" />
    </div>
  </div>
</template>

<script setup>
import Banner from './components/banner.vue'
import RecommendCategories from './components/recommend-categories.vue'
import ArticleColumn from './components/article-column.vue'
import Profile from 'components/common/profile/index.vue'
import Notice from 'components/common/notice/index.vue'
import TimeCountdown from 'components/common/time-countdown/index.vue'

import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;

  .main-container {
    width: 100%;
  }
}
</style>
