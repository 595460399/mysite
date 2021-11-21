<template>
  <div id="app">
    <Head></Head>
    <div class="container">
      <el-row :gutter="30">
        <el-col :sm="24" :md="16">
          <router-view class="left"></router-view>
        </el-col>
        <el-col :sm="24" :md="8">
          <div class="right"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Head from '@/components/head/index'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style lang="less">
@import url('./assets/css/reset.less');

body {
  background-color: #efefef;
}
#app > .container {
  max-width: 80%;
  background-color: pink;
  margin: 0 auto;
}

#app .left {
  height: 1300px;
  // background-color: red;
}
#app .right {
  height: 1300px;
  background-color: purple;
}
</style>
