<template>
  <div class="message" v-if="!listLoading">
    <div class="write-message">
      <h3>发表评论</h3>
      <el-form @submit.native.prevent>
        <el-form-item>
          <el-input
            type="textarea"
            v-model="textarea"
            :rows="2"
            placeholder="说点什么呢``"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <AButton size="large" @click="sendMessage">{{ sendTip }}</AButton>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-message">
      <a href="javascript:void(0);"> {{ total }} 条</a>
      <el-row class="ul">
        <el-col v-for="(item, index) in comments" :key="index" class="li">
          <header>
            <HeadImg :src="item.avatar" />
            <div class="i-name">
              {{ item.username }}
            </div>
            <div v-show="item.label" class="i-class">
              {{ item.label }}
            </div>
            <div class="i-time">
              <time>{{ initDate(item.createDate) }}</time>
            </div>
          </header>
          <section>
            <p v-html="safe_content(item.content)" />
          </section>
        </el-col>
      </el-row>
      <AButton v-show="hasMore" size="large" @click="addMore">查看更多</AButton>

      <AButton v-show="!hasMore" size="large">没有更多</AButton>
    </div>
  </div>
</template>

<script>
import xss from 'xss'
import commentAPI from '@/api/comment'
import AButton from '@/components/abutton'
import { initDate } from '@/utils/index.js'
export default {
  name: 'Message',
  props: ['id'],
  data() {
    return {
      listLoading: false,
      sendLoading: false,
      sendTip: '发送',
      textarea: '',
      totalPage: 0,
      total: 0,
      pageSize: 5,
      current: 1,
      hasMore: false,
      comments: []
    }
  },

  components: {
    AButton
  },
  created() {
    this.routeChange()
  },
  watch: {
    $route: 'routeChange'
  },
  methods: {
    initDate,
    async getCommentList() {
      const params = {
        pageSize: this.pageSize,
        current: this.current,
        articleId: this.id
      }
      const res = await commentAPI.getList(params)
      const { comments, pagination } = res.data

      this.comments = this.comments.concat(comments)
      this.total = pagination.total
      this.totalPage = pagination.totalPage
      this.current = pagination.currentPage
      this.hasMore = pagination.totalPage > pagination.currentPage
      this.listLoading = false
    },
    async sendMessage() {
      // console.log(this.textarea)
      const content = xss(this.textarea)
      if (content && content.trim()) {
        const params = {
          articleId: this.id,
          content
        }
        await commentAPI.addInfo(params)
        this.textarea = ''
        this.comments = []
        await this.getCommentList()
      } else {
        this.sendTip = '内容不能为空~'
        const timer = setTimeout(() => {
          this.sendTip = '发送~'
          clearTimeout(timer)
        }, 2000)
      }
    },
    async addMore() {
      ++this.current
      await this.getCommentList()
    },
    async routeChange() {
      this.current = 1
      await this.getCommentList()
    },
    safe_content(content) {
      return xss(content)
    }
  }
}
</script>

<style lang="less" scoped>
.message {
  margin-top: 40px;
  padding: 30px;
  .write-message {
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
  .list-message {
    a {
      display: block;
      border-left: 2px solid #363d4c;
      padding: 0 10px;
      margin: 40px 0;
      font-size: 20px;
    }
    .ul {
      border-bottom: 1px solid #e5eaed;
      .li {
        border-top: 1px solid #e5eaed;
        padding: 20px 0;
        header {
          margin-bottom: 10px;
          img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            float: left;
            transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            margin-right: 15px;
          }
          img:hover {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
          }
          .i-name {
            display: inline-block;
            margin: 5px 8px 7px 0;
            color: #444;
            font-weight: bold;
            font-size: 14px;
          }
          .i-class {
            display: inline-block !important;

            margin-left: 10px;
            border-radius: 5px;
            padding: 3px 6px;

            background: #dff0d8;
            color: #3c763d;
            font-size: 12px;
            font-weight: 400;
          }
          .i-time {
            color: #aaa;
            font-size: 12px;
          }
        }
        section {
          margin-left: 80px;
          word-wrap: break-word;
          word-break: normal;
          p {
            line-height: 1.3;
            padding-right: 15px;
          }
        }
      }
    }
  }
}
</style>
