<template>
  <Body>
  <h1 slot="title">Infinite Scroll</h1>
  <template>
    <InfiniteScroll :items="posts" :loadMore="nextPage"/>
  </template>
  </Body>
</template>

<script>
import Body from "~/layouts/Body";
import InfiniteScroll from "~/components/InfiniteScroll";
export default {
  async asyncData({ app }) {
    const posts = await app.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    return {
      posts
    };
  },
  data() {
    return {
      page: 1,
      posts: []
    };
  },
  components: {
    Body,
    InfiniteScroll
  },
  methods: {
    nextPage: async function() {
      const data = await this.loadData();
      this.posts = this.posts.concat(data);
    },
    loadData: function() {
      return this.$axios.$get(
        `https://jsonplaceholder.typicode.com/posts?_page=${++this.page}`
      );
    }
  }
};
</script>
