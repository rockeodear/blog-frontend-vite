<template>
  <div class="basic-container">
    <!-- 顶部导航栏 -->
    <div :class="`basic-flex top ${showTopBar && diffCount >= 10 ? '' : 'basic-flex-hidden'}`">
      <top-menu />
      /
    </div>
    <!-- 主体内容 -->
    <div class="main-view expansion-flex">
      <el-scrollbar ref="scrollbar" noresize @scroll="scrollHandle">
        <router-view></router-view>
      </el-scrollbar>
    </div>
    <!-- 底部信息栏 -->
    <div class="basic-flex">
      <foot-column />
    </div>
  </div>
</template>

<script setup>
import TopMenu from './top-menu/index.vue'
import FootColumn from './foot-column/index.vue'
import { ref } from 'vue'

const lastScroll = ref(0)

const showTopBar = ref(true)

const lastShowTopBar = ref(true)

const diffCount = ref(10)

const scrollHandle = ({ scrollLeft, scrollTop }) => {
  let curScroll = scrollTop
  const diff = curScroll - lastScroll.value
  const leaveTop = scrollTop > 20
  const isDowner = diff > 1
  // 到达顶部或向上滑时显示顶部，否则隐藏顶部
  showTopBar.value = !(leaveTop && isDowner)
  if (lastShowTopBar.value === showTopBar.value) {
    diffCount.value++
  } else {
    lastShowTopBar.value = showTopBar.value
    diffCount.value = 0
  }
  diffCount.value++
  lastScroll.value = curScroll
}
</script>

<style lang="scss" scoped>
.basic-container {
  background-color: #dcdbdb;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .basic-flex {
    transition: ease 0.5s;
    width: 100%;
    flex: 0 0;
  }

  .basic-flex-hidden {
    margin-top: -50px;
    transition: ease 0.5s;
  }

  .expansion-flex {
    width: 100%;
    overflow-y: auto;

    flex: 1 1;
  }
}

.top {
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0);
}
.foot-column {
}
</style>
