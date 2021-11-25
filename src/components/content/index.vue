<template>
  <MarkdownPreview
    :initialValue="safe_content"
    :copyCode="true"
  ></MarkdownPreview>
</template>

<script>
import xss from 'xss'
import MarkdownPreview from '@/components/markdown/preview'
export default {
  name: 'Content',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  components: {
    MarkdownPreview
  },
  computed: {
    safe_content() {
      return xss(this.content)
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
