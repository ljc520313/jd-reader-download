<template>
  <router-link :to="`/book/${book.id}`">{{book.name || book.id}} <span v-if="book.bookInfo">[ 作者: {{book.bookInfo.author}}, 总共 {{book.bookInfo.totalPage}} 页 ]</span></router-link>
</template>
<script>
export default {
  props: {
    book: {
      required: true
    }
  }
};
</script>