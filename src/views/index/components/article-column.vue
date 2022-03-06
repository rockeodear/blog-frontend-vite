<template>
  <div class="article-column">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabList" :key="tab.value" :label="tab.label" :name="tab.value">
        <article-list show-tag :list="articleList" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArticleList from 'components/common/article-list/index.vue'

const tabList = [
  {
    label: '最新文章',
    value: 'new',
  },
  {
    label: '热门文章',
    value: 'hot',
  },
  {
    label: '精选文章',
    value: 'selective',
  },
]

const page = ref({
  pageNum: 1,
  pageSize: 20,
  total: 0,
})
const activeName = ref('new')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const articleList = ref([
  {
    id: 1,
    title: '一个Demo文章例子，不可以点的哦...',
    cover: '',
    profile: '嘿嘿嘿嘿嘿嘿',
    onTop: true,
    likeCount: 100,
    replyCount: 20,
    viewCount: 895,
    insertAt: '2022-01-01',
  },
  {
    id: 1,
    title: '一个Demo文章例子，不可以点的哦...',
    cover: '',
    profile: '嘿嘿嘿嘿嘿嘿',
    onTop: false,
    likeCount: 100,
    replyCount: 20,
    viewCount: 895,
    insertAt: '2022-01-01',
  },
  {
    id: 1,
    title: '一个Demo文章例子，不可以点的哦...',
    cover: '',
    profile: '嘿嘿嘿嘿嘿嘿',
    onTop: false,
    likeCount: 100,
    replyCount: 20,
    viewCount: 895,
    insertAt: '2022-01-01',
  },
  {
    id: 1,
    title: '一个Demo文章例子，不可以点的哦...',
    cover: '',
    profile: '嘿嘿嘿嘿嘿嘿',
    onTop: true,
    likeCount: 100,
    replyCount: 20,
    viewCount: 895,
    insertAt: '2022-01-01',
  },
  {
    id: 1,
    title: '一个Demo文章例子，不可以点的哦...',
    cover: '',
    profile: '嘿嘿嘿嘿嘿嘿',
    onTop: true,
    likeCount: 100,
    replyCount: 20,
    viewCount: 895,
    insertAt: '2022-01-01',
  },
])
</script>

<style lang="scss" scoped>
.article-column {
  padding: 5px 10px;
}
</style>
