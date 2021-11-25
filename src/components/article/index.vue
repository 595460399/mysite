<template>
  <div class="article">
    <el-row class="sharelistBox" v-loading="isLoading">
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
      pageCount: 10,
      list: []
    }
  },

  created() {
    // console.log('article', this.$route)
    this.getList()
  },
  methods: {
    handleCurrentChange(val) {
      this.current = val
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
        console.log(res)
        const { list, pagination } = res.data
        this.list = list
        this.pageCount = pagination.pageCount
        this.current = pagination.currentPage
        this.isLoading = false
      })
    },
    goDetail(id) {
      console.log(`go detail ${id}`)
    }
  }
}
</script>

<style lang="less">
.article .sharelistBox {
  width: 100%;
  background-color: green;
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
  .article-more {
    padding-left: 15px;
    padding-right: 15px;
  }
  .article-head {
    padding-top: 15px;
  }
  .button {
    text-align: center;
    padding: 0 0 15px 0;
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
