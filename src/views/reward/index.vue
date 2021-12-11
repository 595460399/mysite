<!-- 赞赏模块 -->
<template>
  <!-- <div class=" tcommonBox"> -->
  <div class="reward">
    <div class="reward-title">赞赏</div>
    <div class="reward-img">
      <img src="@/assets/img/timg.jpg" />
    </div>
    <div class="reward-description">@赞赏说明：</div>
    <div class="reward-content">
      若无特殊说明，赞赏之款项用于给我补充大脑（*/∇＼*）
    </div>
    <div class="reward-content">
      如果我给你带来过欢乐，或者对你有所帮助，欢迎赞赏支持:)
    </div>
    <hr />
    <div class="reward-description">@赞赏方式：</div>
    <el-row class="donate-body" :gutter="30">
      <el-col :span="12">
        <div class="donate-tip-left donate-tip">
          <img src="@/assets/img/yoyo/wechat-reward.jpg" />
          <span>微信扫一扫，向我赞赏</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="donate-tip-right donate-tip">
          <img src="@/assets/img/yoyo/qq-reward.jpg" />
          <span>QQ扫一扫，向我赞赏</span>
        </div>
      </el-col>
    </el-row>
    <div class="reward-description">@赞赏记录：</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="pay_time" label="日期" align="center" />
      <el-table-column prop="name" label="赞赏人" align="center" />
      <el-table-column prop="money" label="金额" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  components: {
    // 定义组件
  },
  data() {
    // 选项 / 数据
    return {
      tableData: [
        {
          // 赞赏数据
          pay_time: '2020-05-02',
          name: '哈哈',
          money: '50'
        }
      ]
    }
  },
  created() {
    // 生命周期函数
  },
  methods: {
    // 事件处理器
  }
}
</script>

<style scoped lang="less">
.reward {
  // white-space: normal;
  // word-wrap: break-word;
  // word-break: break-all;
  // position: relative;
  padding: 15px;
  padding-bottom: 40px;
  border-radius: 5px;
  margin-bottom: 40px;
  background: #fff;
  font-size: 15px;

  .reward-title {
    padding: 30px 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
  .reward-description {
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .reward-content {
    font-size: 15px;
    line-height: 24px;
    padding: 5px 20px;
  }
  .donate-body {
    .donate-tip-left {
      float: right;
      span {
        color: #44b549;
      }
    }
    .donate-tip-right {
      float: left;
      span {
        color: #00a0e9;
      }
    }
    .donate-tip {
      width: 150px;
      padding: 0 6px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: auto;
      }
      span {
        display: inline-block;
        text-align: center;
      }
    }
  }
  // .el-table__body-wrapper {
  //   overflow: hidden;
  // }
  // .el-table--enable-row-hover .el-table__body tr:hover > td {
  //   background: transparent;
  // }
}
</style>
