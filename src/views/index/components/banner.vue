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
    title: '生命就像一场聚会，赶路的人先穿上风衣走了，留下的人要继续享受这个聚会，不必为我悲伤，我只是先赶路了而已',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fm00%2Fe7%2Ff5%2F4be82635b9cf81ffdc1dd0e0f0204b51.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649515677&t=668dc9c8c99a47acb7c1b77a34a708ec',
  },
  {
    articleId: 2,
    title: '气如赤焰纵酒狂歌《阴阳师》酒吞童子全新皮肤降临',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcms-bucket.nosdn.127.net%2F2018%2F07%2F17%2F59492f28052f4b659eb2cde8dc24a587.jpeg&refer=http%3A%2F%2Fcms-bucket.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649169214&t=4c344ed28cd6bfbaa7fd2c03ba3f9ff9',
  },
  {
    articleId: 3,
    title: '阴阳师新ssr不知火cg:和传说合二为一的歌姬',
    url:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F707%2Fw960h547%2F20190416%2FCUWK-hvsckth3613728.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649169270&t=ae7d6821221e22fca6017be606fead96',
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
    padding: 0 15%;
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
