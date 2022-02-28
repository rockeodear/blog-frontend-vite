<template>
  <div :class="'title ' + clazz" :title="label">
    <slot></slot>
    <el-divider></el-divider>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  level: {
    type: Number,
    default: 1,
  },
})

const clazz = computed(() => {
  let clazz = props.level === 1 ? 'title-first' : ''
  clazz = props.level === 2 ? 'title-second' : clazz
  return clazz
})
</script>

<style lang="scss" scoped>
.title{
  cursor: default;
}
.title-first {
  padding: 2px 5px;
  color: #ff6c07;
  font-weight: 550;
}

.title-second {
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(37, 37, 37, 0.8);
}

::v-deep .el-divider--horizontal {
  margin: 8px 0 0 0;
}
</style>
