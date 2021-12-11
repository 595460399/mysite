<template>
  <div class="rightListBox">
    <section>
      <div class="r1-head">
        <img src="@/assets/img/headtou.jpg" alt="" />
        <h1><span>啦啦</span>小婵</h1>
      </div>
      <div class="r1-body">
        <p>飘啊飘啊飘啊飘</p>
        <div class="catch-me">
          <el-tooltip class="item" effect="dark" content="QQ" placement="top">
            <a :href="catchMeObj.qq" target="_blank"
              ><i class="fa fa-fw fa-qq"
            /></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="wechat"
            placement="top"
          >
            <a :href="catchMeObj.wechat" target="_blank"
              ><i class="fa fa-fw fa-wechat"
            /></a>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="gitee"
            placement="top"
          >
            <a :href="catchMeObj.gitee" target="_blank"
              ><i class="fa fa-fw fa-git"
            /></a>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="更多" placement="top">
            <a href="/Aboutme"><i class="el-icon-more" /></a>
          </el-tooltip>
        </div>
      </div>
    </section>

    <div class="toTop" :style="'top:' + top" @click="toTopfun">
      <img src="@/assets/img/scroll.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import commentAPI from '@/api/comment'
// import loveAPI from '@/api/love'
export default {
  name: 'Right',
  data() {
    return {
      top: 0, // 小猫高度
      fixDo: false,
      gotoTop: false, // 返回顶部
      going: false, // 是否正在执行上滑动作
      catchMeObj: {
        qq: require('./../../assets/img/yoyo/qq.jpg'),
        wechat: require('./../../assets/img/yoyo/wechat.jpg'),
        gitee: 'https://gitee.com/smallwoogui'
      }
    }
  },
  async created() {
    this.init()
  },
  beforeDestroy() {
    window.removeEventListener('scroll')
  },
  methods: {
    ...mapActions('common', ['goDetail']),
    init() {
      const clientHeight = document.documentElement.clientHeight
      let topHieght = 0
      if (clientHeight < 900) {
        topHieght = 1000 - clientHeight
      } else {
        topHieght = 100
      }
      this.top = '-950px'
      window.addEventListener('scroll', () => {
        var t = document.documentElement.scrollTop || document.body.scrollTop
        // console.log(t)
        if (!this.going) {
          if (t > 600) {
            this.gotoTop = true
            this.top = -topHieght + 'px'
          } else {
            this.gotoTop = false
            this.top = '-950px'
          }
        }
        if (t > 1200) {
          this.fixDo = true
        } else {
          this.fixDo = false
        }
      })
    },
    toTopfun() {
      this.gotoTop = false
      this.going = true
      var timer = setInterval(() => {
        // 获取滚动条距离顶部高度
        var osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        var ispeed = Math.floor(-osTop / 7)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed
        // 到达顶部，清除定时器
        if (osTop === 0) {
          this.going = false
          this.top = '-950px'
          clearInterval(timer)
          timer = null
        }
      }, 30)
    }
  }
}
</script>

<style lang="less" scoped>
.rightListBox {
  position: relative;
  section {
    position: relative;
    padding: 15px;
    margin-bottom: 20px;
    transition: all 0.2s;
    background: #fff;
    border-radius: 5px;
  }
  section:hover {
    transform: translate(0, -2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  .r1-head {
    text-align: center;
    position: relative;
    // border-radius: 4px 4px 0 0;
    img {
      width: 100%;
      min-height: 40px;
    }
    h1 {
      position: absolute;
      bottom: 5px;
      left: 50%;
      margin: 0 0 0 -65px;
      font-size: 20px;
      letter-spacing: 0.5px;
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
      font-weight: 700;
      width: 130px;
      span {
        opacity: 0.3;
      }
    }
  }
  .r1-body p {
    margin: 5px 0 8px 0;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
  .r1-body .catch-me {
    text-align: center;
    a {
      display: inline-block;
      margin-bottom: 7px;
      position: relative;
      text-decoration: none;
      i {
        margin: 0 3px;
        display: inline-block;
        font-size: 18px;
        width: 42px;
        height: 42px;
        line-height: 42px;
        border-radius: 42px;
        color: rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        font-style: normal;
      }
    }
    a:hover i {
      color: #fff;
      background: #f4692c;
    }
  }
}

/*回到顶部*/
/*返回到顶部*/
.toTop {
  position: fixed;
  right: 40px;
  z-index: 99;
  width: 100px;
  transition: all 0.5s 0.3s ease-in-out;
  cursor: pointer;
}

.toTop img {
  width: 100%;
  height: auto;
}

@keyframes toflow {
  0% {
    /*top:400px;*/
    transform: scale(0.95) translate(0, 10px);
  }
  50% {
    /*top:410px;*/
    transform: scale(1) translate(0, 0px);
  }
  100% {
    /*top:400px;*/
    transform: scale(0.95) translate(0, 10px);
  }
}
</style>
