<template>
  <div class="archive">
    <common-title label="文章归档" :level="1">
      <span>文章归档</span>
    </common-title>
    <common-title label="分类" :level="2">
      <span>&nbsp;</span>
      <span>分类</span>
    </common-title>
    <div class="category-list">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommonTitle from 'components/common/title/index.vue'
import { ref } from 'vue'

const categoryList = ref([
  {
    id: 1,
    name: 'Redis',
    count: 5,
  },
  {
    id: 2,
    name: '算法',
    count: 10,
  },
  {
    id: 3,
    name: '线程池',
    count: 21,
  },
  {
    id: 4,
    name: 'JVM',
    count: 13,
  },
  {
    id: 5,
    name: '源码分析',
    count: 60,
  },
  {
    id: 6,
    name: 'Dubbo',
    count: 28,
  },

  {
    id: 7,
    name: '思考感悟',
    count: 61,
  },
  {
    id: 8,
    name: '八股文',
    count: 53,
  },
  {
    id: 9,
    name: '荒腔走板',
    count: 57,
  },
])
</script>

<style lang="scss" scoped></style>
