<template>
  <div class="headBox">
    <el-menu
      mode="horizontal"
      class="el-menu-demo"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="/">
        <i class="fa fa-wa fa-home" /> 首页
      </el-menu-item>
      <el-submenu index="">
        <template slot="title">
          <i class="fa fa-wa fa-flask" /> 实验室
        </template>
      </el-submenu>
      <el-menu-item index="/archive">
        <i class="fa fa-wa fa-archive" /> 归档
      </el-menu-item>
      <el-menu-item index="/reward">
        <i class="fa fa-wa fa-cny" /> 赞赏
      </el-menu-item>
      <el-menu-item index="/friendslink">
        <i class="fa fa-wa fa-users" /> 伙伴
      </el-menu-item>
      <el-menu-item index="/message">
        <i class="fa fa-wa fa-pencil" /> 留言板
      </el-menu-item>
      <el-menu-item index="/aboutme">
        <i class="fa fa-wa fa-vcard" /> 关于
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PCHead'
}
</script>

<style lang="less">
.headBox {
  width: 100%;
  height: 38px;
  background: transparent;
}
.headBox .el-menu {
  height: 38px;
  margin: 0 auto;
  border-bottom: none !important;
  background: transparent;
}
.headBox .el-menu > .el-menu-item,
.headBox .el-menu > .el-submenu .el-submenu__title {
  height: 38px;
  line-height: 38px;
  border-bottom: none !important;
}

.headBox .el-menu > .el-menu-item i,
.headBox .el-menu > .el-submenu .el-submenu__title i {
  color: #fff;
}

.headBox > ul.el-menu li.el-menu-item:hover,
.headBox > ul.el-menu li.el-submenu:hover div.el-submenu__title {
  background-color: #48456c;
  border-bottom: none;
}
</style>
