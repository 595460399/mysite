<template>
  <div class="board">
    <div class="description">
      <div class="title">留言板</div>
      <section>
        <h2>
          走过路过不要错过！交流、咨询、吐槽、感叹、勾搭都在这里，尽情畅谈！
        </h2>
        <div>
          <img src="@/assets/img/timg.jpg" />
        </div>
      </section>
    </div>
    <Message :id="0" class="message"></Message>
  </div>
</template>

<script>
import Message from '@/components/message'
export default {
  name: 'Board',
  components: {
    Message
  }
}
</script>

<style lang="less" scoped>
.description {
  position: relative;
  background: #fff;
  padding: 15px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  .title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
  }
  section {
    h2 {
      font-weight: bold;
      line-height: 24px;
      padding: 10px 20px;
    }
    div {
      margin: 15px 0;
    }
  }
}
.message {
  position: relative;
  background: #fff;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
}
</style>
