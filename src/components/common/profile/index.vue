<template>
  <div class="profile side-item">
    <div class="card-image" :style="{ 'background-image': `url(${info.cardImage})` }">
      <div class="flex-full-empty"></div>
      <div class="avatar">
        <el-avatar :src="info.avatar" :size="64"></el-avatar>
      </div>
    </div>
    <div class="info">
      <div class="nickname">{{ info.nickname }}</div>
      <div class="signature">{{ info.signature }}</div>
      <div class="count-message">
        <div class="count-item">
          <div class="count">{{ info.categoryCount }}</div>
          <div class="label">标签数</div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="count-item">
          <div class="count">{{ info.articleCount }}</div>
          <div class="label">文章数</div>
        </div>
        <el-divider direction="vertical" style="height: 20px"></el-divider>
        <div class="count-item">
          <div class="count">{{ info.replyCount }}</div>
          <div class="label">评论量</div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="marks">
      <div class="mark-item">
        <svg-icon name="juejin" :size="24" />
      </div>
      <div class="mark-item">
        <svg-icon name="sign" :size="24" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const info = ref({
  avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F27%2F20200427000107_hiebd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649649936&t=bd11cb149cd14751a0408c895bb7ee5c',
  nickname: 'rocke',
  signature: '一个平平无奇的码农,一个平平无奇的码农，一个平平无奇的码农，一个平平无奇的码农，一个平平无奇的码农',
  cardImage: 'https://www.whywhy.vip/upload/2022/01/bg-de181afe5bf446c2b00fba7bf19f4909.jpg',
  categoryCount: 11,
  articleCount: 123,
  replyCount: 90,
})
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;

  .card-image {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;

    .avatar {
      text-align: center;
    }
  }
  .info {
    cursor: default;
    box-shadow: 0px -9px 15px 0px white;
    -moz-box-shadow: 0px -9px 15px 0px white;
    -webkit-box-shadow: 0px -9px 15px 0px white;
    text-align: center;
    .nickname {
      line-height: 1.5;
      font-size: 1.1rem;
      font-weight: 500;
      color: #ff6c07;
    }
    .signature {
      margin: 10px 0;
      padding: 0 15px;
      font-size: 0.8rem;
      font-weight: 450;
    }

    .count-message {
      display: flex;
      flex-direction: row;

      .count-item {
        flex: 1;

        .count {
          font-size: 1rem;
          font-weight: 550;
        }
        .label {
          font-size: 0.6rem;
          font-weight: 200;
        }
      }
    }
  }

  .marks {
    text-align: center;
    display: flex;
    flex-direction: row;
    padding: 5px 0;

    .mark-item {
      flex: 1;
      margin: auto;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

::v-deep .el-divider--vertical {
  height: 2em !important;
}

::v-deep .el-divider--horizontal {
  margin: 10px 0 0 0;
}
</style>
