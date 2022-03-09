<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color, width: realSize, height: realSize }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 32,
  },
  color: {
    type: String,
    default: '',
  },
})

const realSize = computed(() => props.size + 'px')
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  console.log(props.name, 'props.name')
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
