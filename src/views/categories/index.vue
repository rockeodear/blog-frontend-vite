<template>
  <div class="categories">
    <common-title label="文章归档" :level="1">
      <span>全部分类</span>
    </common-title>
    <div class="category-list">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <div class="image" :style="{ 'background-image': `url(${item.cover})` }">
          <div
            class="temperature"
            :style="{ 'background-image': `linear-gradient(to right, ${calculateColor(item.count)})` }"
          >
            {{ item.count }}℃
          </div>
        </div>
        <span class="demonstration">Default</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommonTitle from 'components/common/title/index.vue'
import { computed, onMounted, ref } from 'vue'

const categoryList = ref([])

const uri = 'https://img0.baidu.com/it/u=1954684835,432934332&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    categoryList.value.push({
      id: i + 1,
      name: '学呀学习',
      cover: uri,
      count: (22 * (i + 1)) % 200,
    })
  }
})

const topTemperature = computed(() => {
  let list = categoryList.value.map(item => item.count)
  return Math.max(...list)
})

/// 根据热度计算颜色

const calculateColor = hot => {
  let total = topTemperature.value
  if (hot < total * 0.25) {
    return '#78c679, #41b6c5'
  }
  if (hot < total * 0.5) {
    return '#fde58e, #fc9928'
  }
  if (hot < total * 0.75) {
    return '#fdaf68, #f06917'
  }
  return '#fc712a, #f84c39'
}
</script>

<style lang="scss" scoped>
.categories {
  padding: 10px 15px;
  margin: 10px auto;

  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .category-item {
      width: 150px;
      margin: 15px 10px 0 10px;

      .image {
        width: 100%;
        height: 100px;
        position: relative;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;

        .temperature {
          background-image: linear-gradient(to right, #fc712a, #f84c39);
          border-radius: 80px;
          display: block;
          font-size: 0.66rem;
          z-index: 90;
          color: white;
          padding: 0 8px 1px 8px;
          position: absolute;
          top: 5px;
          right: 5px;
        }
      }

      .demonstration {
        display: block;
        padding: 5px 0;
        text-align: center;
        color: var(--el-text-color-secondary);
        font-size: 0.8rem;
      }
    }
  }
}
</style>
