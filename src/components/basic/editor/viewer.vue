<template>
  <div class="markdown-body" v-html="file" @click="handleClick($event)"></div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, watch, nextTick, computed, reactive } from 'vue'
import { getProcessor } from 'bytemd'

const props = defineProps({
  value: String,
  plugins: Array,
  sanitize: Object,
})

const cbs = ref(null)
const instance = getCurrentInstance()

const file = computed(() => {
  try {
    return getProcessor(props).processSync(props.value)
  } catch (err) {
    console.error(err)
  }
})

const needUpdate = computed(() => {
  return [file.value, props.plugins, props.sanitize]
})

watch(
  needUpdate,
  val => {
    off()
    nextTick(() => {
      on()
    })
  },
  {
    deep: true,
  }
)

onMounted(() => {
  on()
})

const on = () => {
  if (props.plugins && file.value) {
    cbs.value = props.plugins.map(
      ({ viewerEffect }) => viewerEffect && viewerEffect({ markdownBody: instance.proxy.$el, file: file.value })
    )
  }
}

const off = () => {
  if (cbs.value) {
    cbs.value.forEach(cb => cb && cb())
  }
}

const handleClick = e => {
  const $ = e.target
  if ($.tagName !== 'A') return
  const href = $.getAttribute('href')
  if (!href || !href.startsWith('#')) return
  const dest = this.$el.querySelector('#user-content-' + href.slice(1))
  if (dest) dest.scrollIntoView()
}
</script>
