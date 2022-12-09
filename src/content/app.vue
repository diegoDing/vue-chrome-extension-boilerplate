<template>
  <div class="test-a">
    <span @click="handleTestPrint">测试打印</span>
    <span @click="handleTestPrint">asdas</span>
  </div>
</template>

<script lang="ts" setup>
function handleTestPrint() {
  console.log('testqf')
}
</script>

<style scoped>
.test-a {
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  left: 0;
  top: 0;
}
</style>
