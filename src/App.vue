<template>
  <div id="app">
    <Head></Head>
    <div class="container">
      <el-row :gutter="30">
        <el-col :sm="24" :md="18">
          <transition>
            <keep-alive><router-view class="left"></router-view></keep-alive>
          </transition>
        </el-col>
        <el-col :sm="24" :md="6">
          <div class="right">
            <Right></Right>
          </div>
        </el-col>
      </el-row>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/components/head/index'
import Right from '@/components/right/index'
import Foot from '@/components/foot/index'
export default {
  name: 'App',
  components: {
    Head,
    Right,
    Foot
  }
}
</script>

<style lang="less">
@import url('./assets/css/reset.less');

body {
  cursor: url('./assets/img/cursor.png'), auto;
  background-color: #efefef;
}
#app > .container {
  max-width: 80%;
  background-color: pink;
  margin: 0 auto;
}

#app .left {
  // height: 1300px;
  // background-color: green;
  // background: #fff;
}
#app .right {
  height: 1300px;
  background-color: purple;
}
</style>
