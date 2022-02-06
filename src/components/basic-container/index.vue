<template>
  <div class="basic-container">
    <!-- 顶部导航栏 -->
    <div class="top-menu basic-flex">
      <component :is="TopMenu" />
    </div>
    <!-- 主体内容 -->
    <div class="main-view expansion-flex">
      <router-view></router-view>
    </div>
    <!-- 底部信息栏 -->
    <div class="foot-column basic-flex">
      <component :is="FootColumn" />
    </div>
  </div>
</template>

<script setup>
import TopMenu from './top-menu/index.vue'
import FootColumn from './foot-column/index.vue'
</script>

<style lang="scss" scoped>
.basic-container {
  background-color: #f3f3c3;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .basic-flex {
    width: 100%;
    flex-grow: 0;
  }

  .expansion-flex {
    width: 100%;
    background-color: rgba(255, 154, 154, 0.1);
    flex-grow: 1;
  }
}
</style>
