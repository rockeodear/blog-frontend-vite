<template>
  <div class="article-view">
    <div class="tag">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{ info.categoryName }}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <span style="cursor: default !important;">正文</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="category"></div>
      <div class="title"></div>
      <div class="profile">
        <div class="avatar">
          <el-avatar :size="42" :src="profile.avatar"></el-avatar>
        </div>
        <div class="info">
          <div class="nickname">
            {{ profile.nickname }}
          </div>
          <div class="info-message">
            {{ `${info.insertAt}` }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const profile = {
  avatar: 'https://img2.baidu.com/it/u=775986545,983273084&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=419',
  nickname: 'rocke',
}

const info = ref({
  id: 1,
  title: '扒一扒@Retryable注解，很优雅，有点意思！',
  categoryId: 1,
  categoryName: '八股文',
  content: '',
  visitCount: 100,
  likeCount: 20,
  commentCount: 10,
  insertAt: '2022-02-05',
})
</script>

<style lang="scss" scoped>
.article-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 78%;
  margin: 0 auto;
  min-height: calc(100vh - 80px);

  .tag {
    cursor: pointer;
    margin: 30px 10px 20px;
  }

  .container {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: #f8f8f8;
    height: 100%;
    width: 100%;
    min-height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;

    .profile {
      position: relative;
      cursor: default;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 10px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(19, 19, 19, 0.1);

      &:after {
        content: '';
        position: absolute;
        bottom: -1.5px;
        left: 0;
        width: 10vw;
        height: 3px;
        border-radius: 1.5px;
        background: #ff6c07;
      }
      .avatar {
        margin: auto 10px;
      }
      .info {
        font-size: 0.8rem;
        .nickname {
          line-height: 2;
          color: #ff6c07;
          font-weight: 450;
        }
        .info-message {
          line-height: 1.5;
        }
      }
    }

  }
}
</style>
