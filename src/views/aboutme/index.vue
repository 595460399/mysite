<template>
  <div class="aboutme">
    <h2 class="title">关于我</h2>
    <section class="content">
      <p>
        <img src="@/assets/img/maoto.png" alt="" class="aboutMeImg" />
      </p>
      <p class="description-title">yoyo，数量经济学专业，金融计量方向</p>
      <p class="description-title">
        民间分析师(看的还算准)，野生全栈工程师（技术还算可以），通过注册会计师专业阶段。
      </p>
      <p class="description">
        具备扎实的经济学、金融学基础，具有一定的财务会计基础，了解机器学习相关的算法模型以及神经网络模型的构建。对于网站开发与自动化运维、爬虫、数据分析、量化交易、金融工程具有浓厚的兴趣。
      </p>
      <p class="description">
        目前的技术栈主要包括：python,go,javascript,typescript,R,Linux,K8s,JenKins,Docker,Nginx,MySQL,Mongodb,Redis,BackTrader,Django,Flask,Gin,Gorm,Beego,Vue...
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style lang="less" scoped>
.aboutme {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  position: relative;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  font-size: 15px;
  background: #fff !important;
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  .aboutMeImg {
    max-width: 100%;
  }
  .description,
  .description-title {
    font-size: 15px;
    line-height: 25px;
    padding: 10px 30px;
  }
  .description {
    text-indent: 2em;
  }
}
</style>
