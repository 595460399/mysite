<template>
  <div>
    <div class="headBack">
      <el-row class="container">
        <el-col :span="24">
          <PCHead class="pc-head"></PCHead>
        </el-col>
      </el-row>
    </div>
    <div class="headImgBox"></div>
  </div>
</template>

<script>
import PCHead from './components/pc-head.vue'
export default {
  name: 'Head',
  components: {
    PCHead
  }
}
</script>

<style lang="less" scoped></style>
