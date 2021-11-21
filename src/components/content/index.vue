<template>
  <div v-html="contentInner"></div>
</template>

<script>
import xss from 'xss'
import { marked } from 'marked'
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const hljs = require('highlight.js')
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default {
  name: 'Content',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    contentInner() {
      // return marked.parse(xss(this.content))
      return marked.parse(this.content)
    }
  },
  methods: {
    xss
  }
}
</script>

<style lang="less" scoped></style>
