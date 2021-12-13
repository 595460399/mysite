<template>
  <div>
    <div class="link">
      <el-row :gutter="30">
        <el-col :span="24">
          <div class="tip">{{ link.title }}</div>
        </el-col>
        <el-col
          v-for="(item, index) in link.content"
          :key="index"
          :span="8"
          class="item"
        >
          <a :href="item.location" target="_blank">
            <HeadImg :src="item.icon" />
            <h4>{{ item.name }}</h4>
            <p>{{ item.desc }}</p>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    link: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  position: relative;
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  font-size: 15px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  .tip {
    padding-left: 15px;
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 800;
  }
  .item {
    transition: all 0.3s ease-out;
    border-radius: 5px;
    a {
      position: relative;
      padding: 0 0 0 70px;
      display: block;
      height: 90px;
      cursor: pointer;
      img {
        position: absolute;
        top: 15px;
        left: 0;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 15px;
        font-weight: bold;
        font-size: 20px;
      }
      p {
        margin: 10px 0;
        font-size: 12px;
        line-height: 24px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .item:hover {
    background: rgba(230, 244, 250, 0.5);
  }
}
</style>
