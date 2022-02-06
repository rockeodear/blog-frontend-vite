<template>
  <div class="index">
    <div class="main-container">
      <!--      <div class="item" v-for="i in 5">{{ i }}</div>-->
      <section class="wow flipInY" data-wow-duration="2s" data-wow-delay="5s">aaa</section>
      <section class="wow flipInY" data-wow-offset="10" data-wow-iteration="10">bbb</section>
    </div>
    <div class="side-container wow slideInLeft">
      <h1 v-for="i in 5">{{ i }}</h1>
    </div>
  </div>
</template>

<script setup >
import { onMounted } from 'vue'

onMounted(() => {
  new WOW().init();
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
