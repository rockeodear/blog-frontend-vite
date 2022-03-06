<template>
  <div class="article-item">
    <div class="top-title" :title="article.title" @click="handleToDetail">
      <span v-if="showTag && article.onTop" class="top-icon">置顶</span>
      <span class="title single-text">{{ article.title }}</span>
    </div>
    <div class="profile single-text" :title="article.title" @click="handleToDetail">
      {{ article.profile }}
    </div>
    <div class="info">
      <span>{{ article.insertAt }}</span>
      <span> / </span>
      <span>{{ article.viewCount }}阅读</span>
      <span> / </span>
      <span>{{ article.replyCount }}评论</span>
      <span> / </span>
      <span>{{ article.likeCount }}点赞</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  showTag: {
    type: Boolean,
    default: false,
  },
})

const handleToDetail = () => {
  console.log(props.article)
}
</script>

<style lang="scss" scoped>
.article-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 200px;
  cursor: default;

  .top-title,
  .profile {
    cursor: pointer;
  }

  .top-title {
    line-height: 1.5;
    margin-bottom: 10px;
    padding-left: 5px;
    border-left: rgba(0, 0, 0, 0) 4px solid;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    transition: all 0.4s cubic-bezier(0.46, 1, 0.23, 1.52);

    &:hover {
      color: #ff6c07;
      border-left: #fb6c28 4px solid;
      transition: all 0.4s cubic-bezier(0.46, 1, 0.23, 1.52);
    }

    .top-icon {
      background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
      color: #fff;
      font-size: 12px;
      margin: auto 5px;
      border-radius: 2px;
      padding: 0 8px 1px 8px;
      white-space: nowrap;
      vertical-align: 2px;
    }
  }

  .profile,
  .info {
    color: rgba(30, 30, 30, 0.5);
    font-size: 0.8em;
    padding: 5px 0 5px 10px;
  }

  .profile {
  }
  .info {
    font-size: 0.6em;
  }
}
</style>
