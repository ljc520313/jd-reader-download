<template>
  <!-- 章节内容 -->
  <div>
    <content-item
      v-for="(content, index) in data.contents"
      :book-id="shared.book.id"
      :content="content"
      :key="index"
    />
  </div>
</template>
<script>
import { getChapterContent } from "../services/api";
import ContentItem from "./ContentItem";
import { SharedInfo } from "../services/store";
export default {
  props: {
  },
  data() {
    return {
      data: {
        contents: []
      },
      shared: SharedInfo
    };
  },
  methods: {
    loadContent(prevChapter, nextChapter) {
      if (!nextChapter.chapterUrl) {
        return;
      }
      getChapterContent(this.shared.book.id, nextChapter.chapterUrl)
        .then(response => {
          this.data.contents = [response];
          this.$nextTick(() => {
            setTimeout(function() {
              document.scrollingElement.scrollTop = 0;
            }, 200);
          });
        })
        .catch(err => {
          this.data.contents = [
            `章节( ${nextChapter.name} )数据获取失败: ${err.message}`
          ];
        });
    }
  },
  watch: {
    "shared.category.selected": {
      handler(newVal, oldVal) {
        if (newVal) {
          this.loadContent(oldVal || {}, newVal);
        }
      },
      immediate: true,
      deep: true
    }
  },
  components: {
    "content-item": ContentItem
  }
};
</script>