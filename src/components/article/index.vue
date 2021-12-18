<template>
  <div class="article">
    <el-row class="sharelistBox" v-loading="isLoading">
      <div v-if="isLoading" class="loading" />
      <el-col :span="24" v-for="(item, index) in list" :key="index">
        <div class="articleObj">
          <ArticleHead :item="item" class="article-head"></ArticleHead>
          <Content :content="item.content" class="article-content"></Content>
          <div class="button">
            <AButton
              icon="el-icon-d-arrow-right"
              size="small"
              @click="goDetail(item._id)"
              >阅读全文</AButton
            >
          </div>
        </div>
      </el-col>
      <el-col :span="24" v-if="!isLoading">
        <el-pagination
          background
          layout="prev, pager, next"
          :pager-count="7"
          :page-size="pageSize"
          :page-count="pageCount"
          :current-page.sync="current"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { goBackTop } from '@/utils/index.js'
import Content from '@/components/content'
import ArticleHead from '@/components/articleHead'
import AButton from '@/components/abutton'
import articleAPI from '@/api/article'
export default {
  name: 'Article',
  components: {
    Content,
    ArticleHead,
    AButton
  },
  data() {
    return {
      keywords: '',
      like: '',
      collect: '',
      current: 1,
      isLoading: true,
      pageSize: 10,
      pageCount: 0,
      list: []
    }
  },

  created() {
    // console.log('article', this.$route)
    this.getList()
  },
  methods: {
    ...mapActions('common', ['goDetail']),
    handleCurrentChange(val) {
      this.current = val
      this.getList()
      goBackTop()
    },
    getList() {
      const params = {
        keywords: this.keywords,
        like: this.like,
        collect: this.collect,
        pageSize: this.pageSize,
        current: this.current
      }
      articleAPI.getList(params).then((res) => {
        const { content, pagination } = res.data
        this.list = content
        this.pageCount = pagination.pageCount
        this.current = pagination.currentPage
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="less">
.article .sharelistBox {
  width: 100%;
  // background-color: green;
  .loading {
    height: 20px;
    // margin: 0 auto;
  }
}

.article .articleObj {
  // white-space: normal;
  // word-wrap: break-word;
  // word-break: break-all;
  position: relative;
  background: #fff;
  // padding: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  // overflow: hidden;
  // font-size: 15px;
  .article-head,
  .article-content,
  .button {
    padding-left: 15px;
    padding-right: 15px;
  }
  .article-head {
    padding-top: 15px;
  }

  .button {
    text-align: center;
    padding: 15px 0 15px 0;
  }
}

.article .el-pagination.is-background {
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  text-align: center;
  background: #fff;
  .btn-prev,
  .el-pager li,
  .btn-next {
    border-radius: 50%;
  }
  .el-pager li:hover {
    color: #97dffd;
  }
  .el-pager li.active {
    background-color: #97dffd;
    color: #ffffff;
  }
}
</style>
