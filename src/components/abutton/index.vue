<template>
  <span :class="['more', size == 'small' ? 'small' : 'large']" @click="handler">
    <slot></slot>
    <i v-if="icon" :class="icon"></i>
  </span>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    handler() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
.more {
  color: #fff;
  font-size: 12px;
  line-height: 30px;
  height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  background: #97dffd;
  transition: all 0.3s ease-in-out;
}

.more:hover {
  background-color: #48456d;
}
.large {
  display: block;
}
.small {
  display: inline-block;
}
</style>
