<template>
  <!-- 单条内容 -->
  <div v-html="htmlContent"></div>
</template>
<script>
import { BOOKS_ROOT_DIR } from "../services/api";
export default {
  props: {
    content: {
      required: true,
      type: String
    },
    bookId: {
      required: true
    }
  },
  data() {
    return {
      booksRootDir: BOOKS_ROOT_DIR
    };
  },
  computed: {
    htmlContent() {
      const startIndex = this.content.toLowerCase().indexOf("<body>"),
        endIndex = this.content.toLowerCase().indexOf("</body>");
      console.log("start index: ", startIndex, ", end index: ", endIndex);
      if (startIndex === -1 || endIndex === -1) {
        console.log("not found <body> tag");
        return this.content;
      }
      const html = this.content
        .substring(startIndex + "<body>".length, endIndex)
        .replace(
          /https?:\/\/img30\.360buyimg\.com\//g,
          `${BOOKS_ROOT_DIR}/${this.bookId}/res/`
        );
      return html;
    }
  }
};
</script>