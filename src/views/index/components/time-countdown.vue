<template>
  <div class="time-countdown side-item">
    <common-title label="时间沙漏" :level="1">
      <svg-icon name="time-flow" :size="24" />
      <span>&nbsp;</span>
      <span>时间沙漏</span>
    </common-title>
    <div class="content">
      <div class="flow-item" v-for="(item, index) in flowList" :key="item.preTitle">
        <div class="info">
          <span>{{ item.preTitle }}&nbsp;</span>
          <span>{{ item.yet }}</span>
          <span>&nbsp;{{ item.suffixTitle }}</span>
        </div>
        <div class="progress">
          <div class="progress-image">
            <div
              :class="`inner_${index} inner-basic`"
              :style="{ width: calculateTouch(item.total, item.yet) + '%' }"
            ></div>
          </div>
          <div class="point">{{ calculateTouch(item.total, item.yet) }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { hourlyHandle } from 'utils/time'
import dayjs from 'dayjs'
import CommonTitle from 'components/common/title/index.vue'

onMounted(() => {
  updateMessage()
  hourlyHandle(() => {
    // 整点更新数据
    updateMessage()
  })
})

const updateMessage = () => {
  // 小时-天
  flowList.value[0].yet = dayjs().hour()
  // 天-星期
  let CurDay = dayjs().day()
  flowList.value[1].yet = CurDay === 0 ? 7 : CurDay
  // 天-月
  flowList.value[2].yet = dayjs().date()
  flowList.value[2].total = dayjs().daysInMonth()
  // 月-年
  flowList.value[3].yet = dayjs().month() + 1
  console.log(flowList.value)
}

const flowList = ref([
  {
    preTitle: '今日已经过去',
    suffixTitle: '小时',
    total: 24,
    yet: 0,
  },
  {
    preTitle: '这周已经过去',
    suffixTitle: '天',
    total: 7,
    yet: 0,
  },
  {
    preTitle: '本月已经过去',
    suffixTitle: '天',
    total: 30,
    yet: 0,
  },
  {
    preTitle: '今年已经过去',
    suffixTitle: '个月',
    total: 12,
    yet: 0,
  },
])

const calculateTouch = (total, yet) => {
  return Math.floor((yet / total) * 100)
}
</script>

<style lang="scss" scoped>
.time-countdown {
  padding: 5px;
  .title {
    padding: 5px;
    font-weight: 550;
    width: 100%;
    border-bottom: 1px solid rgba(28, 28, 28, 0.2);
  }
  .content {
    padding: 5px;

    .flow-item {
      padding: 5px;
      margin: 5px auto;
      .info {
        font-size: 0.8rem;
        line-height: 1.5;

        & > span:nth-child(2) {
          color: #ff6c07;
          font-weight: 550;
        }
        & > span:not(:nth-child(2)) {
          color: grey;
        }
      }
      .progress {
        display: flex;
        flex-direction: row;
        .progress-image {
          flex: 1;
          background-color: rgba(213, 220, 222, 0.6);
          height: 10px;
          margin: auto;
          border-radius: 5px;

          .inner-basic {
            height: 100%;
            border-radius: 5px;
            transition: width 0.35s;
            -webkit-transition: width 0.35s;
            animation: progress 750ms linear infinite;
            -webkit-animation: progress 750ms linear infinite;
          }

          .inner_0 {
            background: #ffa9a9
              linear-gradient(
                135deg,
                #ff4949 25%,
                transparent 25%,
                transparent 50%,
                #ff4949 50%,
                #ff4949 75%,
                transparent 75%,
                transparent 100%
              );
            background-size: 30px 30px;
          }
          .inner_1 {
            background: #bde6ff
              linear-gradient(
                135deg,
                #50bfff 25%,
                transparent 25%,
                transparent 50%,
                #50bfff 50%,
                #50bfff 75%,
                transparent 75%,
                transparent 100%
              );
            background-size: 30px 30px;
          }
          .inner_2 {
            background: #ffd980
              linear-gradient(
                135deg,
                #f7ba2a 25%,
                transparent 25%,
                transparent 50%,
                #f7ba2a 50%,
                #f7ba2a 75%,
                transparent 75%,
                transparent 100%
              );
            background-size: 30px 30px;
          }
          .inner_3 {
            background: #67c23a
              linear-gradient(
                135deg,
                #4f9e28 25%,
                transparent 25%,
                transparent 50%,
                #4f9e28 50%,
                #4f9e28 75%,
                transparent 75%,
                transparent 100%
              );
            background-size: 30px 30px;
          }
        }
        .point {
          width: 50px;
          font-size: 0.8rem;
          font-weight: 550;
          color: gray;
          text-align: center;
        }
      }
    }
  }
}
</style>
