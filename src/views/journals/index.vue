<template>
  <div class="journals">
    <div class="title">我的动态</div>
    <div class="profile">
      <div class="avatar">
        <el-avatar :size="42" :src="info.avatar"></el-avatar>
      </div>
      <div class="info">
        <div class="nickname">
          {{ info.nickname }}
        </div>
        <div :title="info.signature" class="signature single-text">
          {{ info.signature }}
        </div>
      </div>
    </div>
    <div class="journal-list">
      <div class="journal-item" v-for="(item, index) in journalList" :key="item.id">
        <p class="date">
          <svg-icon name="feather" :size="20" />
          <em>{{ item.insertAt }}</em>
        </p>
        <div class="item-block">
          <div class="text-content">
            {{ item.content }}
          </div>
          <el-image
            v-if="item.cover"
            class="cover"
            :src="item.cover"
            :preview-src-list="[item.cover]"
            hide-on-click-modal
            fit="cover"
          ></el-image>
          <div class="operate-btn">
            <div class="btn" @click="handleLike(item)">
              <svg-icon class="btn-icon" :name="item.liked ? 'like-on' : 'like-off'" :size="15" />
              <span>{{ item.likeCount }}</span>
            </div>
            <div class="btn">
              <svg-icon class="btn-icon" :name="item.commented ? 'comment-on' : 'comment-off'" :size="15" />
              <span>{{ item.commentCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const journalList = ref([])

const info = ref({
  avatar: 'https://img2.baidu.com/it/u=775986545,983273084&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=419',
  nickname: 'rocke',
  signature: '一个平平无奇的码农,一个平平无奇的码农，一个平平无奇的码农，一个平平无奇的码农，一个平平无奇的码农',
  cardImage: 'https://www.whywhy.vip/upload/2022/01/bg-de181afe5bf446c2b00fba7bf19f4909.jpg',
  categoryCount: 11,
  articleCount: 123,
  replyCount: 90,
})

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    let item
    if (i % 3 === 0) {
      item = {
        id: i,
        insertAt: '2022年2月28日 11:11',
        content: '今天天气不错哦',
        cover: '',
        likeCount: 20,
        liked: false,
        commented: true,
        commentCount: 5,
      }
    } else if (i % 3 === 1) {
      item = {
        id: i,
        insertAt: '2022年2月28日 11:11',
        content:
          '亲爱的jym（掘友们），还剩最后一周我就要提桶了。\n' +
          '也许离开程序员这个职业，就再也不会上掘金看沸点，看jym摸鱼，看jym树洞了。\n' +
          '再见了北京，再见了前端，再见了天通苑，再见了8室0厅合租房，再见了北漂5年[泣不成声]。\n' +
          '你好 乡村老家，你好 短视频，你好 创业理想，你好 结婚[微笑]。\n' +
          '不多说了，事在人为，一切取决于自己的想法。\n' +
          '希望jym可以关注我从程序员到回乡创业的路程。抖音：庄户雄',
        cover: 'https://img0.baidu.com/it/u=226945218,2358203134&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        likeCount: 30,
        commentCount: 8,
        liked: true,
        commented: true,
      }
    } else {
      item = {
        id: i,
        insertAt: '2022年2月28日 11:11',
        content: '人生的至暗时刻，我庆幸能提前遇见。',
        cover:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091301%2Fv1e3d2do0dsv1e3d2do0ds.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649610233&t=0752941cf3417ec3c9ba327bd7c96c9c',
        likeCount: 30,
        commentCount: 8,
        liked: false,
        commented: false,
      }
    }
    journalList.value.push(item)
  }
  console.log(journalList.value)
})

const handleLike = item => {
  if (!item.liked) {
    // todo 网络请求
    item.liked = true
    item.likeCount += 1
  }
}
</script>

<style lang="scss" scoped>
.journals {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    width: 100%;
    margin: 40px 0 30px 0;
  }
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
      .signature {
        line-height: 1.5;
        width: 30vw;
      }
    }
  }
  .journal-list {
    .journal-item {
      position: relative;
      padding: 0 0 20px 40px;

      &:before {
        position: absolute;
        left: 12px;
        top: 0;
        z-index: 0;
        content: '';
        width: 0;
        height: 99%;
        border-left: 1px dashed rgba(30, 30, 30, 0.5);
      }

      .date {
        cursor: default;
        color: #797979;
        position: relative;
        left: -36px;
        z-index: 1;
        height: 34px;
        line-height: 34px;
        background-color: #f8f8f8;
        em {
          font-size: 0.8rem;
          margin-left: 15px;
        }
      }
      .item-block {
        font-size: 0.9rem;
        padding: 10px 10px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
        border-radius: 0 15px 0 10px;

        .text-content {
          line-height: 1.5;
          margin: 5px auto;
          padding: 5px;
          cursor: default;
        }
        .cover {
          width: 100%;
          height: 100%;
          margin: 5px 0;
        }
        .operate-btn {
          display: flex;
          flex-direction: row;
          .btn {
            margin: 0 5px;
            cursor: pointer;

            .btn-icon {
              transition: 0.35s;

              &:hover {
                transform: scale(1.35);
              }
            }

            span {
              color: #797979;
              margin: auto 5px;
              display: inline-block;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
