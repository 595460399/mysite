<template>
  <div class="archive">
    <div class="title">归档</div>
    <div class="class-title">分类</div>
    <a href="javascript:void(0);" class="reset" @click="changeClassSelect(null)"
      >重置选项</a
    >
    <ul class="class-content">
      <li
        v-for="item in classList"
        :key="item.id"
        :class="item.id === classId ? 'class-selected' : ''"
        @click="changeClassSelect(item.id)"
      >
        <a href="javascript:void(0);">{{ item.name }}</a
        ><span>（{{ item.count }}）</span>
      </li>
    </ul>
    <div class="tag-title">标签</div>
    <a href="javascript:void(0);" class="reset" @click="changeTagSelect(null)"
      >重置选项</a
    >
    <ul class="tag-content">
      <li
        v-for="item in tagList"
        :key="item.id"
        :class="item.id === tagId ? 'tag-selected' : ''"
        @click="changeTagSelect(item.id)"
      >
        <a href="javascript:void(0);">{{ item.name }}</a>
      </li>
    </ul>
    <div class="article-list" v-for="item in articleList" :key="item.year">
      <div class="year">{{ item.year }}</div>
      <el-timeline class="time-line">
        <el-timeline-item
          v-for="(content, index) in item.content"
          :key="index"
          :hide-timestamp="true"
        >
          <span>{{ getTimeLine(content.date) }}</span
          ><a href="javascript:viod(0);" @click="goDetail(content.id)">{{
            content.name
          }}</a>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { getTimeLine } from '@/utils'
import { mapActions } from 'vuex'
import archiveAPI from '@/api/archive'
export default {
  name: 'Archive',
  data() {
    return {
      tagId: null,
      classId: null,
      classList: [],
      tagList: [],
      articleList: []
    }
  },
  async created() {
    await this.routeChange()
    await this.getClassList()
    await this.getTagList()
  },
  watch: {
    $route: 'routeChange'
  },
  methods: {
    getTimeLine,
    ...mapActions('common', ['goDetail']),
    async routeChange() {
      this.classId = parseInt(this.$route.query.classId) || null
      this.tagId = parseInt(this.$route.query.tagId) || null
      await this.getArticleList()
    },
    changeClassSelect(classId) {
      this.$router.push({
        name: 'Archive',
        query: {
          classId,
          tagId: this.tagId
        }
      })
    },
    changeTagSelect(tagId) {
      this.$router.push({
        name: 'Archive',
        query: {
          classId: this.classId,
          tagId
        }
      })
    },
    async getClassList() {
      const params = {}
      const res = await archiveAPI.getClassList(params)
      this.classList = res.data.content
    },
    async getTagList() {
      const params = {}
      const res = await archiveAPI.getTagList(params)
      this.tagList = res.data.content
    },
    async getArticleList() {
      const params = {
        categoryId: this.classId,
        tagId: this.tagId
      }
      const res = await archiveAPI.getArticleList(params)
      this.articleList = res.data.content
    }
  }
}
</script>

<style lang="less" scoped>
.archive {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  position: relative;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 40px;
  font-size: 15px;
  background: #fff !important;
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding-top: 15px;
  }
  .class-title,
  .tag-title {
    text-align: left;
    font-size: 22px;
    font-weight: 700;
    margin: 30px 0;
  }
  .reset {
    display: block;
    font-size: 14px;
    font-weight: 400;
    margin: 0 0 10px 20px;
    opacity: 0.3;
  }
  ul.class-content {
    padding: 0 10px;
    margin-bottom: 10px;
    li {
      display: inline-block;
      padding: 8px 10px;
      a {
        color: #ab3300;
        &:hover {
          color: #ff4d00;
        }
      }
      span {
        color: #bbb;
      }
    }
    li.class-selected {
      background-color: rgba(171, 51, 0, 0.6);
      border-radius: 4px;
      a,
      span {
        color: #fff;
      }
    }
  }
  ul.tag-content {
    padding: 0 10px;
    margin-bottom: 20px;
    li {
      display: inline-block;
      padding: 8px 10px;
      a {
        color: black;
        &:hover {
          color: #ff4d00;
        }
      }
    }
    li.tag-selected {
      a {
        color: #ff4d00;
      }
    }
  }
  .article-list {
    .year {
      text-align: left;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .time-line {
      padding-left: 25px;
      span {
        color: #00a7e0;
        font-size: 12px;
        margin-right: 10px;
      }
      a {
        font-size: 14px;
        font-weight: 400;
        line-height: inherit;
        color: #444444;
        // color: red;
        &:hover {
          // color: green;
          color: #222;
        }
      }
    }
  }
}
</style>
