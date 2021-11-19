<template>
  <div>
    <div class="headBack">
      <el-row class="container">
        <el-col :span="24">
          <PCHead class="pc-head" :activeIndex="activeIndex"></PCHead>
        </el-col>
      </el-row>
    </div>
    <div class="headImgBox">
      <div class="h-information">
        <img src="@/assets/img/tou.png" alt="" />
        <div class="h-description">
          <span>Write the Code. Change the World.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PCHead from './components/pc-head.vue'
export default {
  name: 'Head',
  components: {
    PCHead
  },
  data() {
    return {
      activeIndex: '/'
    }
  }
}
</script>

<style lang="less" scoped>
.headBack {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 38px;
  background-color: pink;
  background: rgba(40, 42, 44, 0.6);
}
.container {
  max-width: 80%;
  height: 38px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
}
.container .el-col {
  height: 38px;
}
.headImgBox {
  position: relative;
  height: 650px;
  width: 100%;
  margin-bottom: 90px;
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
  background-image: url('./../../assets/img/headbg05.jpg');
}
.headImgBox .h-information {
  position: relative;
  top: 498px;
  z-index: 1;
  width: 70%;
  margin: 0 auto;
  padding: 40px 0;
  border-radius: 5px;
  text-align: center;
  opacity: 0.98;
  background: rgba(230, 244, 249, 0.8);
}
.h-information img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.h-information .h-description {
  margin: 20px 0 0;
  span {
    font-size: 18px;
    font-weight: 700;
    color: #97dffd;
  }
}
</style>
