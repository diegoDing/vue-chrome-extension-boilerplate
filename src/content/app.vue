<template>
  <div class="test-a">
    <a @click="handleTestPrint">测试打印</a>
  </div>
</template>

<script>
export default {
  name: "index",
  methods:{
    handleTestPrint(){
      console.log('handleTestPrint')
    }
  }
}
</script>

<style scoped>
.test-a{
  position: absolute;
  background: rgba(0,0,0,0.1);
  width: 200px;
  height: 200px;
  left: 0px;
  top: 0px;
}
</style>
