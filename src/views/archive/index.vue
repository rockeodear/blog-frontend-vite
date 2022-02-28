<template>
  <div class="archive side-item">
    <common-title label="文章归档" :level="1">
      <span>文章归档</span>
      <p></p>
    </common-title>
    <common-title label="分类" :level="2">
      <p></p>
      <svg-icon name="category" :size="18" />
      <span>&nbsp;</span>
      <span>分类</span>
      <p></p>
    </common-title>
    <div class="category-list">
      <div class="category-item" v-for="item in categoryList" :key="item.id">
        <span class="category-name">{{ item.name }}</span>
        <span>&nbsp;</span>
        <span class="category-count">{{ item.count }}</span>
      </div>
    </div>
    <common-title label="分类" :level="2">
      <p></p>
      <svg-icon name="time-line" :size="18" />
      <span>&nbsp;</span>
      <span>时间轴</span>
      <p></p>
    </common-title>
    <el-timeline>
      <el-timeline-item center timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item center timestamp="2018/4/2" placement="top">
        Event start
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        Event end
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import CommonTitle from 'components/common/title/index.vue'
import { ref } from 'vue'

const categoryList = ref([
  {
    id: 1,
    name: 'Redis',
    count: 5,
  },
  {
    id: 2,
    name: '算法',
    count: 10,
  },
  {
    id: 3,
    name: '线程池',
    count: 21,
  },
  {
    id: 4,
    name: 'JVM',
    count: 13,
  },
  {
    id: 5,
    name: '源码分析',
    count: 60,
  },
  {
    id: 6,
    name: 'Dubbo',
    count: 28,
  },

  {
    id: 7,
    name: '思考感悟',
    count: 61,
  },
  {
    id: 8,
    name: '八股文',
    count: 53,
  },
  {
    id: 9,
    name: '荒腔走板',
    count: 57,
  },
])
</script>

<style lang="scss" scoped>
.archive {
  padding: 10px 15px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .category-item {
      background-color: #d7e1fd;
      margin: 15px 5px;
      padding: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      font-size: 0.9rem;

      &:hover {
        background-color: #ff6c07;
        color: white !important;
        cursor: pointer;
        .category-name,
        .category-count {
          color: white;
        }
      }

      .category-name {
        color: #8c939d;
      }
      .category-count {
        color: #ff6c07;
      }
    }
  }
}

// 大于1200时生效
@media screen and (min-width: 1290px) {
  .archive {
    width: 1320px;
  }
}

@media screen and (max-width: 1290px) {
  .archive {
    width: 98%;
  }
}
</style>
