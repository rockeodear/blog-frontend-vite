<template>
  <div class="article-list">
    <div v-for="item in list" :key="item.id" class="item">
      <article-item :article="item" :show-tag="showTag" />
      <el-divider></el-divider>
    </div>
    <div class="bottom-tip">
      <div v-if="hasMore && !loading" class="loading-more" @click="loadMore">查看更多</div>
      <div v-if="!hasMore && !loading" class="no-more">没有更多了</div>
      <div v-if="loading" class="loading">正在加载中</div>
    </div>
  </div>
</template>

<script setup>
import ArticleItem from 'components/common/article-item/index.vue'
import { computed, ref } from 'vue'
const page = ref({
  pageNum: 1,
  pageSize: 20,
  total: 60,
})

const loading = ref(false)

const props = defineProps({
  list: {
    type: Array,
    default() {
      return []
    },
  },
  showTag: {
    type: Boolean,
    default: false,
  },
})

const hasMore = computed(() => {
  return page.value.total > page.value.pageSize * page.value.pageNum
})

const loadMore = () => {
  if (hasMore.value) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)
    page.value.pageNum += 1
  } else {
    console.log('no more')
  }

  console.log(page.value.pageNum)
}
</script>

<style lang="scss" scoped>
.article-list {
  width: 100%;
  margin-bottom: 10px;

  .bottom-tip {
    text-align: center;
    cursor: pointer;

    .no-more {
      cursor: default;
    }
  }
}
</style>
