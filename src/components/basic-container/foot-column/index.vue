<template>
  <div class="foot-column">
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42062402000153">
      <img src="/src/assets/images/baimg.png" style="float:left;" alt="" />
      <el-divider direction="vertical"></el-divider>
      <span>鄂公网安备42062402000153号</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FootColumn',
}
</script>

<style scoped>
.foot-column {
  height: 30px;
  width: 100%;
  color: white;
  background-color: #1a1414;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
