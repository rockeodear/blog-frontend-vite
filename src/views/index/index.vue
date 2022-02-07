<template>
  <div class="index">
    <div class="main-container">
            <h3 class="item" v-for="i in 100">{{ i }}</h3>
    </div>
    <div class="side-container wow slideInLeft">
      <h1 v-for="i in 5">{{ i }}</h1>
    </div>
  </div>
</template>

<script setup >
import { onMounted } from 'vue'

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;
  width: 78%;

  .main-container {
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: #f8f8f8;
    margin: 10px 5px;
    width: 75%;
  }

  .side-container {
    background-color: #f8f8f8;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin: 10px 5px;
    width: 25%;
  }
}
</style>
