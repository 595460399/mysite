<template>
  <el-row class="" v-loading="isLoading">
    <el-col :span="24">
      <div v-if="isLoading" class="loading" />
      <div class="articleObj" v-if="!isLoading">
        <ArticleHead :item="articleObj" class="article-head"></ArticleHead>
        <Content
          v-show="content"
          :content="content"
          class="article-content"
        ></Content>
        <div class="btnBox">
          <div class="likeBox">
            <i class="fa fa-fw fa-heart-o" />喜欢 | {{ articleObj.likeCount }}
          </div>
          <div class="collectBox">
            <i class="fa fa-fw fa-star-o" />收藏 | {{ articleObj.collectCount }}
          </div>
        </div>
        <div class="donate">
          <div class="donate-word">
            <span @click="donateShow = !donateShow">赞赏</span>
          </div>
          <el-row v-show="donateShow" class="donate-body" :gutter="30">
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
        </div>
        <Message :id="id"></Message>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { cloneDeep } from 'lodash'
import articleAPI from '@/api/article'
import ArticleHead from '@/components/articleHead'
import Message from '@/components/message'
import Content from '@/components/content'
export default {
  name: 'Detail',
  components: {
    ArticleHead,
    Content,
    Message
  },
  data() {
    return {
      donateShow: false,
      isLoading: true,
      articleObj: {},
      content: '',
      id: ''
    }
  },
  watch: {
    $route() {
      // 对路由变化作出响应...
      this.id = this.$route.params.id
      this.getInfo(this.id)
      this.donateShow = false
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getInfo(this.id)
  },
  methods: {
    async getInfo(id) {
      const res = await articleAPI.getInfo({ id })
      this.articleObj = cloneDeep(res.data.article)
      this.content = this.articleObj.content
      this.isLoading = false
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  height: 20px;
}
.articleObj {
  position: relative;
  background: #fff;
  // padding: 15px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 40px;

  .article-head,
  .article-content {
    padding-left: 15px;
    padding-right: 15px;
  }
  .article-head {
    padding-top: 15px;
  }
  .btnBox {
    margin-top: 40px;
    background-color: yellow;
    // display: inline-block;
    // padding: 0 10px;
    // line-height: 35px;
    .likeBox,
    .collectBox {
      display: inline-block;
      // margin-left: 10px;
      margin-left: auto;
      border-radius: 35px;
      border: 1px solid #e26d6d;
      padding: 0 10px;
      height: 35px;
      line-height: 35px;
      color: #e26d6d;
      cursor: pointer;
    }
  }
  .donate {
    .donate-word {
      margin: 40px 0;
      text-align: center;
      span {
        display: inline-block;
        margin: 0 auto;
        border-radius: 4px;
        width: 80px;
        height: 34px;
        line-height: 34px;
        color: #fff;
        background: #e26d6d;
        cursor: pointer;
      }
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
  }
}
</style>
