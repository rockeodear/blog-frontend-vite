<template>
  <div class="top-menu">
    <div class="top-main">
      <div class="avatar">
        <el-avatar shape="square" :size="40" :src="avatarUrl"></el-avatar>
      </div>
      <el-divider direction="vertical"></el-divider>
      <template v-for="item in menuList">
        <div :class="`menu-item ${activeBar === item.path ? 'menu-item-active' : ''}`" @click="toPage(item.path)">
          {{ item.text }}
        </div>
      </template>
      <div class="flex-full-empty"></div>
      <div class="search">
        <el-input v-model="queryKey" class="search-content" placeholder="请输入关键字">
          <template #suffix>
            <component :is="Search" style="width: 25px; height: 30px;" class="search-icon" />
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { getCurrentInstance, ref } from 'vue'
import router from 'router'

const _this = getCurrentInstance().proxy

const avatarUrl = ref(
  'https://www.whywhy.vip/upload/2021/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210917230812-25c6b5b9c4184a91ba64d1c2a783f553.jpg'
)

const activeBar = ref('/index')

const menuList = [
  {
    text: '首页',
    path: '/index',
  },
  {
    text: '归档',
    path: '/archive',
  },
  {
    text: '分类',
    path: '/categories',
  },
  {
    text: '荒唐走板',
    path: '/journals',
  },
]

const queryKey = ref('')

const toPage = path => {
  activeBar.value = path
  router.push(path)
}
</script>

<style lang="scss" scoped>
.top-menu {
  background-color: #fff;
  font-size: 14px;
  height: 50px;

  .top-main {
    margin: 0 auto;
    height: 100%;
    width: 78%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
.avatar {
  margin: 5px 10px 0 10px;
}

.menu-item {
  margin: 10px 20px 0 20px;
  padding-bottom: 10px;
  transition: ease 0.5s;
  cursor: pointer;

  &:hover {
    transition: ease 0.5s;
    color: rgba(255, 165, 0, 0.9);
    border-bottom: 2px solid rgba(255, 165, 0, 0.8);
    opacity: 0.8;
  }
}

.menu-item-active {
  transition: ease 0.5s;
  color: #ff6c07;
  border-bottom: 2px solid #ff6c07;
}

.search {
  margin: auto 20px;

  .search-icon {
    color: #ff6c07;
  }
}

.el-input {
  padding: 0;
  border-radius: 120px;
}
</style>
