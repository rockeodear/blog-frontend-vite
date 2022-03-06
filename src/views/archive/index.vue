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
    <el-timeline class="timeline">
      <el-timeline-item v-for="line in dateLineList" :key="line.date" placement="top">
        <el-collapse>
          <el-collapse-item name="1">
            <template #title>
              <div class="line-title">
                {{ line.date }}
              </div>
            </template>
            <div class="article-list">
              <div class="article-item" v-for="item in line.articleList">
                <div class="single-text">{{ item.createAt }}:&nbsp;&nbsp;{{ item.title }}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
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

const dateLineList = ref([
  {
    id: 1,
    date: '2022年1月',
    articleList: [
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title:
          '曝光一个很多人都不知道的学习网站。曝光一个很多人都不知道的学习网站曝光一个很多人都不知道的学习网站曝光一个很多人都不知道的学习网站曝光一个很多人都不知道的学习网站曝光一个很多人都不知道的学习网站',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
    ],
  },
  {
    id: 2,
    date: '2022年2月',
    articleList: [
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
    ],
  },
  {
    id: 3,
    date: '2022年3月',
    articleList: [
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
      {
        articleId: 1,
        createAt: '01-02',
        title: '曝光一个很多人都不知道的学习网站。',
      },
    ],
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
      background-color: rgba(232, 240, 252, 0.8);
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

  .timeline {
    font-size: 1.1rem;
    margin: 40px 0 10px -35px;

    ::v-deep .el-timeline-item__wrapper {
      top: -25px;
    }

    ::v-deep .el-collapse-item__header {
      background-color: rgba(232, 240, 252, 0.8);
    }

    ::v-deep .el-collapse-item__wrap {
      background-color: #f8f8f8;
    }

    ::v-deep .el-collapse-item__content {
      padding-bottom: 5px;
      border-bottom: 1px none #f8f8f8;
    }

    ::v-deep .el-timeline-item {
      padding-bottom: 5px;
    }

    .line-title {
      padding: 0 10px;
      width: 100%;
      color: #ff6c07;
      font-weight: 500;
    }

    .article-list {
      background-color: #f8f8f8;
      margin: 5px 10px 0 10px;

      .article-item {
        color: #8c939d;
        line-height: 2;
        margin: 10px 10px 0 10px;

        &:hover {
          color: #ff6c07;
          cursor: pointer;
        }

        &:checked{
          background-color: #ff6c07;
        }
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
