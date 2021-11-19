<template>
  <div class="headBox">
    <el-menu
      mode="horizontal"
      class="el-menu-demo"
      text-color="#fff"
      active-text-color="#fff"
      :default-active="activeIndex"
      :router="true"
    >
      <el-menu-item index="/">
        <i class="fa fa-wa fa-home" /> 首页
      </el-menu-item>
      <el-submenu index="">
        <template slot="title">
          <i class="fa fa-wa fa-flask" /> 实验室
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
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
  name: 'PCHead',
  props: ['activeIndex']
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
.headBox > .el-menu > .is-active {
  background-color: rgba(73, 69, 107, 0.7) !important;
}

.headBox .el-menu .el-menu-item,
.headBox .el-menu > .el-submenu .el-submenu__title {
  height: 38px;
  line-height: 38px;
  border-bottom: none !important;
}
.headBox > .el-menu .el-menu-item i,
.headBox > .el-menu > .el-submenu .el-submenu__title i {
  color: #fff;
}
.headBox > .el-menu .el-menu-item:hover,
.headBox > .el-menu > .el-submenu div.el-submenu__title:hover {
  background-color: #48456c !important;
  border-bottom: none;
}

.el-menu--horizontal .el-menu,
.el-menu--horizontal .el-menu .el-menu-item {
  background-color: #48456c !important;
}

.el-menu--horizontal .el-menu .el-menu-item:hover {
  background-color: #64609e !important;
}
</style>
