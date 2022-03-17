<template>
  <div class='article-edit'>
    <div class='top-tab'>
      <el-input className='article-title' v-model='article.name' placeholder='输入文章标题' />
      <div class='save-tip'>保存成功</div>
      <div class='opt-btn'>
        <el-button plain color='white' style='color: #1d7dfa'>草稿箱</el-button>
      </div>
      <div class='opt-btn'>
        <el-button color='#1d7dfa' style='color: white'>发布</el-button>
      </div>
    </div>
    <div class='md'>
      <editor
        className='editor'
        :value='value'
        @update:value='value = $event'
        :plugins='plugins'
        :max-length='maxLength'
        :locale='locale'
        @change='change'
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import { Editor, Viewer } from 'components/basic/editor'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import breaks from '@bytemd/plugin-breaks'
import highlight from '@bytemd/plugin-highlight'
import highlightSsr from '@bytemd/plugin-highlight-ssr'
import footnotes from '@bytemd/plugin-footnotes'
import frontmatter from '@bytemd/plugin-frontmatter'
import gfm from '@bytemd/plugin-gfm'
import mermaid from '@bytemd/plugin-mermaid'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import gemoji from '@bytemd/plugin-gemoji'
import math from '@bytemd/plugin-math'
import mathSsr from '@bytemd/plugin-math-ssr'

const plugins = ref([
  breaks(),
  highlight(),
  highlightSsr(),
  footnotes(),
  frontmatter(),
  gfm(),
  mermaid(),
  mediumZoom(),
  gemoji(),
  math(),
  mathSsr(),
])

const value = ref('')
const article = reactive({
  title: '',
  content: '',
})

const locale = ref(zhHans)

const maxLength = ref(20000)

const change = val => {
  nextTick(() => {
    console.log(val)
    console.log(value.value)
  })
}
</script>

<style lang='scss' scoped>
.article-edit {
  display: flex;
  flex-direction: column;

  .top-tab {
    height: 63px;
    display: inline-flex;
    padding-right: 50px;
    justify-content: center;
    align-items: center;
    cursor: default;

    .opt-btn {
      margin: auto 12px;
    }

    .save-tip {
      color: #8c939d;
      font-size: 14px;
    }
  }

  .md {
    width: 100%;
    flex: 1;

    .editor {
      ::v-deep .bytemd {
        height: calc(100vh - 63px) !important;
      }
    }

    .viewer {
    }
  }

  ::v-deep .el-input {
    flex: 1;
    height: 100%;

    input {
      height: 100%;
      width: 100% !important;
      font-size: 24px;
      font-weight: 500;
      padding-left: 44px;
      color: #1d2129;
      border: none !important;
      outline: none;
    }
  }
}
</style>
