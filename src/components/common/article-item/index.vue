<template>
  <div class="container">
    <div class="line"></div>
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
        <span>/</span>
        <span>{{ article.viewCount }}阅读</span>
        <span>/</span>
        <span>{{ article.replyCount }}评论</span>
        <span>/</span>
        <span>{{ article.likeCount }}点赞</span>
      </div>
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
.container {
  position: relative;
  display: flex;
  flex-direction: row;

  &:hover .line {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
    height: 30px;
    margin: 0 10px 0 0;
  }

  .line {
    position: relative;
    z-index: 500;
    margin: 15px 10px 0 0;
    width: 4px;
    height: 0;
    border-radius: 2px;
    background-color: #ff6c07;
    transition: all 0.55s cubic-bezier(0.46, 1, 0.23, 1.52);
  }
  .article-item {
    flex: 1;
    position: relative;
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

      .title {
        margin-left: 5px;
      }

      .top-icon {
        background-image: -webkit-linear-gradient(0deg, #3ca5f6 0%, #a86af9 100%);
        color: #fff;
        font-size: 12px;
        margin: auto 0;
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
}
</style>
