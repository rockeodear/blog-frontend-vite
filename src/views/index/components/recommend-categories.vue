<template>
  <div>
    <div class="title">
      精品分类
    </div>
    <el-divider></el-divider>
    <div class="recommend-categories">
      <div class="categories-item" v-for="item in categoriesList" :key="item.id + '-categories'">
        <div class="category-image" :style="{ 'background-image': `url(${item.cover})` }">
          <div class="category-temperature">{{ item.temperature }}℃</div>
          <div class="category-name">
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const demoCover = 'https://img2.baidu.com/it/u=3058284889,2096427296&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'

const categoriesList = ref([
  {
    id: 1,
    name: '思考感悟',
    temperature: 61,
    cover: demoCover,
  },
  {
    id: 2,
    name: '源码分析',
    temperature: 64,
    cover: demoCover,
  },
  {
    id: 3,
    name: '荒腔走板',
    temperature: 88,
    cover: demoCover,
  },
  {
    id: 4,
    name: '八股文',
    temperature: 52,
    cover: demoCover,
  },
])

const getStyle = uri => {
  return `background-image:url(${uri}) no-repeat`
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 0.9rem;
  color: #ff6c07;
  padding-left: 0.8rem;
}

.recommend-categories {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  & > .categories-item {
    padding: 0 2px;
  }

  .category-image {
    position: relative;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    .category-name {
      color: white;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }
    .category-temperature {
      background-image: linear-gradient(to right, #fc712a, #f84c39);
      border-radius: 80px;
      display: block;
      font-size: 0.68rem;
      z-index: 90;
      color: white;
      padding: 0 8px;
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
}

@media screen and (min-width: 600px) {
  .categories-item {
    width: 25%;
    height: 120px;

    .category-image {
      height: 100%;
      width: 100%;
    }
  }
}

@media screen and (max-width: 600px) {
  .categories-item {
    width: 33%;
    height: 100px;

    .category-image {
      height: 100%;
      width: 100%;
    }
  }
}

::v-deep .el-divider--horizontal {
  margin: 10px 0 5px 0;
}
</style>
