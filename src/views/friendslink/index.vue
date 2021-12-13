<template>
  <div class="link">
    <h2>好站链接</h2>
    <LinkObj :link="link1"></LinkObj>
    <LinkObj :link="link2"></LinkObj>
  </div>
</template>

<script>
import LinkObj from '@/components/linkObj/index'
export default {
  name: 'Link',
  data() {
    return {
      link1: {
        title: 'go',
        content: [
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdfddfdsfdsfdsfdsfsdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          }
        ]
      },
      link2: {
        title: 'go',
        content: [
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdfddfdsfdsfdsfdsfsdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          },
          {
            location: '/',
            icon: '@/assets/img/link/tou.jpg',
            name: 'aa',
            desc: 'fdsffdsf'
          }
        ]
      }
    }
  },
  components: {
    LinkObj
  }
}
</script>

<style lang="less" scoped>
h2 {
  padding: 30px 0;
  border-radius: 5px;
  background: #fff;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
</style>
