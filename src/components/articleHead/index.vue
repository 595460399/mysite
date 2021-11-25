<template>
  <div class="head">
    <span class="round-date">
      <span class="month">{{
        showInitDate(item.createDate, 'month') + '月'
      }}</span>
      <span class="day">{{ showInitDate(item.createDate, 'date') }}</span>
    </span>
    <header class="article-head">
      <div class="article-head-title">
        <a href="javascript:void(0);" @click="goDetail(item._id)">
          {{ item.title }}
        </a>
      </div>
      <div class="article-head-count">
        <i class="fa fa-fw fa-user" />发表于
        <i class="fa fa-fw fa-clock-o" /><span>{{
          showInitDate(item.createDate)
        }}</span>
        • <i class="fa fa-fw fa-eye" />{{ item.browseCount }} 次围观 •
        <i class="fa fa-fw fa-comments" />活捉 {{ item.commentCount }} 条 •
        <span class="rateBox">
          <i class="fa fa-fw fa-heart" />{{
            item.likeCount ? item.likeCount : 0
          }}点赞 • <i class="fa fa-fw fa-star" />{{
            item.collectCount ? item.collectCount : 0
          }}收藏
        </span>
      </div>
    </header>
    <div v-if="activeCateList.length > 0" class="round-tag">
      <a href="javascript:void(0);" @click="goArchive(item.classId)"
        >{{ filterName(activeCateList, item.classId) }}分享dfdsfdsf 镜</a
      >
    </div>
  </div>
</template>

<script>
import { initDate } from '@/utils/index.js'
export default {
  name: 'ArticleHead',
  props: {
    item: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      activeCateList: ['d']
    }
  },
  created() {
    console.log(this.item)
  },
  methods: {
    showInitDate: initDate,
    goArchive(id) {
      console.log(`go archive ${id}`)
    },
    filterName(activeCateList, classId) {
      return activeCateList[classId]
    },
    goDetail(id) {
      console.log(`go detail ${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  position: relative;
  margin-bottom: 50px;
}
.round-date {
  position: absolute;
  top: -20px;
  left: -35px;
  height: 60px;
  width: 70px;
  padding-top: 10px;
  border-radius: 100%;
  color: #fff;
  background: #97dffd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.round-date span {
  text-align: center;
  display: block;
}
.round-date .day {
  font-size: 30px;
  font-weight: 700;
}

.article-head {
  .article-head-title {
    padding: 20px 0 10px 0;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
  .article-head-count {
    margin: 20px 0;
    text-align: center;
    color: #555;
    font-size: 14px;
    .rateBox {
      display: inline-block;
    }
    .i {
      font-size: 16px;
    }
  }
}

.round-tag {
  position: absolute;
  left: -15px;
  // border-color: #97dffd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  // margin: 5px 0 15px 2px;
  border-radius: 0 4px 4px 0;
  padding: 7px 11.2px 7px 32px;
  // display: inline-block;
  background-color: #97dffd;
  color: #fff;
  font-size: 14px;
}

.round-tag::after {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border-top: 0 solid transparent;
  border-right-width: 1em;
  border-right-color: #48456d;
  border-right-style: solid;
  border-bottom: 1em solid transparent;
  border-left: 0 solid transparent;
  width: 0;
  height: 0;
}
</style>
