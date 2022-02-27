<template>
  <div class="banner">
    <el-carousel pause-on-hover height="45vh">
      <el-carousel-item v-for="banner in bannerList" :key="banner.articleId">
        <div class="banner-title">{{ banner.title }}</div>
        <div class="banner-image" :style="{ 'background-image': `url(${banner.url})` }"></div>
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
    title: '化鲸 哈呼呼呼呼呼，Less is more~',
    url: 'https://img0.baidu.com/it/u=1371216575,133393618&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281',
  },
])
</script>

<style lang="scss" scoped>
.banner {
  margin: 10px;

  .banner-image {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    position: relative;
    background-size: contain;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }

  .banner-title {
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
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
