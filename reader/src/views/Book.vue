<template>
  <div>
    <ol class="breadcrumb" :title="docTitle">
      <li>
        <router-link to="/" @click="toggleToC">首页</router-link>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          @click="shared.category.showToC = !shared.category.showToC"
        >{{shared.book.name}}</a>
      </li>
      <li class="active">{{shared.category.selected.name}}</li>
    </ol>
    <div class="functions">
      <ul>
        <li>
          <router-link to="/" class="btn btn-xs btn-primary" @click="toggleToC">首页</router-link>
        </li>
        <li>
          <button class="btn btn-xs btn-primary" @click="toggleToC">目录</button>
        </li>
        <li>
          <button class="btn btn-xs btn-primary" @click="goPrevChapter()">上一节</button>
        </li>
        <li>
          <button class="btn btn-xs btn-primary" @click="goNextChapter()">下一节</button>
        </li>
      </ul>
    </div>
    <div
      class="table-of-contencts overscroll"
      :style="`max-height: ${styles.winHeight - 30}px`"
      v-show="shared.category.showToC"
    >
      <ul class="book-category">
        <table-contents
          v-for="category in data.categories"
          :category="category"
          :key="category.id"
        />
      </ul>
    </div>
    <div class="col-sm-12 chapter-content" @click="toggleToC(false)">
      <chapter-content />
    </div>
  </div>
</template>
<script>
import {
  getBookCategoryTree,
  getBooksProgress,
  updateBooksProgress,
  getLocalBookInfo
} from "../services/api";
import TableContents from "../components/TableContents";
import ChapterContent from "../components/ChapterContent";
import { SharedInfo } from "../services/store";
const ConsoleColor = "color: #666";

export default {
  data() {
    return {
      bookId: this.$route.params.id,
      data: {
        categories: []
      },
      styles: {
        winHeight: window.innerHeight
      },
      shared: SharedInfo
    };
  },
  mounted() {
    this.loadCategoryTree();
    this.initBookInfo();
  },
  methods: {
    initBookInfo() {
      this.shared.book = getLocalBookInfo(this.bookId) || { id: this.bookId };
    },
    loadCategoryTree() {
      getBookCategoryTree(this.bookId).then(response => {
        const categories = response.catalogList.map(item => ({
          id: item.catalogId,
          name: item.catalogName,
          bookId: item.bookId,

          catalogFid: item.catalogFid,
          chapterUrl: item.chapterUrl,
          endPage: item.endPage,
          isFree: item.isFree,
          level: item.level,
          sort: item.sort,
          startPage: item.startPage
        }));
        this.data.categories = categories;
        this.initReadProgress();
      });
    },
    setHeight() {
      window.addEventListener("resize", () => {
        this.styles.winHeight = window.innerHeight - 10;
      });
    },
    toggleToC(val) {
      if (typeof val === "boolean") {
        this.shared.category.showToC = val;
      } else {
        this.shared.category.showToC = !this.shared.category.showToC;
      }
    },
    goToChapter(direct, fromChapter) {
      if (!fromChapter) {
        fromChapter = this.shared.category.selected;
      }
      const isPrev = direct === "prev";
      // const isNext = !isPrev;
      const cnDirect = isPrev ? "上" : "下";
      console.log(
        `当前章节为 %c${JSON.stringify(
          fromChapter
        )}%c, 开始计算${cnDirect}一章节`,
        ConsoleColor
      );
      const index = this.data.categories.indexOf(fromChapter);
      if (index === -1) {
        console.warn("从章节列表没有找到当前章节");
        return;
      }
      let otherChapter = this.data.categories[isPrev ? index - 1 : index + 1];
      if (fromChapter.chapterUrl === otherChapter.chapterUrl) {
        console.log(`当前章节和${cnDirect}一章节内容相同, 跳过一个章节`);
        otherChapter = this.data.categories[isPrev ? index - 2 : index + 2];
      }
      if (!otherChapter) {
        console.warn("没有更多章节");
        return;
      }

      const fromChapterUrl = (fromChapter.chapterUrl || "").split("#"),
        otherChapterUrl = (otherChapter.chapterUrl || "").split("#");
      if (fromChapterUrl[0] === otherChapterUrl[0]) {
        console.log(
          `待进入的${cnDirect}一章节内容在当前章节页面已经存在, 跳过${cnDirect}一章节: %c${JSON.stringify(
            otherChapter
          )}%c 重新开始计算${cnDirect}一章节.`,
          ConsoleColor
        );
        this.goToChapter(direct, otherChapter);
        return;
      }

      this.shared.category.selected = otherChapter;
      console.log(
        `将要进入${cnDirect}一章节是: %c${JSON.stringify(
          this.shared.category.selected
        )}%c`,
        ConsoleColor
      );
      this.saveReadProgress(this.shared.category.selected);
    },
    goPrevChapter() {
      this.goToChapter("prev");
    },
    goNextChapter() {
      this.goToChapter("next");
    },
    initReadProgress() {
      const localData = getBooksProgress().filter(
        item => item.id === this.bookId
      )[0];

      if (!localData || !localData.chapterId) {
        this.shared.category.selected = this.data.categories[0];
        return;
      }
      const matchChapter = this.data.categories.filter(
        c => c.id === localData.chapterId
      )[0];
      if (matchChapter) {
        this.shared.category.selected = matchChapter;
      }
    },
    saveReadProgress(chapter) {
      const currentProgress = {
        id: this.bookId,
        name: this.shared.book.name,
        chapterId: chapter.id,
        chapterName: chapter.name,
        chapterUrl: chapter.chapterUrl,
        date: Date.now(),
        bookInfo: this.shared.book.bookInfo
      };
      const progress = getBooksProgress();
      let hasFound = false;
      for (let index = 0; index < progress.length; index++) {
        const item = progress[index];
        if (item.id === currentProgress.id) {
          progress[index] = currentProgress;
          hasFound = true;
          break;
        }
      }
      if (!hasFound) {
        progress.push(currentProgress);
      }
      updateBooksProgress(progress);
    }
  },
  computed: {
    docTitle() {
      const title = `${this.shared.category.selected.name} - ${this.shared.book.name}`;
      document.title = title;
      return title;
    }
  },

  components: {
    "table-contents": TableContents,
    "chapter-content": ChapterContent
  }
};
</script>