<template>
  <div class="basic-container">
    <el-scrollbar ref="scrollbar" class="scrollbar" noresize @scroll="debounceScroll">
      <!-- 顶部导航栏 -->
      <div class="basic-flex top" :class="clazz">
        <top-menu />
      </div>
      <!-- 主体内容 -->
      <div class="main-view expansion-flex" ref="mainView">
        <router-view></router-view>
      </div>
      <!-- 底部信息栏 -->
      <div class="basic-flex">
        <foot-column />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import TopMenu from './top-menu/index.vue'
import FootColumn from './foot-column/index.vue'
import { debounce } from 'utils'
import { computed, ref } from 'vue'

const lastScroll = ref(0)
const touchTop = ref(true)
const moveDown = ref(false)

const clazz = computed(() => {
  let hiddenTopBar = !touchTop.value && moveDown.value
  return {
    'top-hidden': hiddenTopBar,
  }
})

const scrollHandle = ({ scrollTop }) => {
  moveDown.value = scrollTop > lastScroll.value
  touchTop.value = scrollTop < 50
  lastScroll.value = scrollTop
}
const debounceScroll = debounce(scrollHandle, 20, false)
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
    transition: ease 0.35s;
    width: 100%;
    flex: 0 0;
  }

  .expansion-flex {
    width: 100%;
    //overflow-y: auto;

    flex: 1 1;
  }

  .scrollbar {
    width: 100%;
  }
}

.top {
  top: 0;
  z-index: 99;
  position: fixed;
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0);
}
.top-hidden {
  transition: ease 0.35s;
  transform: translate(0, -50px);
}
.main-view {
  position: relative;
  min-height: calc(100vh - 90px);
  top: 50px;
}
.foot-column {
  position: relative;
  top: 50px;
}
</style>
