<template>
  <div />
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, watch, reactive } from 'vue'
import * as bytemd from 'bytemd'

const props = defineProps({
  value: String,
  plugins: Array,
  sanitize: Object,
  mode: String,
  previewDebounce: Number,
  placeholder: String,
  editorConfig: Object,
  locale: Object,
  uploadImages: Function,
  maxLength: Number,
})

const emit = defineEmits(['change', 'update:value'])

const editor = ref(null)
const instance = getCurrentInstance()

onMounted(() => {
  editor.value = new bytemd.Editor({
    target: instance?.subTree.el,
    props,
  })
  editor.value.$on('change', e => {
    emit('change', e.detail.value)
    emit('update:value', e.detail.value)
  })
})

watch(
  props,
  val => {
    const copy = { ...val }
    for (let k in copy) {
      if (copy[k] === undefined) {
        delete copy[k]
      }
    }
    editor.value.$set(copy)
  },
  {
    deep: true,
  }
)
</script>
