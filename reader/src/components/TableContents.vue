<template>
  <!-- 目录 -->
  <li :data-index="category.index" :class="clsNames" :style="styles" :title="category.name">
    <div @click="onSelectCategory(category)">{{category.name}}</div>
  </li>
</template>
<script>
import { SharedInfo } from "../services/store";
export default {
  name: "table-contents",
  props: {
    category: {
      required: true
    }
  },
  data() {
    return {
      shared: SharedInfo
    };
  },
  methods: {
    onSelectCategory(category) {
      this.shared.category.selected = category;
    }
  },
  computed: {
    clsNames() {
      const names = {
        selected: this.shared.category.selected.id === this.category.id
      };
      return names;
    },
    styles() {
      return {
        "text-indent": this.category.level + "em"
      }
    }
  }
};
</script>