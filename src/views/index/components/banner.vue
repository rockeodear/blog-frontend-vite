<template>
  <div class="banner">
    <el-carousel pause-on-hover height="40vh">
      <el-carousel-item v-for="banner in bannerList" :key="banner.articleId">
        <img class="banner-image" :src="banner.url" alt="" />
        <h4 class="banner-title">{{ banner.title }}</h4>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bannerList = ref([
  {
    articleId: 1,
    title: '就这样，我走完了程序员的前五年...',
    url: 'https://why-image-1300252878.cos.ap-chengdu.myqcloud.com/img/79/20210705122510.png',
  },
  {
    articleId: 2,
    title: '历史文章大合集（实时更新）',
    url: 'https://www.whywhy.vip/upload/2022/01/0-8c41f51ee62542608261b45e1aded702.png',
  },
  {
    articleId: 3,
    title: '高分计算机书籍PDF分享，Less is more~',
    url: 'https://www.whywhy.vip/upload/2022/01/1642394881(1)-16b8ed3caa394b1bb80156b8d9abf764.jpg',
  },
])
</script>

<style lang="scss" scoped>
.banner {
  margin: 10px;

  .banner-image {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    z-index: 9998;
  }

  .banner-title {
    width: 100%;
    margin-top: -5vh;
    display: inline-block;
    color: white;
    text-align: center;
    background-color: rgba(222, 222, 222, 0.5);
    z-index: 9999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
